import type { Metadata } from "next";
import Link from "next/link";
import Blob from "@/components/Blob";

export const metadata: Metadata = {
  title: "Our Story — Fruvita",
  description: "Why Fruvita exists, our values, and how we make real-fruit juice.",
};

const values = [
  {
    title: "Fruit First",
    body: "If it's not real fruit, it's not in the bottle.",
  },
  {
    title: "Honest Labeling",
    body: "What's on the label is what's in the drink. No hidden surprises.",
  },
  {
    title: "Rooted in India",
    body: "Flavors that reflect real Indian tastes, not imported flavor trends.",
  },
  {
    title: "Quality at Every Step",
    body: "From sourcing to bottling, every stage is built around consistency and care.",
  },
];

const process = [
  { step: "01", title: "Sourcing", body: "We work with trusted farms and suppliers to source ripe, quality fruit. [PLACEHOLDER — add real sourcing details]" },
  { step: "02", title: "Processing", body: "[PLACEHOLDER — describe your actual process: cold-pressed, pasteurized, etc.]" },
  { step: "03", title: "Bottling", body: "[PLACEHOLDER — describe packaging formats and sizes]" },
  { step: "04", title: "Quality Checks", body: "[PLACEHOLDER — list certifications: FSSAI, ISO, etc.]" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden px-6 pt-16 pb-20 text-center">
        <Blob
          color="var(--color-guava)"
          className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 opacity-15 animate-spin-slow"
        />
        <span className="inline-block rounded-full border border-[var(--color-leaf)]/40 bg-[var(--color-leaf)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-leaf)]">
          Our Story
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-5xl font-semibold tracking-tight text-[var(--color-ink)] md:text-6xl">
          We started Fruvita because &ldquo;fruit juice&rdquo; shouldn&apos;t
          be a stretch of the imagination.
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-10 md:p-14">
          <p className="text-lg leading-relaxed text-[var(--color-ink-soft)]">
            Fruvita began with{" "}
            <span className="font-semibold text-[var(--color-ink)]">
              [FOUNDER NAME(S) / YEAR — PLACEHOLDER]
            </span>{" "}
            and a simple observation: most juice on the shelf leaned harder
            on flavoring and sugar than on actual fruit. We set out to build
            a juice brand that put real fruit back at the center — sourced
            thoughtfully, processed with care, and bottled without cutting
            corners.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
            Today, Fruvita makes 13 flavors across two lines — our classic
            Originals and our bolder Mix &amp; Thrill range — sold across{" "}
            <span className="font-semibold text-[var(--color-ink)]">
              [REGION / CITY — PLACEHOLDER]
            </span>
            .
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream-deep)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-[var(--color-ink)]">
            Our Values
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-7"
              >
                <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-[var(--color-ink)]">
          How We Make It
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="text-center">
              <span className="font-display text-5xl italic text-[var(--color-mango)]">
                {p.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--color-ink)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2.5rem] bg-[var(--color-ink)] px-8 py-16 text-center text-[var(--color-cream)] md:px-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Taste the Difference
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-cream)]/80">
            Explore our full range of real-fruit juices.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-block rounded-full bg-[var(--color-mango)] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Shop the Range →
          </Link>
        </div>
      </section>
    </div>
  );
}
