import Link from "next/link";
import JuiceBottle from "@/components/JuiceBottle";
import ProductCard from "@/components/ProductCard";
import Blob from "@/components/Blob";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

const trustItems = [
  { icon: "🍃", label: "Real Fruit, Always", bg: "color-mix(in srgb, var(--color-leaf) 18%, transparent)" },
  { icon: "🚫", label: "No Artificial Colors*", bg: "color-mix(in srgb, var(--color-guava) 18%, transparent)" },
  { icon: "💧", label: "No Added Preservatives*", bg: "color-mix(in srgb, var(--color-mango) 18%, transparent)" },
  { icon: "🇮🇳", label: "Proudly Made in India", bg: "color-mix(in srgb, var(--color-citrus) 22%, transparent)" },
];

const pillars = [
  {
    title: "Real Ingredients",
    body: "Every bottle starts with real fruit, not concentrate dressed up with flavoring.",
  },
  {
    title: "Crafted, Not Mass-Produced",
    body: "Small-batch care in how we source and bottle every flavor.",
  },
  {
    title: "A Flavor for Everyone",
    body: "From everyday classics to bold new blends, there's a Fruvita for every mood.",
  },
];

const heroBottles = [products[0], products[1], products[3], products[9]];
const pillarColors = ["var(--color-mango-deep)", "var(--color-guava-deep)", "var(--color-leaf-deep)"];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="gradient-mesh relative px-6 pt-16 pb-28 md:pt-24 md:pb-36">
        <Blob
          color="var(--color-mango)"
          color2="var(--color-citrus)"
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 opacity-60 animate-float-slow"
        />
        <Blob
          color="var(--color-guava)"
          color2="var(--color-berry)"
          className="pointer-events-none absolute top-40 -right-32 h-[28rem] w-[28rem] opacity-45 animate-float-slower"
        />
        <Blob
          color="var(--color-lime)"
          className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 opacity-35 animate-float-slow"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row">
          <div className="reveal max-w-xl text-center md:text-left">
            <span className="inline-block rounded-full border border-[var(--color-mango)]/40 bg-[var(--color-mango)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-mango-deep)]">
              Orchard to Bottle
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-7xl">
              Real Fruit.
              <br />
              <span className="italic text-[var(--color-mango-deep)]">Real Fruvita.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              From orchard to bottle, no shortcuts — just juice that tastes
              like the fruit it came from.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <Link
                href="/products"
                className="w-full rounded-full bg-[var(--color-ink)] px-8 py-3.5 text-center text-sm font-semibold text-[var(--color-cream)] shadow-lg shadow-[var(--color-ink)]/10 transition-transform hover:scale-105 sm:w-auto"
              >
                Explore Our Juices
              </Link>
              <Link
                href="/contact"
                className="w-full rounded-full border border-[var(--color-ink)]/20 px-8 py-3.5 text-center text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)] sm:w-auto"
              >
                Find a Store
              </Link>
            </div>
          </div>

          <div className="reveal relative flex h-[420px] w-full max-w-md items-end justify-center gap-3 [animation-delay:200ms]">
            {heroBottles.map((p, i) => (
              <div
                key={p.slug}
                className={i % 2 === 0 ? "animate-float-slow" : "animate-float-slower"}
                style={{ height: `${260 + (i % 2) * 60}px`, width: "90px" }}
              >
                <JuiceBottle {...p.colors} className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative border-y border-[var(--color-line)] bg-[var(--color-paper)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {trustItems.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg"
                style={{ background: t.bg }}
              >
                {t.icon}
              </span>
              <span className="text-sm font-medium text-[var(--color-ink-soft)]">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY FRUVITA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[var(--color-ink)] md:text-5xl">
            Juice, the Way Fruit Intended
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
            We start where every good juice should start — with real, ripe
            fruit. No shortcuts, no artificial flavor tricks pretending to be
            mango or guava. Just fruit, pressed and bottled to taste like it
            should.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-8">
                <div
                  className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full opacity-20 blur-xl"
                  style={{ background: pillarColors[i] }}
                />
                <span
                  className="relative font-display text-4xl italic"
                  style={{ color: pillarColors[i] }}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-[var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="gradient-mesh py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="flex flex-col items-center text-center">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-[var(--color-ink)] md:text-5xl">
              Explore the Range
            </h2>
            <p className="mt-4 max-w-xl text-[var(--color-ink-soft)]">
              From everyday classics to bold new blends — thirteen flavors,
              all real fruit.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {products.slice(0, 8).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="rounded-full bg-[var(--color-ink)] px-8 py-3.5 text-sm font-semibold text-[var(--color-cream)] transition-transform hover:scale-105"
            >
              View All 13 Flavors →
            </Link>
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="gradient-mesh-deep relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center text-[var(--color-cream)] md:px-16">
          <Blob
            color="rgba(255,255,255,0.1)"
            className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 animate-spin-slow"
          />
          <Blob
            color="rgba(255,255,255,0.06)"
            className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 animate-spin-slow"
          />
          <h2 className="relative font-display text-3xl font-semibold tracking-tight md:text-5xl">
            From Orchard to Bottle
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-[var(--color-cream)]/85">
            Fruvita started with a simple frustration: too many &ldquo;fruit
            juices&rdquo; don&apos;t taste like fruit at all. So we built a
            brand around getting that right — sourcing real fruit, keeping
            the process honest, and bottling flavor you can actually taste.
          </p>
          <Link
            href="/about"
            className="relative mt-8 inline-block rounded-full bg-[var(--color-cream)] px-8 py-3.5 text-sm font-semibold text-[var(--color-leaf-deep)] transition-transform hover:scale-105"
          >
            Read Our Story →
          </Link>
        </div>
      </section>

      {/* WHERE TO BUY + NEWSLETTER */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-10">
            <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
              Find Fruvita Near You
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              Available at leading supermarkets, local stores, and online.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--color-mango)] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Store Locator
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--color-ink)]/20 px-6 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
              >
                Buy Online
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper)] p-10">
            <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
              Stay in the Loop
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              New flavors, offers, and orchard stories — straight to your inbox.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-full border border-[var(--color-line)] bg-[var(--color-cream)] px-5 py-3 text-sm outline-none focus:border-[var(--color-mango)]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[var(--color-guava)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
