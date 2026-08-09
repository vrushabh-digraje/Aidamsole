"use client";

import { useCallback, useMemo, useState } from "react";

import {
  CRMPreviewDemo,
  type CRMView,
} from "@/components/sections/CRMPreviewDemo";
import {
  InteractiveSystemDemo,
  systemDemoSteps,
  type SystemStepChangeSource,
} from "@/components/sections/InteractiveSystemDemo";

const stepToCrmView: Partial<
  Record<string, { view: CRMView; highlight: boolean; label: string }>
> = {
  lead: { view: "leads", highlight: false, label: "Lead Capture" },
  crm: { view: "leads", highlight: false, label: "CRM Management" },
  deal: { view: "deals", highlight: true, label: "Deal Pipeline" },
  dashboard: { view: "dashboard", highlight: false, label: "Dashboard" },
};

const crmViewToStep: Record<CRMView, string> = {
  leads: "crm",
  deals: "deal",
  dashboard: "dashboard",
};

function scrollToCrmPreview() {
  const target = document.getElementById("crm-preview");
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ConnectedSystemExperience() {
  const [systemStepId, setSystemStepId] = useState(
    systemDemoSteps[0]?.id ?? "lead",
  );
  const [crmView, setCrmView] = useState<CRMView>("deals");
  const [highlightPipeline, setHighlightPipeline] = useState(false);
  const [syncLabel, setSyncLabel] = useState<string | null>(null);

  const applySystemStep = useCallback(
    (stepId: string, source: SystemStepChangeSource) => {
      setSystemStepId(stepId);

      const mapped = stepToCrmView[stepId];
      if (!mapped) {
        setHighlightPipeline(false);
        setSyncLabel(null);
        return;
      }

      setCrmView(mapped.view);
      setHighlightPipeline(mapped.highlight);
      setSyncLabel(mapped.label);

      if (source === "user") {
        // Let the click paint first, then scroll into the linked CRM UI.
        window.requestAnimationFrame(() => {
          scrollToCrmPreview();
        });
      }
    },
    [],
  );

  const handleCrmViewChange = useCallback((view: CRMView) => {
    setCrmView(view);
    setHighlightPipeline(view === "deals");
    const stepId = crmViewToStep[view];
    setSystemStepId(stepId);
    setSyncLabel(stepToCrmView[stepId]?.label ?? null);
  }, []);

  const crmDescription = useMemo(() => {
    if (!syncLabel) {
      return "Dashboard, leads, and pipeline — the same system the walkthrough describes.";
    }
    return `Live sync with “${syncLabel}” from the system walkthrough.`;
  }, [syncLabel]);

  return (
    <>
      <InteractiveSystemDemo
        tone="default"
        spacing="prominent"
        title="How Your Business System Works"
        description="Click CRM, Deal, or Dashboard — the product preview below switches with you."
        activeStepId={systemStepId}
        onStepChange={applySystemStep}
      />

      <CRMPreviewDemo
        tone="muted"
        spacing="prominent"
        title="Your CRM. Working Like a Product."
        description={crmDescription}
        activeView={crmView}
        onViewChange={handleCrmViewChange}
        highlightPipeline={highlightPipeline}
        syncLabel={syncLabel}
      />
    </>
  );
}
