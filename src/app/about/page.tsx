import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { Bullets, Eyebrow, PageHero } from "@/components/ui";
import { partners, stats, whyUs } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ENERGEX"
        title={
          <>
            Execution is <strong>everything.</strong>
          </>
        }
        intro="A fast-growing, execution-driven and service-focused company based in Bihar, delivering high-quality solar and lighting infrastructure."
        image="/images/high-mast.jpeg"
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6 text-lg text-stone">
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="headline text-4xl text-ink md:text-5xl">
            A reliable partner for <strong>government and private sector projects.</strong>
          </h2>
          <p>
            With a strong presence across multiple districts, ENERGEX has established itself as a reliable partner for both government and private
            sector projects. Our core strength lies in our ability to execute projects efficiently on the ground while maintaining the highest
            standards of quality and safety.
          </p>
          <p>
            From initial planning and procurement to installation, commissioning, and long-term maintenance, we provide complete end-to-end
            solutions tailored to meet diverse energy and lighting needs.
          </p>
          <p>
            Our team of trained professionals ensures disciplined operations, timely project delivery, and seamless coordination at every stage.
            With a high-speed deployment capacity and a commitment to excellence, we handle projects of all scales — residential, commercial, and
            large infrastructure developments.
          </p>
        </div>
        <div className="relative min-h-[420px] lg:col-span-5">
          <Image src="/images/street-light.jpeg" alt="Solar street lights installed along a road" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          <div className="absolute -bottom-8 -left-4 brand-gradient p-8 text-white md:-left-10">
            <p className="text-5xl font-extrabold">40,000+</p>
            <p className="mt-1 max-w-[14rem] text-sm font-semibold">solar street lights completed in the last year under government projects</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-mist">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="py-12 pr-6">
              <p className="text-4xl font-extrabold text-forest-700">{s.value}</p>
              <p className="mt-3 text-sm font-medium text-stone">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mission" className="bg-forest-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
          <div>
            <Eyebrow light>Our Mission</Eyebrow>
            <p className="headline mt-6 text-3xl md:text-5xl">
              A <strong>cleaner, greener,</strong> and more energy-efficient future — accessible, reliable and sustainable for everyone.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">We are known for</p>
            <div className="mt-6">
              <Bullets
                light
                items={[
                  "Strong field execution with real on-ground expertise",
                  "Disciplined and process-driven operations",
                  "High-speed deployment and timely project completion",
                  "Long-term service commitment and reliable after-sales support",
                ]}
              />
            </div>
            <p className="mt-10 border-l-4 border-leaf-400 pl-6 text-xl font-light italic text-white/90">
              &ldquo;We don&apos;t just install systems — we build long-term relationships based on trust, performance, and service.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-24">
        <Eyebrow>Why ENERGEX</Eyebrow>
        <h2 className="headline mt-6 text-4xl md:text-5xl">
          No compromise on <strong>quality.</strong>
        </h2>
        <div className="mt-12 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <div key={w} className="bg-white p-8">
              <p className="text-sm font-bold text-leaf-500">0{i + 1}</p>
              <p className="mt-4 text-xl font-bold">{w}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="bg-mist">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>Clients &amp; Partners</Eyebrow>
          <h2 className="headline mt-6 text-4xl md:text-5xl">
            Trusted by <strong>industry leaders.</strong>
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-px bg-black/10 md:grid-cols-4">
            {partners.map((p) => (
              <li key={p} className="flex h-36 items-center justify-center bg-white px-4 text-center text-xl font-extrabold text-forest-800">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
