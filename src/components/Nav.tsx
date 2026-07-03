"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Juices" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-cream)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/brand/fruvita-icon.webp"
            alt="Fruvita"
            width={36}
            height={36}
            className="rounded-full transition-transform group-hover:scale-110"
            priority
          />
          <span className="font-display text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
            Fruvita
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-mango-deep)] ${
                pathname === l.href ? "text-[var(--color-mango-deep)]" : "text-[var(--color-ink-soft)]"
              }`}
            >
              {l.label}
              {pathname === l.href && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--color-mango-deep)]" />
              )}
            </Link>
          ))}
        </nav>

        <Link
          href="/products"
          className="hidden rounded-full bg-[var(--color-ink)] px-5 py-2 text-sm font-semibold text-[var(--color-cream)] transition-transform hover:scale-105 md:inline-block"
        >
          Explore Juices
        </Link>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`h-[2px] w-6 bg-[var(--color-ink)] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-[var(--color-ink)] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-[var(--color-ink)] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--color-line)] px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium text-[var(--color-ink-soft)] hover:bg-[var(--color-cream-deep)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
