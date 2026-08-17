import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type ContactRecord = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "contacts.json");

async function ensureStore() {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    await readFile(DATA_FILE, "utf8");
  } catch {
    await writeFile(DATA_FILE, "[]\n", "utf8");
  }
}

async function readContacts(): Promise<ContactRecord[]> {
  await ensureStore();

  const raw = await readFile(DATA_FILE, "utf8");

  try {
    const parsed = JSON.parse(raw) as ContactRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeContacts(records: ContactRecord[]) {
  await ensureStore();
  await writeFile(DATA_FILE, `${JSON.stringify(records, null, 2)}\n`, "utf8");
}

export async function listContacts(): Promise<ContactRecord[]> {
  const records = await readContacts();
  return records.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );
}

export async function saveContact(
  input: Omit<ContactRecord, "id" | "timestamp"> & { timestamp?: string },
): Promise<ContactRecord> {
  const record: ContactRecord = {
    id: randomUUID(),
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    phone: input.phone,
    service: input.service,
    message: input.message,
    timestamp: input.timestamp ?? new Date().toISOString(),
  };

  // Skip filesystem persistence on Vercel production to keep logs clean
  if (process.env.VERCEL) {
    console.log("[db:contacts] Vercel environment detected. Skipping local file write.");
    return record;
  }

  try {
    const records = await readContacts();
    records.push(record);
    await writeContacts(records);
  } catch (error) {
    console.warn("Local file persist failed:", error);
  }

  return record;
}
