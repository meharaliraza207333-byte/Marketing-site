"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "./icons";

type Status = "idle" | "sending" | "success";
type Fields = "name" | "email" | "service" | "budget" | "goals";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: HTMLFormElement) {
  const data = new FormData(form);
  const errors: Partial<Record<Fields, string>> = {};
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const service = String(data.get("service") || "");
  const budget = String(data.get("budget") || "");
  const goals = String(data.get("goals") || "").trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!emailPattern.test(email)) errors.email = "Enter a valid email address.";
  if (!service) errors.service = "Select the service you need.";
  if (!budget) errors.budget = "Choose a budget range.";
  if (goals.length < 20) errors.goals = "Share a little more about the project (at least 20 characters).";

  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(event.currentTarget);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      event.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    window.setTimeout(() => setStatus("success"), 700);
  };

  if (status === "success") {
    return (
      <div className="rounded-[1.75rem] bg-lime p-8 text-ink sm:p-12" role="status">
        <span className="text-4xl">✳</span>
        <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.95]">Your note is on its way.</h2>
        <p className="mt-4 max-w-sm text-lg">Thanks for reaching out. I&apos;ll reply within two business days.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 border-b border-ink pb-1 text-sm font-semibold"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full appearance-none border-0 border-b border-ink/25 bg-transparent py-3 text-base text-ink outline-none transition placeholder:text-ink/35 focus:border-ink";

  return (
    <form className="max-w-3xl" onSubmit={submit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" name="name" error={errors.name}>
          <input name="name" autoComplete="name" placeholder="First + last name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={fieldClass} />
        </Field>
        <Field label="Email address" name="email" error={errors.email}>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={fieldClass} />
        </Field>
        <Field label="Required service" name="service" error={errors.service}>
          <select name="service" defaultValue="" aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined} className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            <option>Email marketing</option>
            <option>Social media</option>
            <option>Both email + social</option>
            <option>Something else</option>
          </select>
        </Field>
        <Field label="Budget range" name="budget" error={errors.budget}>
          <select name="budget" defaultValue="" aria-invalid={!!errors.budget} aria-describedby={errors.budget ? "budget-error" : undefined} className={fieldClass}>
            <option value="" disabled>
              Select a range
            </option>
            <option>Under $1,000</option>
            <option>$1,000–$3,000</option>
            <option>$3,000–$6,000</option>
            <option>$6,000+</option>
          </select>
        </Field>
      </div>
      <Field label="Project goals" name="goals" error={errors.goals} className="mt-6">
        <textarea
          name="goals"
          rows={5}
          minLength={20}
          placeholder="What are you building, launching, or trying to improve?"
          aria-invalid={!!errors.goals}
          aria-describedby={errors.goals ? "goals-error" : undefined}
          className={`${fieldClass} resize-y`}
        />
      </Field>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs text-muted">By submitting, you agree to be contacted about this inquiry.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-lime hover:text-ink disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send inquiry"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
  className = "",
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className={`block font-mono text-[10px] uppercase tracking-[0.16em] text-ink/70 ${className}`}>
      {label}
      <span className="sr-only">{error ? `, error: ${error}` : ""}</span>
      <div>{children}</div>
      {error && (
        <p id={errorId} role="alert" className="mt-2 font-sans text-xs normal-case tracking-normal text-coral">
          {error}
        </p>
      )}
    </label>
  );
}
