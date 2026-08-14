"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const isFormValid = useMemo(() => {
    return form.name.trim() !== "" && form.email.includes("@") && form.message.trim() !== "";
  }, [form]);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus("submitting");
    try {
      // Mock submit delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Floating Chat Popup Card */}
      <div
        className={cn(
          "fixed right-6 z-[9999] w-[340px] bg-white border border-gray-150 shadow-2xl transition-all duration-300 origin-bottom-right",
          isOpen
            ? "bottom-[16rem] scale-100 opacity-100 pointer-events-auto"
            : "bottom-[15rem] scale-95 opacity-0 pointer-events-none"
        )}
        style={{ borderRadius: "1.25rem" }}
      >
        {/* Header - Deep Blue */}
        <div
          className="flex items-center justify-between bg-[#0B2545] px-5 py-4 text-white"
          style={{ borderTopLeftRadius: "1.25rem", borderTopRightRadius: "1.25rem" }}
        >
          <div>
            <h4 className="text-sm font-extrabold tracking-tight">Live Chat</h4>
            <p className="text-[10px] text-gray-300 font-medium">
              We typically reply within a few minutes.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition duration-200"
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4.5 w-4.5" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Welcome Message Bubble */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-xs text-gray-700 leading-relaxed">
            Hi — share a few details and our team will get back to you shortly.
          </div>

          {status === "success" ? (
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/30 p-5 text-center">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-sm font-bold mb-3">
                ✓
              </span>
              <p className="text-xs font-bold text-emerald-900">Message Sent Successfully</p>
              <p className="text-[10px] text-emerald-800 mt-1">
                Thank you! We have received your query and will reply shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-[10px] font-bold uppercase tracking-wider text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-xs text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-xs text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20"
                />
              </div>
              <div>
                <textarea
                  required
                  rows={3}
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-xs text-gray-900 placeholder:text-gray-400 outline-none resize-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/20 min-h-[4.5rem]"
                />
              </div>

              {status === "error" && (
                <p className="text-[10px] font-bold text-red-600">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || !isFormValid}
                className={cn(
                  "flex w-full items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#071930] text-white py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md",
                  status === "submitting" || !isFormValid ? "opacity-50 cursor-not-allowed" : "active:scale-98"
                )}
                style={{ borderRadius: "0.75rem" }}
              >
                <span>{status === "submitting" ? "Sending..." : "Send message"}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-[10.5rem] right-6 z-[9999] flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-white text-white shadow-2xl transition-all duration-300 hover:scale-112 hover:shadow-[0_0_20px_rgba(11,37,69,0.45)] active:scale-95 group",
          isOpen ? "bg-[#0B2545] rotate-90" : "bg-[#0B2545] hover:bg-[#071930]"
        )}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-9 w-9" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            <span className="absolute inset-0 -z-10 rounded-full bg-[#0B2545]/30 animate-[ping_3s_ease-in-out_infinite]" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-9 w-9 transition-all duration-300 group-hover:scale-105 group-hover:rotate-[8deg]" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </>
  );
}
