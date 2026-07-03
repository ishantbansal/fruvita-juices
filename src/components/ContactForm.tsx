"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--color-leaf)]/30 bg-[var(--color-leaf)]/10 p-8 text-center">
        <span className="text-3xl">🌿</span>
        <h3 className="mt-3 font-display text-xl font-semibold text-[var(--color-leaf-deep)]">
          Thanks for reaching out!
        </h3>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
          This is a demo form — wire it up to your email/CRM before launch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
            Name
          </label>
          <input
            required
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
          type="tel"
          className="mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm outline-none focus:border-[var(--color-mango)]"
        />
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
          Subject
        </label>
        <select className="mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm outline-none focus:border-[var(--color-mango)]">
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
          rows={5}
          className="mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-sm outline-none focus:border-[var(--color-mango)]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[var(--color-ink)] px-8 py-3.5 text-sm font-semibold text-[var(--color-cream)] transition-transform hover:scale-105 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
