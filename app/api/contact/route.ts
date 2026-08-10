import { NextResponse } from "next/server";

import { saveContact } from "@/lib/db/contacts";
import { trackAnalyticsEvent } from "@/lib/utils";
import { createContactZohoLead } from "@/lib/zoho";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  captchaAnswer: number;
  captchaExpected: number;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const data = body as Record<string, unknown>;

  if (
    !isNonEmptyString(data.firstName) ||
    !isNonEmptyString(data.lastName) ||
    !isNonEmptyString(data.email) ||
    !isNonEmptyString(data.phone) ||
    !isNonEmptyString(data.service) ||
    !isNonEmptyString(data.message)
  ) {
    return null;
  }

  const captchaAnswer = Number(data.captchaAnswer);
  const captchaExpected = Number(data.captchaExpected);

  if (
    !Number.isFinite(captchaAnswer) ||
    !Number.isFinite(captchaExpected)
  ) {
    return null;
  }

  return {
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    service: data.service.trim(),
    message: data.message.trim(),
    captchaAnswer,
    captchaExpected,
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const payload = parsePayload(body);

  if (!payload) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing or invalid fields",
        required: [
          "firstName",
          "lastName",
          "email",
          "phone",
          "service",
          "message",
          "captchaAnswer",
          "captchaExpected",
        ],
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      { success: false, error: "Enter a valid email address" },
      { status: 400 },
    );
  }

  if (payload.captchaAnswer !== payload.captchaExpected) {
    return NextResponse.json(
      { success: false, error: "Security check failed. Please try again." },
      { status: 400 },
    );
  }

  let saved;

  try {
    saved = await saveContact({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
    });
  } catch (error) {
    console.error("Failed to save contact:", error);

    return NextResponse.json(
      { success: false, error: "Failed to save your message" },
      { status: 500 },
    );
  }

  trackAnalyticsEvent({
    name: "contact_submitted",
    properties: {
      contactId: saved.id,
      service: payload.service,
    },
  });

  let leadId: string | null = null;

  try {
    const lead = await createContactZohoLead({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
    });
    leadId = lead.id ?? null;
  } catch (error) {
    // Local save is the source of truth when Zoho is unavailable.
    console.error("Zoho contact lead creation failed:", error);
  }

  return NextResponse.json({
    success: true,
    id: saved.id,
    leadId,
    timestamp: saved.timestamp,
  });
}
