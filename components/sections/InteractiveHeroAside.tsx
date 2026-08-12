"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// System flow step definitions matching the provided workflow image
type StepSlug = "lead" | "crm" | "pipeline" | "project" | "invoice" | "dashboard";

type StepInfo = {
  slug: StepSlug;
  number: string;
  title: string;
  desc: string;
  caption: string;
  colorClass: string;
  glowClass: string;
  iconBg: string;
  iconSvg: React.ReactNode;
  connections: StepSlug[];
};

const steps: Record<StepSlug, StepInfo> = {
  lead: {
    slug: "lead",
    number: "01",
    title: "Lead Capture",
    caption: "Intake every enquiry",
    desc: "Intake every enquiry from web forms, WhatsApp, ads, and referrals directly into one unified system.",
    colorClass: "text-blue-600 border-blue-200/80 bg-blue-50/40 hover:bg-blue-50/60 hover:border-blue-300",
    glowClass: "shadow-[0_0_20px_rgba(37,99,235,0.3)]",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-[1.75]" stroke="currentColor">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    connections: ["crm", "dashboard"]
  },
  crm: {
    slug: "crm",
    number: "02",
    title: "CRM",
    caption: "Assign ownership",
    desc: "Assign ownership automatically, set reminders, and ensure sales reps follow up on time with no lead left behind.",
    colorClass: "text-red-600 border-red-200/80 bg-red-50/40 hover:bg-red-50/60 hover:border-red-300",
    glowClass: "shadow-[0_0_20px_rgba(239,68,68,0.3)]",
    iconBg: "bg-gradient-to-br from-red-500 to-red-700",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-[1.75]" stroke="currentColor">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 4v16" />
      </svg>
    ),
    connections: ["lead", "pipeline", "dashboard"]
  },
  pipeline: {
    slug: "pipeline",
    number: "03",
    title: "Deal Pipeline",
    caption: "Stage and advance",
    desc: "Stage and advance deals with strict exit criteria so sales handoffs to operations stay clean and visible.",
    colorClass: "text-amber-600 border-amber-200/80 bg-amber-50/40 hover:bg-amber-50/60 hover:border-amber-300",
    glowClass: "shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-700",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-[1.75]" stroke="currentColor">
        <path d="M4 6h16M4 12h10M4 18h7" />
        <circle cx="18" cy="12" r="2" />
        <circle cx="15" cy="18" r="2" />
      </svg>
    ),
    connections: ["crm", "project", "dashboard"]
  },
  project: {
    slug: "project",
    number: "04",
    title: "Project Execution",
    caption: "Deliver the work",
    desc: "Deliver the work on time. Automatically kickoff templates, track milestones, and log billable timesheets.",
    colorClass: "text-indigo-600 border-indigo-200/80 bg-indigo-50/40 hover:bg-indigo-50/60 hover:border-indigo-300",
    glowClass: "shadow-[0_0_20px_rgba(79,70,229,0.3)]",
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-[1.75]" stroke="currentColor">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    connections: ["pipeline", "invoice", "dashboard"]
  },
  invoice: {
    slug: "invoice",
    number: "05",
    title: "Invoicing",
    caption: "Bill and collect",
    desc: "Bill and collect payments. Send automated tax invoices, process payments, and reconcile directly to Books.",
    colorClass: "text-emerald-600 border-emerald-200/80 bg-emerald-50/40 hover:bg-emerald-50/60 hover:border-emerald-300",
    glowClass: "shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-700",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-[1.75]" stroke="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z" />
        <path d="M8 10h5M8 14h3" />
      </svg>
    ),
    connections: ["project", "dashboard"]
  },
  dashboard: {
    slug: "dashboard",
    number: "06",
    title: "Dashboard",
    caption: "Review live data",
    desc: "Review live performance data. Real-time KPIs, sales conversion, and financial health in one leadership view.",
    colorClass: "text-sky-600 border-sky-200/80 bg-sky-50/40 hover:bg-sky-50/60 hover:border-sky-300",
    glowClass: "shadow-[0_0_20px_rgba(14,165,233,0.3)]",
    iconBg: "bg-gradient-to-br from-sky-500 to-sky-700",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-[1.75]" stroke="currentColor">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
    connections: ["lead", "crm", "pipeline", "project", "invoice"]
  }
};

