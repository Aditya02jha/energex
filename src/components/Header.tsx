"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-[0_2px_20px_rgba(6,32,15,0.12)]" : ""}`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="hidden bg-forest-900 text-xs text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2">
          <a href={contact.phoneHref} className="hover:text-lime-300">{contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="hover:text-lime-300">{contact.email}</a>
          <a href={contact.instagram} target="_blank" rel="noreferrer" className="hover:text-lime-300">Instagram</a>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" className="shrink-0" aria-label="ENERGEX home">
          <Image src="/images/logo.png" alt="ENERGEX — Save Energy. Protect Environment. Trust Our Service." width={500} height={292} priority className="h-14 w-auto" />
        </Link>

        <nav className="hidden h-full items-stretch lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <div key={item.label} className="flex items-stretch" onMouseEnter={() => setOpen(item.groups ? item.label : null)}>
                <Link
                  href={item.href}
                  className={`relative flex items-center px-4 text-[15px] font-semibold text-ink transition-colors hover:text-forest-600 after:absolute after:inset-x-4 after:bottom-0 after:h-1 after:origin-left after:bg-leaf-400 after:transition-transform ${
                    active || open === item.label ? "after:scale-x-100" : "after:scale-x-0"
                  }`}
                  aria-expanded={item.groups ? open === item.label : undefined}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden bg-forest-700 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-leaf-500 sm:inline-block"
          >
            Contact
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {nav.map((item) =>
        item.groups ? (
          <div
            key={item.label}
            className={`absolute inset-x-0 top-full hidden border-t-4 border-leaf-400 bg-white shadow-xl transition-all duration-200 lg:block ${
              open === item.label ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
            }`}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-6 py-10">
              <div className="col-span-4 border-r border-black/10 pr-10">
                <p className="text-3xl font-light text-ink">{item.label}</p>
                <p className="mt-3 text-stone">{item.blurb}</p>
                <Link href={item.href} className="mt-6 inline-flex items-center gap-2 font-bold text-forest-700 hover:text-leaf-500">
                  Explore {item.label} <span aria-hidden>→</span>
                </Link>
              </div>
              {item.groups.map((group) => (
                <div key={group.title} className="col-span-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf-500">{group.title}</p>
                  <ul className="mt-4 space-y-3">
                    {group.links.map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className="text-lg text-ink hover:text-forest-600">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null,
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-black/10 bg-white lg:hidden">
          <ul className="px-6 py-4">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-black/5 py-3">
                <Link href={item.href} className="text-xl font-semibold">
                  {item.label}
                </Link>
                {item.groups && (
                  <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                    {item.groups.flatMap((g) => g.links).map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className="text-sm text-stone">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-4">
              <Link href="/contact" className="block bg-forest-700 py-3 text-center font-bold uppercase tracking-wider text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
