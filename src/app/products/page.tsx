import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import Blob from "@/components/Blob";
import { originals, mixAndThrill } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Juices — Fruvita",
  description: "Explore all 13 Fruvita flavors, from classic Originals to bold Mix & Thrill blends.",
};

export default function ProductsPage() {
  return (
    <div>
      <section className="relative overflow-hidden px-6 pt-16 pb-14 text-center">
        <Blob
          color="var(--color-lychee)"
          className="pointer-events-none absolute -top-16 right-0 h-72 w-72 opacity-30 animate-float-slow"
        />
        <span className="inline-block rounded-full border border-[var(--color-mango)]/40 bg-[var(--color-mango)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-mango-deep)]">
          Thirteen Flavors
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-semibold tracking-tight text-[var(--color-ink)] md:text-6xl">
          Explore the Range
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-ink-soft)]">
          Everyday classics and bold new blends — all made from real fruit.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
            Fruvita Originals
          </h2>
          <span className="h-px flex-1 bg-[var(--color-line)]" />
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {originals.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
            Fruvita Mix &amp; Thrill
          </h2>
          <span className="h-px flex-1 bg-[var(--color-line)]" />
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {mixAndThrill.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
