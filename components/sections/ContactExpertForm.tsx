"use client";

import { useMemo, useState, type FormEvent } from "react";

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
    iconBg: "bg-white/10 text-white",
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
    iconBg: "bg-white/10 text-white",
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
    iconBg: "bg-white/10 text-white",
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
    iconBg: "bg-white/10 text-white",
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
};

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-gray-900">
      {children} <span className="text-red-500">*</span>
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactExpertForm({
  className,
  id = "contact-form",
}: ContactExpertFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [captcha, setCaptcha] = useState<Captcha>(() => newCaptcha());
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const expected = useMemo(() => captcha.a + captcha.b, [captcha]);

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

    if (Number(form.captchaAnswer) !== expected) {
      setError("Security check failed. Please try again.");
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

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("py-16 md:py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)]">
            {/* Left — expert pitch */}
            <aside className="relative bg-primary px-8 py-10 text-white md:px-10 md:py-12">
              <div className="relative">
                <ZohoPartnerBadge variant="badge" size="sm" framed />

                <h2
                  id={`${id}-heading`}
                  className="mt-8 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl"
                >
                  Talk to a{" "}
                  <span className="font-serif text-[1.15em] font-semibold italic text-white/90">
                    Zoho Expert
                  </span>{" "}
                  for Free
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75 md:text-base">
                  Get expert advice on the right Zoho product for your business —
                  no commitment, no cost.
                </p>

                <ul className="mt-10 space-y-4">
                  {benefits.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                          item.iconBg,
                        )}
                      >
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-white/95">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right — form */}
            <div className="px-6 py-8 sm:px-8 md:px-10 md:py-12">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Send us a message
              </h3>
              <p className="mt-2 text-sm text-gray-600 md:text-base">
                We&apos;ll get back to you within 24 hours — usually the same day.
              </p>

              {status === "success" ? (
                <div
                  role="status"
                  className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6"
                >
                  <p className="text-base font-semibold text-emerald-900">
                    Message sent
                  </p>
                  <p className="mt-2 text-sm text-emerald-800">
                    Thanks — a Zoho expert will reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-sm font-semibold text-primary hover:underline"
                    onClick={() => setStatus("idle")}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
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

                  <div className="grid gap-5 sm:grid-cols-2">
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
                    <FieldLabel htmlFor={`${id}-message`}>
                      Tell us about your business
                    </FieldLabel>
                    <textarea
                      id={`${id}-message`}
                      name="message"
                      required
                      rows={4}
                      placeholder="What does your business do? What challenge are you trying to solve?"
                      className={cn(inputClass, "resize-y min-h-[7rem]")}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                    />
                  </div>

                  <div>
                    <FieldLabel htmlFor={`${id}-captcha`}>Security Check</FieldLabel>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex h-11 items-center rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm font-semibold text-gray-900">
                        {captcha.a} + {captcha.b} = ?
                      </span>
                      <input
                        id={`${id}-captcha`}
                        name="captchaAnswer"
                        required
                        inputMode="numeric"
                        placeholder="?"
                        aria-label="Answer the security check"
                        className={cn(inputClass, "w-20 text-center")}
                        value={form.captchaAnswer}
                        onChange={(e) =>
                          update(
                            "captchaAnswer",
                            e.target.value.replace(/[^\d-]/g, ""),
                          )
                        }
                      />
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 transition hover:bg-gray-50 hover:text-primary"
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
                    <p role="alert" className="text-sm font-medium text-red-600">
                      {error}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message →"}
                  </Button>

                  <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-gray-600">
                    {[
                      "Free consultation",
                      "No commitment",
                      "24-hr response",
                    ].map((item) => (
                      <li key={item} className="inline-flex items-center gap-1.5">
                        <span className="text-primary" aria-hidden="true">
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
