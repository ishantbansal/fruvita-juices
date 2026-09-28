"use client";

import { useState, type FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "ecf154e1-2fe7-48a8-a7a8-ccaa322cb98d";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-[var(--color-leaf)]/30 bg-[var(--color-leaf)]/10 p-8 text-center">
        <span className="text-3xl">🌿</span>
        <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-leaf-deep)]">
          Thanks for reaching out!
        </h3>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
          We&apos;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Fruvita Contact Form — ${formData.get("subject")}`);
    formData.append("from_name", "Fruvita Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      setStatus(result.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
            Name
          </label>
          <input
            required
            name="name"
            type="text"
            className="mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm outline-none focus:border-[var(--color-mango)]"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm outline-none focus:border-[var(--color-mango)]"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
          Phone (optional)
        </label>
        <input
          name="phone"
          type="tel"
          className="mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm outline-none focus:border-[var(--color-mango)]"
        />
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
          Subject
        </label>
        <select
          name="subject"
          className="mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm outline-none focus:border-[var(--color-mango)]"
        >
          <option>General Inquiry</option>
          <option>Distributor &amp; Bulk Orders</option>
          <option>Careers</option>
          <option>Feedback</option>
          <option>Press</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm outline-none focus:border-[var(--color-mango)]"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your message. Please try again, or email us directly at info@fruvitajuices.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-[var(--color-ink)] px-8 py-3.5 text-sm font-semibold text-[var(--color-cream)] transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
