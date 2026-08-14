"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ZohoPartnerBadge } from "@/components/ui/ZohoPartnerBadge";
import { cn } from "@/lib/utils";

const SERVICES = [
  "System Audit / Free Consultation",
  "Sales System (CRM)",
  "Marketing Automation",
  "Delivery & Project System",
  "Finance & Operations",
  "Custom Zoho Implementation",
  "Other",
] as const;

type Captcha = { a: number; b: number };

function newCaptcha(): Captcha {
  return {
    a: Math.floor(Math.random() * 9) + 1,
    b: Math.floor(Math.random() * 9) + 1,
  };
}

const benefits = [
  {
    id: "consult",
    title: "30-min free consultation",
    iconBg: "bg-white/10 border border-white/10 text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "no-sell",
    title: "No obligation, no hard sell",
    iconBg: "bg-white/10 border border-white/10 text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8.5 12.5 11 15l4.5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "response",
    title: "Response within 24 hours",
    iconBg: "bg-white/10 border border-white/10 text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "experts",
    title: "Certified Zoho experts only",
    iconBg: "bg-white/10 border border-white/10 text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  captchaAnswer: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  captchaAnswer: "",
};

type ContactExpertFormProps = {
  className?: string;
  id?: string;
  simpleLayout?: boolean;
};

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-gray-500">
      {children} <span className="text-red-500">*</span>
    </label>
  );
}

