import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-lime-300" : "text-leaf-500"}`}>
      <span className={`h-0.5 w-8 ${light ? "bg-lime-300" : "bg-leaf-400"}`} />
      {children}
    </p>
  );
}

export function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 font-bold ${light ? "text-white" : "text-forest-700"}`}
    >
      <span className="border-b-2 border-leaf-400 pb-0.5">{children}</span>
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

export function Button({ href, children, variant = "solid" }: { href: string; children: ReactNode; variant?: "solid" | "outline" | "light" }) {
  const styles = {
    solid: "bg-leaf-400 text-forest-950 hover:bg-lime-300",
    outline: "border-2 border-white text-white hover:bg-white hover:text-forest-900",
    light: "bg-white text-forest-900 hover:bg-lime-200",
  }[variant];
  return (
    <Link href={href} className={`inline-block px-7 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

/** Full-bleed interior page banner. */
export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: ReactNode; intro?: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-45 animate-kenburns" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950 via-forest-950/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 md:pb-28 md:pt-40">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="headline mt-6 max-w-4xl text-5xl md:text-7xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">{intro}</p>}
      </div>
      <div className="h-1.5 brand-gradient" />
    </section>
  );
}

export function Bullets({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className={`flex gap-3 ${light ? "text-white/85" : "text-ink/85"}`}>
          <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-leaf-400" />
          {i}
        </li>
      ))}
    </ul>
  );
}

/** "Let's Build Together"-style full-width call to action. */
export function CtaBand({ title, body, cta, href, image }: { title: ReactNode; body: string; cta: string; href: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image src={image} alt="" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-forest-900/80" />
      <div className="mx-auto max-w-7xl px-6 py-24 text-center text-white md:py-32">
        <h2 className="headline mx-auto max-w-3xl text-4xl md:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{body}</p>
        <div className="mt-10">
          <Button href={href}>{cta}</Button>
        </div>
      </div>
    </section>
  );
}