export function InteractiveHeroAside() {
  const [activeTab, setActiveTab] = useState<"pipelines" | "roi">("pipelines");
  const [hoveredStep, setHoveredStep] = useState<StepSlug | null>(null);
  
  // ROI Quiz State
  const [step, setStep] = useState(1);
  const [challenge, setChallenge] = useState<string | null>(null);
  const [teamSize, setTeamSize] = useState<number | null>(null);
  const [hoursSaved, setHoursSaved] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const [recStack, setRecStack] = useState<{ name: string; icon: string; theme: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parallax Mouse Effect
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) * 0.03;
      const y = (e.clientY - centerY) * 0.03;
      setParallaxOffset({ x, y });
    };

    const handleMouseLeave = () => {
      setParallaxOffset({ x: 0, y: 0 });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Listen for hover events dispatched from left-side app list in Hero.tsx
  useEffect(() => {
    const handleHeroAppHover = (e: Event) => {
      const customEvent = e as CustomEvent<StepSlug | null>;
      setHoveredStep(customEvent.detail);
    };
    window.addEventListener("hero-app-hover", handleHeroAppHover);
    return () => {
      window.removeEventListener("hero-app-hover", handleHeroAppHover);
    };
  }, []);

  // ROI calculation triggers
  const handleChallengeSelect = (val: string) => {
    setChallenge(val);
    setStep(2);
  };

  const handleTeamSelect = (size: number) => {
    setTeamSize(size);
    setStep(3);
    calculateROI(challenge!, size);
  };

  const calculateROI = (chal: string, size: number) => {
    let hoursPerEmployee = 10;
    let speedup = 30;
    let stack: { name: string; icon: string; theme: string }[] = [];

    if (chal === "sales") {
      hoursPerEmployee = 12;
      speedup = 35;
      stack = [
        { name: "Zoho CRM", icon: "CRM", theme: "bg-red-500/10 text-red-500 border-red-500/20" },
        { name: "Zoho Campaigns", icon: "CPG", theme: "bg-sky-500/10 text-sky-500 border-sky-500/20" }
      ];
    } else if (chal === "finance") {
      hoursPerEmployee = 15;
      speedup = 45;
      stack = [
        { name: "Zoho Books", icon: "BKS", theme: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
        { name: "Zoho Projects", icon: "PRJ", theme: "bg-sky-500/10 text-sky-500 border-sky-500/20" }
      ];
    } else if (chal === "operations") {
      hoursPerEmployee = 18;
      speedup = 50;
      stack = [
        { name: "Zoho Inventory", icon: "INV", theme: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
        { name: "Zoho Books", icon: "BKS", theme: "bg-blue-500/10 text-blue-500 border-blue-500/20" }
      ];
    } else {
      hoursPerEmployee = 20;
      speedup = 55;
      stack = [
        { name: "Zoho Creator", icon: "CRT", theme: "bg-teal-500/10 text-teal-500 border-teal-500/20" },
        { name: "Zoho Analytics", icon: "ANL", theme: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" }
      ];
    }

    const totalHours = hoursPerEmployee * size;
    setRecStack(stack);
    setEfficiency(speedup);

    // Animate numbers
    let current = 0;
    const duration = 1000;
    const interval = 20;
    const stepVal = totalHours / (duration / interval);
    const timer = setInterval(() => {
      current += stepVal;
      if (current >= totalHours) {
        clearInterval(timer);
        setHoursSaved(Math.round(totalHours));
      } else {
        setHoursSaved(Math.round(current));
      }
    }, interval);
  };

  const handleResetQuiz = () => {
    setStep(1);
    setChallenge(null);
    setTeamSize(null);
    setHoursSaved(0);
    setEfficiency(0);
    setRecStack([]);
    setIsSubmitting(false);
  };

  const handleGetBlueprint = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Blueprint requested! Our Zoho architects will design your custom stack and connect within 24 hours.");
      handleResetQuiz();
    }, 1500);
  };

  // Helper to determine arrow line active highlights
  const isArrowActive = (from: StepSlug, to: StepSlug) => {
    if (!hoveredStep) return false;
    if (hoveredStep === from && steps[from].connections.includes(to)) return true;
    return false;
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:shadow-2xl md:p-5 animate-fade-in-delayed"
      style={{
        transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
      }}
    >
      {/* Dynamic Background Mesh Blob */}
      <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full bg-blue-100/40 blur-2xl" />

      {/* Tabs */}
      <div className="mb-4 flex gap-2 rounded-xl bg-gray-100 p-0.5">
        <button
          onClick={() => setActiveTab("pipelines")}
          className={cn(
            "flex-1 rounded-lg py-2 text-xs font-semibold tracking-wide transition-all duration-300 uppercase",
            activeTab === "pipelines"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          )}
        >
          Ecosystem Hub
        </button>
        <button
          onClick={() => setActiveTab("roi")}
          className={cn(
            "flex-1 rounded-lg py-2 text-xs font-semibold tracking-wide transition-all duration-300 uppercase",
            activeTab === "roi"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          )}
        >
          Blueprint Quiz
        </button>
      </div>

      {/* Content Container */}
      <div className="relative min-h-[350px] flex-1 flex flex-col justify-between">
        
        {/* TAB 1: SYSTEM FLOW INTERACTIVE GRID */}
        {activeTab === "pipelines" && (
          <div className="flex flex-col items-center">
            
            {/* Grid Flow Layout representing the diagram */}
            <div className="relative w-full grid grid-cols-3 gap-y-7 gap-x-2 py-2">
              
              {/* Absolute connectors layer */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="h-full w-full" viewBox="0 0 360 210" fill="none">
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#cbd5e1" />
                    </marker>
                    <marker id="arrow-active" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#3b82f6" />
                    </marker>
                    
                    {/* Unique color markers for each path */}
                    <marker id="arrow-crm" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
                    </marker>
                    <marker id="arrow-pipeline" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#f59e0b" />
                    </marker>
                    <marker id="arrow-project" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#6366f1" />
                    </marker>
                    <marker id="arrow-invoice" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#10b981" />
                    </marker>
                    <marker id="arrow-dashboard" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#0ea5e9" />
                    </marker>
                  </defs>

                  {/* Top Row: 1 -> 2 -> 3 */}
                  {/* Arrow 1 -> 2 (Lead -> CRM) */}
                  <path 
                    d="M 95 38 L 140 38" 
                    stroke={isArrowActive("lead", "crm") ? "#ef4444" : "#3b82f6"} 
                    strokeOpacity={isArrowActive("lead", "crm") ? "1" : "0.18"}
                    strokeWidth={isArrowActive("lead", "crm") ? "2.5" : "1.5"}
                    strokeDasharray={isArrowActive("lead", "crm") ? "4,4" : ""}
                    style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease, stroke-opacity 0.4s ease" }}
                    className={cn(isArrowActive("lead", "crm") && "animate-dash-flow")}
                    markerEnd={`url(#${isArrowActive("lead", "crm") ? "arrow-crm" : "arrow"})`} 
                  />
                  {/* Arrow 2 -> 3 (CRM -> Deal Pipeline) */}
                  <path 
                    d="M 215 38 L 260 38" 
                    stroke={isArrowActive("crm", "pipeline") ? "#f59e0b" : "#ef4444"} 
                    strokeOpacity={isArrowActive("crm", "pipeline") ? "1" : "0.18"}
                    strokeWidth={isArrowActive("crm", "pipeline") ? "2.5" : "1.5"}
                    strokeDasharray={isArrowActive("crm", "pipeline") ? "4,4" : ""}
                    style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease, stroke-opacity 0.4s ease" }}
                    className={cn(isArrowActive("crm", "pipeline") && "animate-dash-flow")}
                    markerEnd={`url(#${isArrowActive("crm", "pipeline") ? "arrow-pipeline" : "arrow"})`} 
                  />

                  {/* Mid Row Down: 2 -> 5 (CRM -> Invoicing) */}
                  <path 
                    d="M 180 80 L 180 115" 
                    stroke={isArrowActive("crm", "invoice") ? "#10b981" : "#ef4444"} 
                    strokeOpacity={isArrowActive("crm", "invoice") ? "1" : "0.18"}
                    strokeWidth={isArrowActive("crm", "invoice") ? "2.5" : "1.5"}
                    strokeDasharray={isArrowActive("crm", "invoice") ? "4,4" : ""}
                    style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease, stroke-opacity 0.4s ease" }}
                    className={cn(isArrowActive("crm", "invoice") && "animate-dash-flow")}
                    markerEnd={`url(#${isArrowActive("crm", "invoice") ? "arrow-invoice" : "arrow"})`} 
                  />

                  {/* Bottom Row: 4 <- 5 -> 6 */}
                  {/* Arrow 5 -> 4 (Invoicing -> Project Execution, Flowing left) */}
                  <path 
                    d="M 140 152 L 95 152" 
                    stroke={isArrowActive("invoice", "project") ? "#6366f1" : "#10b981"} 
                    strokeOpacity={isArrowActive("invoice", "project") ? "1" : "0.18"}
                    strokeWidth={isArrowActive("invoice", "project") ? "2.5" : "1.5"}
                    strokeDasharray={isArrowActive("invoice", "project") ? "4,4" : ""}
                    style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease, stroke-opacity 0.4s ease" }}
                    className={cn(isArrowActive("invoice", "project") && "animate-dash-flow-reverse")}
                    markerEnd={`url(#${isArrowActive("invoice", "project") ? "arrow-project" : "arrow"})`} 
                  />
                  {/* Arrow 5 -> 6 (Invoicing -> Dashboard, Flowing right) */}
                  <path 
                    d="M 220 152 L 265 152" 
                    stroke={isArrowActive("invoice", "dashboard") ? "#0ea5e9" : "#10b981"} 
                    strokeOpacity={isArrowActive("invoice", "dashboard") ? "1" : "0.18"}
                    strokeWidth={isArrowActive("invoice", "dashboard") ? "2.5" : "1.5"}
                    strokeDasharray={isArrowActive("invoice", "dashboard") ? "4,4" : ""}
                    style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease, stroke-opacity 0.4s ease" }}
                    className={cn(isArrowActive("invoice", "dashboard") && "animate-dash-flow")}
                    markerEnd={`url(#${isArrowActive("invoice", "dashboard") ? "arrow-dashboard" : "arrow"})`} 
                  />
                </svg>
              </div>

              {/* Render step nodes based on diagram grid coords */}
              {Object.values(steps).map((stepItem) => {
                const isHovered = hoveredStep === stepItem.slug;
                const isDimmed = hoveredStep !== null && !isHovered;

                return (
                  <div
                    key={stepItem.slug}
                    onMouseEnter={() => setHoveredStep(stepItem.slug)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={cn(
                      "z-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300",
                      isHovered ? "scale-105" : "",
                      isDimmed ? "opacity-30 scale-95" : "opacity-100"
                    )}
                  >
                    {/* Number label at the top */}
                    <span className={cn(
                      "text-[9px] font-bold tracking-widest transition-colors duration-300",
                      isHovered ? "text-blue-700" : "text-gray-400"
                    )}>
                      {stepItem.number}
                    </span>

                    {/* Interactive Icon Box with Custom Related Color Combinations */}
                    <div className={cn(
                      "mt-1.5 flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 ease-out shadow-sm bg-white",
                      isHovered 
                        ? cn("border-transparent text-white scale-110", stepItem.iconBg, stepItem.glowClass)
                        : cn(stepItem.colorClass)
                    )}>
                      {stepItem.iconSvg}
                    </div>

                    {/* Step Title below */}
                    <h5 className={cn(
                      "mt-1.5 text-[11px] font-bold leading-tight transition-colors duration-300",
                      isHovered ? "text-blue-700 font-extrabold" : "text-gray-900"
                    )}>
                      {stepItem.title}
                    </h5>

                    {/* Step Caption below */}
                    <span className="mt-0.5 text-[9px] leading-tight text-gray-500">
                      {stepItem.caption}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Tooltip Description Overlay Card with smooth transition height */}
            <div className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50/70 p-3 text-center transition-all duration-500 ease-out min-h-[76px] flex flex-col justify-center shadow-inner">
              {hoveredStep ? (
                <div className="animate-fadeIn">
                  <h4 className="text-xs font-bold text-blue-700 transition-colors duration-300">
                    {steps[hoveredStep].title}
                  </h4>
                  <p className="mt-1 text-[11px] text-gray-600 leading-relaxed">
                    {steps[hoveredStep].desc}
                  </p>
                </div>
              ) : (
                <div className="animate-pulse">
                  <h4 className="text-xs font-bold text-gray-500">Interactive System Flow</h4>
                  <p className="mt-0.5 text-[11px] text-gray-400">
                    Hover over any system step in the pipeline grid to trace connected data channels and automations.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: ROI FINDER QUIZ */}
        {activeTab === "roi" && (
          <div className="flex flex-col gap-3">
            
            {/* Step 1: Bottleneck */}
            {step === 1 && (
              <div className="flex flex-col gap-2.5 animate-fadeIn">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                  Step 1 of 2: Main Bottleneck
                </span>
                <h4 className="text-sm font-bold text-gray-900">
                  Select your team's primary challenge:
                </h4>
                <div className="grid gap-1.5">
                  <button
                    onClick={() => handleChallengeSelect("sales")}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 p-2 text-left transition hover:bg-gray-50 hover:border-gray-300"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-100 text-red-600 font-bold text-[10px]">
                      SLS
                    </span>
                    <div>
                      <span className="block text-xs font-semibold text-gray-800">Manual lead entry & leakage</span>
                      <span className="block text-[9px] text-gray-400">Inefficient routing & late followups</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleChallengeSelect("finance")}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 p-2 text-left transition hover:bg-gray-50 hover:border-gray-300"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold text-[10px]">
                      FIN
                    </span>
                    <div>
                      <span className="block text-xs font-semibold text-gray-800">Messy ledger & invoice delays</span>
                      <span className="block text-[9px] text-gray-400">Invoicing, receipts & collection lag</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleChallengeSelect("operations")}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 p-2 text-left transition hover:bg-gray-50 hover:border-gray-300"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-600 font-bold text-[10px]">
                      OPS
                    </span>
                    <div>
                      <span className="block text-xs font-semibold text-gray-800">Inventory & order discrepancies</span>
                      <span className="block text-[9px] text-gray-400">Disjointed stock & sales pipelines</span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleChallengeSelect("creator")}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 p-2 text-left transition hover:bg-gray-50 hover:border-gray-300"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-100 text-teal-600 font-bold text-[10px]">
                      SYS
                    </span>
                    <div>
                      <span className="block text-xs font-semibold text-gray-800">Fragmented databases & silos</span>
                      <span className="block text-[9px] text-gray-400">Requires customized database integrations</span>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Team Size */}
            {step === 2 && (
              <div className="flex flex-col gap-3 animate-fadeIn">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                  Step 2 of 2: Company Scale
                </span>
                <h4 className="text-sm font-bold text-gray-900">
                  Select your current company size:
                </h4>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => handleTeamSelect(10)}
                    className="rounded-xl border border-gray-200 py-3 text-center text-xs font-bold text-gray-700 transition hover:bg-gray-50 hover:border-gray-300"
                  >
                    1-15 Employees
                  </button>
                  <button
                    onClick={() => handleTeamSelect(50)}
                    className="rounded-xl border border-gray-200 py-3 text-center text-xs font-bold text-gray-700 transition hover:bg-gray-50 hover:border-gray-300"
                  >
                    16-99 Employees
                  </button>
                  <button
                    onClick={() => handleTeamSelect(250)}
                    className="rounded-xl border border-gray-200 py-3 text-center text-xs font-bold text-gray-700 transition hover:bg-gray-50 hover:border-gray-300"
                  >
                    100-499 Employees
                  </button>
                  <button
                    onClick={() => handleTeamSelect(1000)}
                    className="rounded-xl border border-gray-200 py-3 text-center text-xs font-bold text-gray-700 transition hover:bg-gray-50 hover:border-gray-300"
                  >
                    500+ Enterprises
                  </button>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="mt-1 text-[10px] font-semibold text-gray-500 hover:text-gray-900 self-start animate-fadeIn"
                >
                  ← Back to challenges
                </button>
              </div>
            )}

            {/* Step 3: Result Display */}
            {step === 3 && (
              <div className="flex flex-col gap-3 animate-fadeIn">
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-3 text-center">
                    <span className="block text-xl font-black text-blue-700">
                      {hoursSaved}
                    </span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">
                      Monthly Hours Saved
                    </span>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-3 text-center">
                    <span className="block text-xl font-black text-emerald-600">
                      {efficiency}%
                    </span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">
                      Process Boost
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-dashed border-gray-200 p-3">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Custom Recommendations
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {recStack.map((app) => (
                      <span
                        key={app.name}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-lg border px-2 py-0.5 text-[10px] font-bold",
                          app.theme
                        )}
                      >
                        <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded bg-current/10 text-[8px] font-extrabold">
                          {app.icon}
                        </span>
                        {app.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-1">
                  <button
                    onClick={handleGetBlueprint}
                    disabled={isSubmitting}
                    className="flex-1 rounded-xl bg-blue-700 py-2.5 text-center text-xs font-bold text-white shadow-md transition hover:bg-blue-800 disabled:opacity-50"
                  >
                    {isSubmitting ? "Generating blueprint..." : "Get Free Zoho Blueprint"}
                  </button>
                  <button
                    onClick={handleResetQuiz}
                    className="text-[10px] font-semibold text-gray-500 hover:text-gray-900"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes dash-flow {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes dash-flow-reverse {
          to {
            stroke-dashoffset: 20;
          }
        }
        .animate-dash-flow {
          animation: dash-flow 0.8s linear infinite;
        }
        .animate-dash-flow-reverse {
          animation: dash-flow-reverse 0.8s linear infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
