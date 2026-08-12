"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const stepsData = [
  {
    number: "01",
    label: "Mapping",
    title: "Process Mapping",
    description: "Deconstructing manual flows (Excel, emails) into visible, repeatable stages.",
    actionText: "Simulate audit mapping below:"
  },
  {
    number: "02",
    label: "Design",
    title: "System Design",
    description: "Defining strict ownership, validation gates, and SLA thresholds before setup.",
    actionText: "Assign owners to stages:"
  },
  {
    number: "03",
    label: "Config",
    title: "Zoho Build",
    description: "Encoding the mapped process rules into custom layouts and automation triggers.",
    actionText: "Verify custom rule trigger:"
  },
  {
    number: "04",
    label: "Training",
    title: "Team Onboarding",
    description: "Training managers and departments using sandbox simulations and standard reviews.",
    actionText: "Tick off team onboarding checklist:"
  },
  {
    number: "05",
    label: "Stabilization",
    title: "Stabilization",
    description: "Enforcing Zoho adoption while phasing out manual shadow trackers.",
    actionText: "Slide weeks to track adoption progress:"
  }
];

export function InteractiveApproachAside() {
  const [activeTab, setActiveTab] = useState(0);

  // States for Interactive simulations
  // Step 1: Mapping
  const [nodes, setNodes] = useState([
    { id: 1, name: "Lead Capture", status: "unmapped", type: "Excel" },
    { id: 2, name: "Quote Proposal", status: "unmapped", type: "Email" },
    { id: 3, name: "Project Kickoff", status: "unmapped", type: "WhatsApp" }
  ]);
  
  // Step 2: Design
  const [owners, setOwners] = useState<Record<string, string>>({
    "Sales Intake": "Unassigned",
    "Ops Handoff": "Unassigned",
    "Finance Signoff": "Unassigned"
  });

  // Step 3: Config
  const [validationRule, setValidationRule] = useState(false);
  const [ruleMessage, setRuleMessage] = useState("Rule Idle: Awaiting field submission.");

  // Step 4: Training
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Sales CRM sandbox walk", done: false },
    { id: 2, text: "Operations project creation review", done: false },
    { id: 3, text: "Finance invoicing validation test", done: false }
  ]);

  // Step 5: Stabilization
  const [weeks, setWeeks] = useState(4);

  const toggleNode = (id: number) => {
    setNodes(prev => prev.map(n => {
      if (n.id === id) {
        return {
          ...n,
          status: n.status === "unmapped" ? "mapped" : "unmapped",
          type: n.status === "unmapped" ? "Zoho Flow" : n.id === 1 ? "Excel" : n.id === 2 ? "Email" : "WhatsApp"
        };
      }
      return n;
    }));
  };

  const assignOwner = (stage: string, role: string) => {
    setOwners(prev => ({
      ...prev,
      [stage]: role
    }));
  };

  const triggerRuleSimulation = () => {
    setValidationRule(true);
    setRuleMessage("Validation Passed: Triggering automated project template deployment.");
    setTimeout(() => {
      setValidationRule(false);
      setRuleMessage("Rule Idle: Awaiting field submission.");
    }, 4000);
  };

  const toggleChecklist = (id: number) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <div className="w-full border border-gray-200 bg-white shadow-xl rounded-none relative flex flex-col min-h-[440px] overflow-hidden">
      
      {/* Top brand-color accent bar */}
      <div className="h-1.5 w-full bg-primary shrink-0" />

      {/* Tabs navigation */}
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        {stepsData.map((step, idx) => (
          <button
            key={step.number}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "flex-1 py-3 text-center border-r border-gray-100 last:border-r-0 transition-all duration-300",
              "text-[10px] font-extrabold uppercase tracking-wider",
              activeTab === idx 
                ? "bg-white text-primary border-t-2 border-t-primary -mt-[2px] pb-[14px]" 
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            )}
          >
            {step.number} {step.label}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        
        {/* Step Intro */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-0.5 rounded-none border border-blue-100">
              STAGE {stepsData[activeTab].number}
            </span>
            <h4 className="text-sm font-extrabold text-gray-900">
              {stepsData[activeTab].title}
            </h4>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-gray-500">
            {stepsData[activeTab].description}
          </p>
        </div>

        {/* Dynamic Simulation Board */}
        <div className="my-6 p-5 bg-gray-50 border border-gray-150 flex-grow flex flex-col justify-center rounded-none min-h-[180px]">
          <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest mb-3">
            {stepsData[activeTab].actionText}
          </p>

          {/* SIMULATION 1: Mapping Node Board */}
          {activeTab === 0 && (
            <div className="flex flex-col gap-2">
              {nodes.map(node => (
                <button
                  key={node.id}
                  onClick={() => toggleNode(node.id)}
                  className={cn(
                    "w-full text-left p-2.5 border text-xs font-bold transition-all duration-300 flex items-center justify-between rounded-none",
                    node.status === "mapped" 
                      ? "border-emerald-300 bg-emerald-50/40 text-emerald-800" 
                      : "border-amber-200 bg-amber-50/20 text-amber-800 hover:bg-amber-50/40"
                  )}
                >
                  <span>{node.name}</span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 bg-white border shadow-sm">
                    {node.type}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* SIMULATION 2: RACI Matrix Assigner */}
          {activeTab === 1 && (
            <div className="flex flex-col gap-3">
              {Object.keys(owners).map(stage => (
                <div key={stage} className="flex items-center justify-between text-xs">
                  <span className="font-bold text-gray-700">{stage}</span>
                  <div className="flex gap-1">
                    {["Sales", "Ops", "Finance"].map(role => (
                      <button
                        key={role}
                        onClick={() => assignOwner(stage, role)}
                        className={cn(
                          "px-2 py-1 text-[9px] font-bold border transition duration-200 rounded-none",
                          owners[stage] === role 
                            ? "border-primary bg-primary text-white" 
                            : "border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                        )}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SIMULATION 3: Validation Builder */}
          {activeTab === 2 && (
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-full p-3 border border-dashed border-gray-300 bg-white text-left font-mono text-[10px] text-gray-600 mb-3 rounded-none">
                <span className="text-blue-600">IF</span> (deal.stage == &quot;Signed Proposal&quot;) &amp;&amp; (deal.invoice_attached == null) <br />
                <span className="text-red-500">  REJECT</span> with &quot;Invoice receipt required to progress.&quot;
              </div>
              <button
                onClick={triggerRuleSimulation}
                disabled={validationRule}
                className={cn(
                  "px-4 py-2 text-xs font-bold text-white transition-all duration-300 rounded-none shadow-sm",
                  validationRule ? "bg-emerald-600" : "bg-primary hover:bg-primary/90"
                )}
              >
                {validationRule ? "Executing Automation..." : "Run Test Configuration"}
              </button>
              <p className={cn("mt-2 text-[10px] font-semibold", validationRule ? "text-emerald-600" : "text-gray-400")}>
                {ruleMessage}
              </p>
            </div>
          )}

          {/* SIMULATION 4: Checklist Onboarding */}
          {activeTab === 3 && (
            <div className="flex flex-col gap-2">
              {checklist.map(item => (
                <label
                  key={item.id}
                  className="flex items-center gap-3 p-2.5 bg-white border border-gray-150 cursor-pointer hover:bg-gray-100/50 transition duration-200 text-xs font-bold text-gray-700 rounded-none"
                >
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => toggleChecklist(item.id)}
                    className="h-4 w-4 text-primary border-gray-300 rounded-none focus:ring-primary"
                  />
                  <span className={cn(item.done && "line-through text-gray-400")}>
                    {item.text}
                  </span>
                </label>
              ))}
            </div>
          )}

          {/* SIMULATION 5: Adoption Analytics Graph */}
          {activeTab === 4 && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-gray-600">Timeline: Week {weeks}</span>
                <span className="text-primary">Target: Week 12</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={weeks}
                onChange={e => setWeeks(parseInt(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-white p-2 border border-gray-150 text-center rounded-none">
                  <p className="text-[9px] uppercase font-bold text-gray-400">Zoho Adoption</p>
                  <p className="text-base font-extrabold text-emerald-600">
                    {weeks <= 3 ? "18%" : weeks <= 6 ? "54%" : weeks <= 9 ? "82%" : "98%"}
                  </p>
                </div>
                <div className="bg-white p-2 border border-gray-150 text-center rounded-none">
                  <p className="text-[9px] uppercase font-bold text-gray-400">Manual Spreadsheets</p>
                  <p className="text-base font-extrabold text-amber-600">
                    {weeks <= 3 ? "92%" : weeks <= 6 ? "48%" : weeks <= 9 ? "15%" : "2%"}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer note */}
        <div className="text-[10px] text-gray-400 text-center border-t border-gray-100 pt-3 font-semibold">
          Click stage numbers above to preview the implementation lifecycle.
        </div>

      </div>
    </div>
  );
}
