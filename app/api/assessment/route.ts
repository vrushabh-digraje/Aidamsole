import { NextResponse } from "next/server";

import { saveAssessment } from "@/lib/db/assessments";
import { sendAssessmentEmails } from "@/lib/email";
import {
  getLeadTag,
  scoreAssessment,
  scoreToLeadCategory,
  trackAnalyticsEvent,
} from "@/lib/utils";
import { sendWhatsAppMessage } from "@/lib/whatsapp";
import { createZohoLead, isZohoConfigured } from "@/lib/zoho";

type AssessmentPayload = {
  companySize: string;
  industry: string;
  leads: string;
  system: string;
  challenge: string;
  email?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function parsePayload(body: unknown): AssessmentPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const data = body as Record<string, unknown>;

  if (
    !isNonEmptyString(data.companySize) ||
    !isNonEmptyString(data.industry) ||
    !isNonEmptyString(data.leads) ||
    !isNonEmptyString(data.system) ||
    !isNonEmptyString(data.challenge)
  ) {
    return null;
  }

  const email =
    typeof data.email === "string" && data.email.trim().length > 0
      ? data.email.trim()
      : undefined;

  return {
    companySize: data.companySize.trim(),
    industry: data.industry.trim(),
    leads: data.leads.trim(),
    system: data.system.trim(),
    challenge: data.challenge.trim(),
    email,
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
        required: ["companySize", "industry", "leads", "system", "challenge"],
      },
      { status: 400 },
    );
  }

  const { score } = scoreAssessment({
    leads: payload.leads,
    system: payload.system,
  });
  const tag = getLeadTag(score);

  let saved;

  try {
    saved = await saveAssessment({
      companySize: payload.companySize,
      industry: payload.industry,
      leads: payload.leads,
      system: payload.system,
      challenge: payload.challenge,
      score,
    });
  } catch (error) {
    console.error("Failed to save assessment:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to save assessment",
      },
      { status: 500 },
    );
  }

  trackAnalyticsEvent({
    name: "assessment_submitted",
    properties: {
      assessmentId: saved.id,
      score,
      category: scoreToLeadCategory(score),
      tag,
      industry: payload.industry,
      companySize: payload.companySize,
    },
  });

  const whatsapp = await sendWhatsAppMessage({
    assessmentId: saved.id,
  });

  const email = await sendAssessmentEmails({
    assessmentId: saved.id,
    companySize: payload.companySize,
    industry: payload.industry,
    leads: payload.leads,
    system: payload.system,
    challenge: payload.challenge,
    score,
    tag,
    userEmail: payload.email,
  });

  let leadId: string | null = null;

  if (isZohoConfigured()) {
    try {
      const lead = await createZohoLead({
        companySize: payload.companySize,
        industry: payload.industry,
        leads: payload.leads,
        system: payload.system,
        challenge: payload.challenge,
        tag,
      });
      leadId = lead.id ?? null;
    } catch (error) {
      console.error("Zoho lead creation failed:", error);
    }
  } else {
    console.log("[zoho:mock] Zoho environment variables are not configured. Skipping CRM lead creation.");
  }

  return NextResponse.json({
    success: true,
    id: saved.id,
    leadId,
    score,
    tag,
    timestamp: saved.timestamp,
    whatsapp: {
      sent: whatsapp.sent,
      message: whatsapp.message,
    },
    email,
  });
}
