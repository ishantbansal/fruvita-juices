import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JuiceBottle from "@/components/JuiceBottle";
import ProductCard from "@/components/ProductCard";
import Blob from "@/components/Blob";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Fruvita`,
    description: product.short,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.line === product.line && p.slug !== product.slug).slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden px-6 pt-14 pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 15%, ${product.colors.from}, transparent 45%), radial-gradient(circle at 85% 85%, ${product.colors.to}, transparent 45%)`,
          }}
        />
        <Blob
          color={product.colors.from}
          color2={product.colors.to}
          className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 opacity-40 animate-float-slow"
        />
        <Blob
          color={product.colors.accent}
          className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 opacity-25 animate-float-slower"
        />
        <div className="mx-auto max-w-6xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-mango-deep)]"
          >
            ← Back to All Juices
          </Link>

          <div className="mt-8 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative flex justify-center">
              <div className="h-[360px] w-52 animate-float-slow">
                <JuiceBottle {...product.colors} className="h-full w-full" label={product.name.split(" ")[0]} />
              </div>
            </div>

            <div>
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                style={{ background: product.colors.accent }}
              >
                {product.line}
              </span>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-[var(--color-ink)] md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-2 font-display text-xl italic text-[var(--color-ink-soft)]">
                {product.tagline}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink-soft)]">
                {product.long}
              </p>

              {product.healthFact && (
                <div className="mt-8 rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-leaf)]">
                    Good to Know
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {product.healthFact}
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[var(--color-ink)] px-8 py-3.5 text-sm font-semibold text-[var(--color-cream)] transition-transform hover:scale-105"
                >
                  Where to Buy
                </Link>
                <Link
                  href="/products"
                  className="rounded-full border border-[var(--color-ink)]/20 px-8 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
                >
                  See All Flavors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[var(--color-cream-deep)] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
              You Might Also Like
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
