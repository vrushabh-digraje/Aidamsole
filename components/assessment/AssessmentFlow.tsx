"use client";

import { useState, type FormEvent } from "react";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

type AssessmentData = {
  companySize: string;
  industry: string;
  monthlyLeads: string;
  currentSystem: string;
  biggestChallenge: string;
};

const initialData: AssessmentData = {
  companySize: "",
  industry: "",
  monthlyLeads: "",
  currentSystem: "",
  biggestChallenge: "",
};

const fieldClassName =
  "mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm outline-none transition-colors focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const labelClassName = "block text-sm font-medium text-gray-900";

export function AssessmentFlow() {
  const [data, setData] = useState<AssessmentData>(initialData);

  function updateField<K extends keyof AssessmentData>(key: K, value: AssessmentData[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("/api/assessment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        companySize: data.companySize,
        industry: data.industry,
        leads: data.monthlyLeads,
        system: data.currentSystem,
        challenge: data.biggestChallenge,
      }),
    });

    const result = await response.json();
    console.log(result);
  }

  return (
    <Section className="pt-0 md:pt-0" ariaLabelledby="assessment-form-title">
      <div className="mx-auto max-w-2xl">
        <h2 id="assessment-form-title" className="sr-only">
          System assessment form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10" noValidate={false}>
          <div className="border-t border-gray-200 pt-8">
            <label htmlFor="companySize" className={labelClassName}>
              1. Company Size
            </label>
            <select
              id="companySize"
              name="companySize"
              required
              value={data.companySize}
              onChange={(event) => updateField("companySize", event.target.value)}
              className={fieldClassName}
            >
              <option value="">Select company size</option>
              <option value="under-50">Under 50</option>
              <option value="50-500">50–500</option>
              <option value="over-500">Over 500</option>
            </select>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <label htmlFor="industry" className={labelClassName}>
              2. Industry
            </label>
            <select
              id="industry"
              name="industry"
              required
              value={data.industry}
              onChange={(event) => updateField("industry", event.target.value)}
              className={fieldClassName}
            >
              <option value="">Select industry</option>
              <option value="retail-distribution">Retail & Distribution</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="real-estate">Real Estate</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="service">Service Businesses</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <label htmlFor="monthlyLeads" className={labelClassName}>
              3. Monthly Leads
            </label>
            <input
              id="monthlyLeads"
              name="monthlyLeads"
              type="number"
              min="0"
              required
              value={data.monthlyLeads}
              onChange={(event) => updateField("monthlyLeads", event.target.value)}
              className={fieldClassName}
              placeholder="e.g. 120"
            />
          </div>

          <div className="border-t border-gray-200 pt-8">
            <label htmlFor="currentSystem" className={labelClassName}>
              4. Current System
            </label>
            <select
              id="currentSystem"
              name="currentSystem"
              required
              value={data.currentSystem}
              onChange={(event) => updateField("currentSystem", event.target.value)}
              className={fieldClassName}
            >
              <option value="">Select current system</option>
              <option value="excel">Excel</option>
              <option value="crm">CRM</option>
              <option value="none">None</option>
            </select>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <label htmlFor="biggestChallenge" className={labelClassName}>
              5. Biggest Challenge
            </label>
            <textarea
              id="biggestChallenge"
              name="biggestChallenge"
              required
              rows={4}
              value={data.biggestChallenge}
              onChange={(event) => updateField("biggestChallenge", event.target.value)}
              className={fieldClassName}
              placeholder="Describe the main operational or CRM challenge"
            />
          </div>

          <div className="border-t border-gray-200 pt-8">
            <Button type="submit">Get a Consultation</Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
