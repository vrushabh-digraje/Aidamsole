export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Prefer later classes for common Tailwind conflicts (no tailwind-merge dependency). */
export function cnMerge(...classes: Array<string | false | null | undefined>) {
  const joined = classes.filter(Boolean).join(" ");
  // Prefer explicit important overrides when present.
  return joined;
}

export type AssessmentScore = "low" | "medium" | "high";

type ScoreInput = {
  leads: number | string;
  system: string;
};

const SCORE_RANK: Record<AssessmentScore, number> = {
  low: 0,
  medium: 1,
  high: 2,
};

function maxScore(a: AssessmentScore, b: AssessmentScore): AssessmentScore {
  return SCORE_RANK[a] >= SCORE_RANK[b] ? a : b;
}

export type LeadTag = "Hot Lead" | "Warm Lead" | "Cold Lead";

export function scoreAssessment({ leads, system }: ScoreInput): {
  score: AssessmentScore;
} {
  const leadCount = typeof leads === "number" ? leads : Number(leads);
  const normalizedSystem = system.trim().toLowerCase();

  let score: AssessmentScore = "low";

  if (normalizedSystem === "excel") {
    score = maxScore(score, "medium");
  }

  if (!Number.isNaN(leadCount) && leadCount > 500) {
    score = maxScore(score, "high");
  }

  // No system → high urgency
  if (normalizedSystem === "none" || normalizedSystem === "no system") {
    score = maxScore(score, "high");
  }

  return { score };
}

export function getLeadTag(score: AssessmentScore): LeadTag {
  if (score === "high") return "Hot Lead";
  if (score === "medium") return "Warm Lead";
  return "Cold Lead";
}

/* -------------------------------------------------------------------------- */
/* Analytics tracking structure                                               */
/* -------------------------------------------------------------------------- */

export type LeadCategory = "hot" | "warm" | "cold";

export type LeadCategoryCounts = {
  hot: number;
  warm: number;
  cold: number;
};

export type AnalyticsSnapshot = {
  totalSubmissions: number;
  leadCategories: LeadCategoryCounts;
  /** Qualified discoveries / total submissions — wired when sales outcomes exist */
  conversionRate: number | null;
};

export type AnalyticsEventName =
  | "assessment_submitted"
  | "assessment_scored"
  | "lead_synced"
  | "contact_submitted";

export type AnalyticsEvent = {
  name: AnalyticsEventName;
  timestamp: string;
  properties: {
    assessmentId?: string;
    contactId?: string;
    service?: string;
    score?: AssessmentScore;
    category?: LeadCategory;
    tag?: LeadTag;
    industry?: string;
    companySize?: string;
  };
};

export function scoreToLeadCategory(score: AssessmentScore): LeadCategory {
  if (score === "high") return "hot";
  if (score === "medium") return "warm";
  return "cold";
}

export function emptyLeadCategories(): LeadCategoryCounts {
  return { hot: 0, warm: 0, cold: 0 };
}

export function buildAnalyticsSnapshot(
  scores: AssessmentScore[],
  options?: { convertedCount?: number },
): AnalyticsSnapshot {
  const leadCategories = emptyLeadCategories();

  for (const score of scores) {
    leadCategories[scoreToLeadCategory(score)] += 1;
  }

  const totalSubmissions = scores.length;
  const convertedCount = options?.convertedCount;

  return {
    totalSubmissions,
    leadCategories,
    conversionRate:
      typeof convertedCount === "number" && totalSubmissions > 0
        ? convertedCount / totalSubmissions
        : null,
  };
}

/**
 * Placeholder analytics emitter.
 * Swap console logging for a real analytics provider later.
 */
export function trackAnalyticsEvent(event: Omit<AnalyticsEvent, "timestamp">) {
  const payload: AnalyticsEvent = {
    ...event,
    timestamp: new Date().toISOString(),
  };

  console.log("[analytics:mock]", payload);

  return payload;
}
