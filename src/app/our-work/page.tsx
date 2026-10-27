import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { Bullets, CtaBand, Eyebrow, PageHero } from "@/components/ui";
import { districts, featuredWork, industries } from "@/lib/site";

export const metadata: Metadata = { title: "Our Work" };

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Solar and lighting infrastructure, <strong>built to last.</strong>
          </>
        }
        intro="We take pride in executing solar and lighting infrastructure projects across multiple districts in Bihar — with quality, timely delivery and strong on-ground execution."
        image="/images/rooftop.jpeg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Eyebrow>Featured Projects</Eyebrow>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((w, i) => (
            <article key={w.title} className={`group relative overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2 min-h-[520px]" : "min-h-[250px]"}`}>
              <Image src={w.image} alt={w.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-lime-300">{w.place}</p>
                <h3 className={`mt-1 font-bold ${i === 0 ? "text-3xl" : "text-xl"}`}>{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="industries" className="bg-mist">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>Industries</Eyebrow>
          <h2 className="headline mt-6 max-w-3xl text-4xl md:text-5xl">
            Solar for every <strong>sector.</strong>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind.title} className="group relative aspect-[4/5] overflow-hidden bg-forest-900">
                <Image src={ind.image} alt={ind.title} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent" />
                <p className="absolute bottom-0 p-5 text-lg font-bold text-white">{ind.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="districts" className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-3">
        <div>
          <Eyebrow>Where We&apos;ve Built</Eyebrow>
          <h2 className="headline mt-6 text-4xl">
            Districts of <strong>Bihar.</strong>
          </h2>
          <ul className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {districts.map((d, i) => (
              <li key={d} className="flex items-baseline justify-between py-4 text-xl font-semibold">
                {d}
                <span className="text-sm text-leaf-500">0{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf-500">What we delivered</p>
          <div className="mt-6">
            <Bullets
              items={[
                "Large-scale solar street light installations",
                "High mast and outdoor lighting systems",
                "Reliable solar infrastructure for public and private sectors",
                "Fast execution with high deployment capacity",
              ]}
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf-500">Our commitment</p>
          <div className="mt-6">
            <Bullets items={["Quality workmanship", "Timely completion", "Transparent execution", "Strong after-sales service"]} />
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Have a project in <strong>mind?</strong>
          </>
        }
        body="From a single rooftop to thousands of street lights, our team is ready to survey, design and deliver."
        cta="Start a Conversation"
        href="/contact"
        image="/images/high-mast.jpeg"
      />
      <ContactSection />
    </>
  );
}
