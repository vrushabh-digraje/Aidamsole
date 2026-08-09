import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { listAssessments } from "@/lib/db/assessments";
import { getLeadTag, type AssessmentScore, type LeadTag } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard | AiDamsole",
  description: "Internal assessment lead dashboard.",
};

export const dynamic = "force-dynamic";

function tagClassName(tag: LeadTag) {
  if (tag === "Hot Lead") return "text-danger";
  if (tag === "Warm Lead") return "text-secondary";
  return "text-gray-600";
}

function formatTimestamp(timestamp: string) {
  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return timestamp;
  }

  return date.toLocaleString("en-IN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function countByScore(scores: AssessmentScore[]) {
  return {
    hot: scores.filter((score) => score === "high").length,
    warm: scores.filter((score) => score === "medium").length,
    cold: scores.filter((score) => score === "low").length,
  };
}

export default async function DashboardPage() {
  const assessments = await listAssessments();
  const stats = {
    total: assessments.length,
    ...countByScore(assessments.map((item) => item.score)),
  };
  const recent = assessments.slice(0, 10);

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <h1>Dashboard</h1>
          <p className="mt-4">Internal view of assessment submissions.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-600">Total Leads</p>
            <p className="mt-4 text-3xl font-semibold text-gray-900">{stats.total}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-600">Hot Leads</p>
            <p className="mt-4 text-3xl font-semibold text-danger">{stats.hot}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-600">Warm Leads</p>
            <p className="mt-4 text-3xl font-semibold text-secondary">{stats.warm}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-600">Cold Leads</p>
            <p className="mt-4 text-3xl font-semibold text-gray-900">{stats.cold}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2>Recent Submissions</h2>

          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            {recent.length === 0 ? (
              <p className="px-4 py-8 text-sm text-gray-600">No submissions yet.</p>
            ) : (
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="border-b border-gray-200 bg-white">
                  <tr className="text-gray-900">
                    <th className="px-4 py-3 font-medium">Submitted</th>
                    <th className="px-4 py-3 font-medium">Industry</th>
                    <th className="px-4 py-3 font-medium">Company Size</th>
                    <th className="px-4 py-3 font-medium">Leads</th>
                    <th className="px-4 py-3 font-medium">System</th>
                    <th className="px-4 py-3 font-medium">Score</th>
                    <th className="px-4 py-3 font-medium">Tag</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((lead) => {
                    const tag = getLeadTag(lead.score);

                    return (
                      <tr key={lead.id} className="border-b border-gray-200 last:border-b-0">
                        <td className="px-4 py-3 text-gray-600">
                          {formatTimestamp(lead.timestamp)}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{lead.industry}</td>
                        <td className="px-4 py-3 text-gray-600">{lead.companySize}</td>
                        <td className="px-4 py-3 text-gray-600">{lead.leads}</td>
                        <td className="px-4 py-3 text-gray-600">{lead.system}</td>
                        <td className="px-4 py-3 text-gray-900">{lead.score}</td>
                        <td className={`px-4 py-3 font-medium ${tagClassName(tag)}`}>{tag}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
