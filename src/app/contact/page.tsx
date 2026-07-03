import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Blob from "@/components/Blob";

export const metadata: Metadata = {
  title: "Contact — Fruvita",
  description: "Get in touch with Fruvita for general inquiries, distribution, or feedback.",
};

const details = [
  { label: "Registered Office", value: "[ADDRESS PLACEHOLDER]" },
  { label: "Phone", value: "[PHONE PLACEHOLDER]" },
  { label: "General Email", value: "[hello@fruvita.example]" },
  { label: "Business / Distribution", value: "[business@fruvita.example]" },
  { label: "Business Hours", value: "[HOURS PLACEHOLDER]" },
];

export default function ContactPage() {
  return (
    <div>
      <section className="gradient-mesh relative overflow-hidden px-6 pt-16 pb-14 text-center">
        <Blob
          color="var(--color-mango)"
          color2="var(--color-citrus)"
          className="pointer-events-none absolute -top-16 left-1/2 h-80 w-80 -translate-x-1/2 opacity-45 animate-float-slow"
        />
        <Blob
          color="var(--color-guava)"
          className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 opacity-30 animate-float-slower"
        />
        <span className="inline-block rounded-full border border-[var(--color-mango)]/40 bg-[var(--color-mango)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-mango-deep)]">
          Get in Touch
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-5xl font-semibold tracking-tight text-[var(--color-ink)] md:text-6xl">
          Let&apos;s Talk
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-ink-soft)]">
          Questions, feedback, or business inquiries — we&apos;d love to hear
          from you.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-3 rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-8 md:p-10">
            <ContactForm />
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-8">
              <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                Reach Us Directly
              </h3>
              <dl className="mt-5 space-y-4">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-sm text-[var(--color-ink)]">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              className="rounded-3xl p-8 text-[var(--color-cream)]"
              style={{ background: "linear-gradient(135deg, var(--color-leaf), var(--color-leaf-deep))" }}
            >
              <h3 className="font-display text-lg font-semibold">
                Become a Fruvita Partner
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-cream)]/85">
                Interested in stocking Fruvita or becoming a regional
                distributor? Reach out to our business team with your
                location and business details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
