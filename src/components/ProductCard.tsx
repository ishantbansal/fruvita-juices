import Link from "next/link";
import JuiceBottle from "./JuiceBottle";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-6 transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-12px_rgba(42,33,23,0.2)]"
    >
      <div
        className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-all duration-300 group-hover:opacity-60 group-hover:scale-125"
        style={{ background: `linear-gradient(135deg, ${product.colors.from}, ${product.colors.to})` }}
      />
      <div
        className="absolute -bottom-12 -left-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
        style={{ background: product.colors.accent }}
      />
      <div className="relative h-44 w-24">
        <JuiceBottle {...product.colors} className="h-full w-full" />
      </div>
      <span className="mt-5 font-display text-lg font-semibold text-[var(--color-ink)]">
        {product.name}
      </span>
      <span className="mt-1 text-center text-xs text-[var(--color-ink-soft)]">
        {product.tagline}
      </span>
      <span
        className="mt-4 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-transform group-hover:scale-105"
        style={{ background: product.colors.accent }}
      >
        View Details
      </span>
    </Link>
  );
}