export function ContactExpertForm({
  className,
  id = "contact-form",
  simpleLayout = false,
}: ContactExpertFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  // Start with a deterministic initial captcha state to prevent SSR hydration mismatches
  const [captcha, setCaptcha] = useState<Captcha>({ a: 3, b: 5 });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);
  const [borderRadius, setBorderRadius] = useState<"none" | "md" | "lg">("none");

  // Helper to resolve border-radius class name dynamically
  const radiusClass = (element: "container" | "input" | "button" | "badge") => {
    if (borderRadius === "none") return "rounded-none";
    if (borderRadius === "md") {
      if (element === "container") return "rounded-xl";
      if (element === "button") return "rounded-md";
      if (element === "badge") return "rounded-md";
      return "rounded-md";
    }
    // "lg" / curved layout
    if (element === "container") return "rounded-3xl";
    if (element === "button") return "rounded-full";
    if (element === "badge") return "rounded-lg";
    return "rounded-xl";
  };

  const inputClass = cn(
    "w-full border border-gray-300 bg-white px-3.5 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20",
    radiusClass("input")
  );

  // Randomize captcha on client mount to secure the form
  useEffect(() => {
    setCaptcha(newCaptcha());
  }, []);

  const expected = useMemo(() => captcha.a + captcha.b, [captcha]);

  // Live Captcha Verification Status
  const isCaptchaCorrect = useMemo(() => {
    return Number(form.captchaAnswer.trim()) === expected;
  }, [form.captchaAnswer, expected]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function refreshCaptcha() {
    setCaptcha(newCaptcha());
    update("captchaAnswer", "");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!isCaptchaCorrect) {
      setError("Security check failed. Please verify the calculation.");
      refreshCaptcha();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          captchaAnswer: Number(form.captchaAnswer),
          captchaExpected: expected,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
      refreshCaptcha();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      refreshCaptcha();
    }
  }

  if (simpleLayout) {
    return (
      <div className={cn("bg-white p-5 md:p-6 border border-gray-200 shadow-xl text-left w-full max-w-xl mx-auto transition-all duration-300", radiusClass("container"), className)}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4 mb-4">
          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-gray-900 md:text-xl">
              Book a free Zoho consultation
            </h2>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Complete the details below to request your 30-minute session.
            </p>
          </div>
          {/* Border-Radius Interactive Controller */}
          <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 p-1 shrink-0">
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400 px-1.5 select-none">
              Radius:
            </span>
            {(["none", "md", "lg"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setBorderRadius(r)}
                className={cn(
                  "rounded px-2.5 py-0.5 text-[9px] font-bold uppercase transition duration-200",
                  borderRadius === r
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                )}
              >
                {r === "none" ? "Sharp" : r === "md" ? "Rounded" : "Curved"}
              </button>
            ))}
          </div>
        </div>

        {status === "success" ? (
          <div
            role="status"
            className={cn("mt-6 border border-emerald-200 bg-emerald-50/50 p-6 text-center transition-all duration-300", radiusClass("container"))}
          >
            <p className="text-base font-bold text-emerald-900">
              ✓ Message Sent Successfully
            </p>
            <p className="mt-2 text-xs text-emerald-800">
              Thank you for reaching out — a certified Zoho expert will reply within 24 hours.
            </p>
            <button
              type="button"
              className={cn("mt-5 inline-flex items-center justify-center bg-primary px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-primary/95 transition-all duration-300", radiusClass("button"))}
              onClick={() => setStatus("idle")}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="mt-4 space-y-2.5" onSubmit={onSubmit} noValidate>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor={`${id}-first`}>First Name</FieldLabel>
                <input
                  id={`${id}-first`}
                  name="firstName"
                  required
                  autoComplete="given-name"
                  placeholder="First name"
                  className={inputClass}
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                />
              </div>
              <div>
                <FieldLabel htmlFor={`${id}-last`}>Last Name</FieldLabel>
                <input
                  id={`${id}-last`}
                  name="lastName"
                  required
                  autoComplete="family-name"
                  placeholder="Last name"
                  className={inputClass}
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor={`${id}-email`}>Email Address</FieldLabel>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
              <div>
                <FieldLabel htmlFor={`${id}-phone`}>Phone Number</FieldLabel>
                <input
                  id={`${id}-phone`}
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="10 digit mobile number"
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
            </div>

            <div>
              <FieldLabel htmlFor={`${id}-service`}>
                Service You&apos;re Interested In
              </FieldLabel>
              <select
                id={`${id}-service`}
                name="service"
                required
                className={cn(inputClass, !form.service && "text-gray-400")}
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
              >
                <option value="" disabled>
                  Select a service...
                </option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor={`${id}-message`}>
                  Tell us about your business
                </FieldLabel>
                <span className="text-[9px] font-bold text-gray-400 uppercase select-none">
                  {form.message.length} Characters
                </span>
              </div>
              <textarea
                id={`${id}-message`}
                name="message"
                required
                rows={3}
                placeholder="What does your business do? What challenge are you trying to solve?"
                className={cn(inputClass, "resize-y min-h-[5.5rem]")}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </div>

            {/* Security Captcha Check (with live validation indicator) */}
            <div>
              <FieldLabel htmlFor={`${id}-captcha`}>Security Check</FieldLabel>
              <div className="flex flex-wrap items-center gap-3">
                <span className={cn("inline-flex h-11 items-center border border-gray-250 bg-gray-50 px-4 text-xs font-bold text-gray-900 select-none transition-all duration-300", radiusClass("input"))}>
                  {captcha.a} + {captcha.b} = ?
                </span>
                <div className="relative">
                  <input
                    id={`${id}-captcha`}
                    name="captchaAnswer"
                    required
                    inputMode="numeric"
                    placeholder="?"
                    aria-label="Answer the security check"
                    className={cn(
                      inputClass, 
                      "w-24 text-center pr-8",
                      form.captchaAnswer && (isCaptchaCorrect ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20" : "border-red-400 focus:border-red-400 focus:ring-red-400/20")
                    )}
                    value={form.captchaAnswer}
                    onChange={(e) =>
                      update(
                        "captchaAnswer",
                        e.target.value.replace(/[^\d-]/g, ""),
                      )
                    }
                  />
                  {/* Live verification indicator icon */}
                  {form.captchaAnswer && (
                    <span className={cn(
                      "absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-extrabold select-none",
                      isCaptchaCorrect ? "text-emerald-600" : "text-red-500"
                    )}>
                      {isCaptchaCorrect ? "✓" : "✗"}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className={cn("inline-flex h-11 w-11 items-center justify-center border border-gray-300 bg-white text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-primary", radiusClass("button"))}
                  aria-label="Refresh security check"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17 3v4h4M7 21v-4H3"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {error ? (
              <p role="alert" className="text-xs font-bold text-red-600">
                {error}
              </p>
            ) : null}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className={cn("w-full py-3 text-xs uppercase font-extrabold tracking-wider transition-all duration-300", radiusClass("button"))}
            >
              {status === "submitting" ? "Sending Request..." : "Send Message →"}
            </Button>

            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {[
                "Free consultation",
                "No commitment",
                "24-hr response",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <span className="text-emerald-500" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </form>
        )}
      </div>
    );
  }

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("py-16 md:py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={cn("overflow-hidden border border-gray-200 bg-white shadow-md transition-all duration-300", radiusClass("container"))}>
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)]">
            
            {/* Left Column — Expert Pitch (Zoho Badge at the top upper side) */}
            <aside className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-7 text-white md:px-8 md:py-8 flex flex-col justify-between">
              <div>
                {/* Zoho Badge at the top upper side */}
                <div className="mb-4">
                  <ZohoPartnerBadge variant="badge" size="sm" framed />
                </div>

                <h2
                  id={`${id}-heading`}
                  className="mt-2 text-xl font-extrabold leading-tight tracking-tight text-white md:text-2xl"
                >
                  Talk to a{" "}
                  <span className="font-serif text-[1.15em] font-semibold italic text-blue-400">
                    Zoho Expert
                  </span>{" "}
                  for Free
                </h2>

                <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-400">
                  Get expert advice on the right Zoho product for your business —
                  no commitment, no cost.
                </p>

                <ul className="mt-4 space-y-1.5">
                  {benefits.map((item) => (
                    <li key={item.id} className={cn("group/item flex items-center gap-3 p-1 border border-transparent hover:border-white/5 hover:bg-white/5 transition-all duration-300", radiusClass("badge"))}>
                      <span
                        className={cn(
                          "inline-flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover/item:scale-105",
                          item.iconBg,
                          radiusClass("badge"),
                        )}
                      >
                        {item.icon}
                      </span>
                      <span className="text-xs font-semibold text-slate-200">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom tag indicator instead of badge */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <span>Authorized Partner</span>
                <span className="text-blue-400 animate-pulse">● Active</span>
              </div>
            </aside>

            <div className="px-4 py-5 sm:px-5 md:px-7 md:py-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-gray-900">
                    Send us a message
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    We&apos;ll get back to you within 24 hours — usually the same day.
                  </p>
                </div>
                {/* Border-Radius Interactive Controller */}
                <div className="flex items-center gap-1.5 rounded-lg border border-gray-250 bg-gray-50 p-1 shrink-0 select-none">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400 px-1.5 select-none">
                    Radius:
                  </span>
                  {(["none", "md", "lg"] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setBorderRadius(r)}
                      className={cn(
                        "rounded px-2.5 py-0.5 text-[9px] font-bold uppercase transition duration-200",
                        borderRadius === r
                          ? "bg-white text-primary shadow-sm"
                          : "text-gray-500 hover:text-gray-800"
                      )}
                    >
                      {r === "none" ? "Sharp" : r === "md" ? "Rounded" : "Curved"}
                    </button>
                  ))}
                </div>
              </div>

              {status === "success" ? (
                <div
                  role="status"
                  className={cn("mt-8 border border-emerald-200 bg-emerald-50/50 p-6 text-center transition-all duration-300", radiusClass("container"))}
                >
                  <p className="text-base font-bold text-emerald-900">
                    ✓ Message Sent Successfully
                  </p>
                  <p className="mt-2 text-xs text-emerald-800">
                    Thank you for reaching out — a certified Zoho expert will reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    className={cn("mt-5 inline-flex items-center justify-center bg-primary px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-primary/95 transition-all duration-300", radiusClass("button"))}
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="mt-4 space-y-2.5" onSubmit={onSubmit} noValidate>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor={`${id}-first`}>First Name</FieldLabel>
                      <input
                        id={`${id}-first`}
                        name="firstName"
                        required
                        autoComplete="given-name"
                        placeholder="First name"
                        className={inputClass}
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor={`${id}-last`}>Last Name</FieldLabel>
                      <input
                        id={`${id}-last`}
                        name="lastName"
                        required
                        autoComplete="family-name"
                        placeholder="Last name"
                        className={inputClass}
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor={`${id}-email`}>Email Address</FieldLabel>
                      <input
                        id={`${id}-email`}
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="your@email.com"
                        className={inputClass}
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor={`${id}-phone`}>Phone Number</FieldLabel>
                      <input
                        id={`${id}-phone`}
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="10 digit mobile number"
                        className={inputClass}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <FieldLabel htmlFor={`${id}-service`}>
                      Service You&apos;re Interested In
                    </FieldLabel>
                    <select
                      id={`${id}-service`}
                      name="service"
                      required
                      className={cn(inputClass, !form.service && "text-gray-400")}
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <FieldLabel htmlFor={`${id}-message`}>
                        Tell us about your business
                      </FieldLabel>
                      <span className="text-[9px] font-bold text-gray-400 uppercase select-none">
                        {form.message.length} Characters
                      </span>
                    </div>
                    <textarea
                      id={`${id}-message`}
                      name="message"
                      required
                      rows={3}
                      placeholder="What does your business do? What challenge are you trying to solve?"
                      className={cn(inputClass, "resize-y min-h-[5.5rem]")}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                    />
                  </div>

                  {/* Security Captcha Check (with live validation indicator) */}
                  <div>
                    <FieldLabel htmlFor={`${id}-captcha`}>Security Check</FieldLabel>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={cn("inline-flex h-10 items-center border border-gray-250 bg-gray-55 px-3 text-xs font-bold text-gray-900 select-none transition-all duration-300", radiusClass("input"))}>
                        {captcha.a} + {captcha.b} = ?
                      </span>
                      <div className="relative">
                        <input
                          id={`${id}-captcha`}
                          name="captchaAnswer"
                          required
                          inputMode="numeric"
                          placeholder="?"
                          aria-label="Answer the security check"
                          className={cn(
                            inputClass, 
                            "w-24 text-center pr-8",
                            form.captchaAnswer && (isCaptchaCorrect ? "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20" : "border-red-400 focus:border-red-400 focus:ring-red-400/20")
                          )}
                          value={form.captchaAnswer}
                          onChange={(e) =>
                            update(
                              "captchaAnswer",
                              e.target.value.replace(/[^\d-]/g, ""),
                            )
                          }
                        />
                        {/* Live verification indicator icon */}
                        {form.captchaAnswer && (
                          <span className={cn(
                            "absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-extrabold select-none",
                            isCaptchaCorrect ? "text-emerald-600" : "text-red-500"
                          )}>
                            {isCaptchaCorrect ? "✓" : "✗"}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        className={cn("inline-flex h-10 w-10 items-center justify-center border border-gray-300 bg-white text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-primary", radiusClass("button"))}
                        aria-label="Refresh security check"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                          />
                          <path
                            d="M17 3v4h4M7 21v-4H3"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {error ? (
                    <p role="alert" className="text-xs font-bold text-red-600">
                      {error}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className={cn("w-full py-2.5 text-xs uppercase font-extrabold tracking-wider transition-all duration-300", radiusClass("button"))}
                  >
                    {status === "submitting" ? "Sending Request..." : "Send Message →"}
                  </Button>

                  <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    {[
                      "Free consultation",
                      "No commitment",
                      "24-hr response",
                    ].map((item) => (
                      <li key={item} className="inline-flex items-center gap-1.5">
                        <span className="text-emerald-500" aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
