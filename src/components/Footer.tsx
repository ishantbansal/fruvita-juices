import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-line)] bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-3xl font-semibold">Fruvita</span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-cream)]/70">
              Real Fruit. Real Fruvita. Juice made the way fruit intended —
              honest ingredients, orchard to bottle.
            </p>
            <div className="mt-6 flex gap-4 text-sm">
              <a href="#" className="rounded-full border border-[var(--color-cream)]/25 px-4 py-2 hover:border-[var(--color-mango)] hover:text-[var(--color-mango)] transition-colors">
                Instagram
              </a>
              <a href="#" className="rounded-full border border-[var(--color-cream)]/25 px-4 py-2 hover:border-[var(--color-mango)] hover:text-[var(--color-mango)] transition-colors">
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-[var(--color-cream)]/50">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-cream)]/80">
              <li><Link href="/" className="hover:text-[var(--color-mango)]">Home</Link></li>
              <li><Link href="/products" className="hover:text-[var(--color-mango)]">Our Juices</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-mango)]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-mango)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-[var(--color-cream)]/50">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-cream)]/80">
              <li>[PHONE PLACEHOLDER]</li>
              <li>[EMAIL PLACEHOLDER]</li>
              <li>[ADDRESS PLACEHOLDER]</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-[var(--color-cream)]/15 pt-6 text-xs text-[var(--color-cream)]/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Fruvita Juices. All rights reserved.</p>
          <p>FSSAI License No. [PLACEHOLDER] · Privacy Policy · Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}
