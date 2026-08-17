import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

import type { AssessmentScore } from "@/lib/utils";

export type AssessmentRecord = {
  id: string;
  companySize: string;
  industry: string;
  leads: string;
  system: string;
  challenge: string;
  score: AssessmentScore;
  timestamp: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "assessments.json");

async function ensureStore() {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    await readFile(DATA_FILE, "utf8");
  } catch {
    await writeFile(DATA_FILE, "[]\n", "utf8");
  }
}

async function readAssessments(): Promise<AssessmentRecord[]> {
  await ensureStore();

  const raw = await readFile(DATA_FILE, "utf8");

  try {
    const parsed = JSON.parse(raw) as AssessmentRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAssessments(records: AssessmentRecord[]) {
  await ensureStore();
  await writeFile(DATA_FILE, `${JSON.stringify(records, null, 2)}\n`, "utf8");
}

export async function listAssessments(): Promise<AssessmentRecord[]> {
  const records = await readAssessments();
  return records.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );
}

export async function saveAssessment(
  input: Omit<AssessmentRecord, "id" | "timestamp"> & { timestamp?: string },
): Promise<AssessmentRecord> {
  const record: AssessmentRecord = {
    id: randomUUID(),
    companySize: input.companySize,
    industry: input.industry,
    leads: input.leads,
    system: input.system,
    challenge: input.challenge,
    score: input.score,
    timestamp: input.timestamp ?? new Date().toISOString(),
  };

  try {
    const records = await readAssessments();
    records.push(record);
    await writeAssessments(records);
  } catch (error) {
    console.error("Local file persist failed (read-only filesystem on Vercel):", error);
  }

  return record;
}
