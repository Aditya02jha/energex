import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { Bullets, Eyebrow, PageHero } from "@/components/ui";
import { solutions } from "@/lib/site";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Clean energy for <strong>homes, business and government.</strong>
          </>
        }
        intro="Rooftop solar, rural energy and lighting infrastructure — each delivered end to end by the ENERGEX team."
        image="/images/ind-hotels.png"
      />

      <nav aria-label="Solutions" className="sticky top-20 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
        <ul className="no-scrollbar mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6">
          {[...solutions.map((s) => ({ id: s.id, title: s.title })), { id: "lighting", title: "Lighting & High Mast" }].map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="block whitespace-nowrap py-4 text-sm font-semibold text-stone hover:text-forest-700">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {solutions.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-36 ${i % 2 ? "bg-mist" : ""}`}>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className={`relative aspect-[3/2] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
              <Image src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-leaf-500">0{i + 1}</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight">{s.title}</h2>
              <p className="mt-6 text-lg text-stone">{s.body}</p>
            </div>
          </div>
        </section>
      ))}

      <section id="lighting" className="scroll-mt-36 bg-forest-950 text-white">
        <div className="relative h-[360px]">
          <Image src="/images/high-mast.jpeg" alt="Solar-powered high mast street lights on a highway" fill sizes="100vw" className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 to-transparent" />
        </div>
        <div className="mx-auto -mt-24 max-w-7xl px-6 pb-24">
          <div className="relative">
            <Eyebrow light>Lighting &amp; High Mast Solutions</Eyebrow>
            <h2 className="headline mt-6 max-w-3xl text-4xl md:text-6xl">
              Better visibility. <strong>Safer public spaces.</strong>
            </h2>
            <p className="mt-6 max-w-3xl text-lg text-white/80">
              Advanced and reliable lighting infrastructure for modern cities, industries, and public spaces — from highways and public areas to
              industrial zones and commercial complexes, built for durability, performance, and long-term reliability.
            </p>
          </div>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">Our key solutions</p>
              <div className="mt-6">
                <Bullets
                  light
                  items={[
                    "High Mast Installation for roads, highways, and large open areas",
                    "Solar Street Lighting for energy-efficient and eco-friendly illumination",
                    "LED Industrial Lighting for factories, warehouses, and commercial spaces",
                    "Smart & energy-efficient lighting systems for modern infrastructure",
                  ]}
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">Our scope of work</p>
              <div className="mt-6">
                <Bullets
                  light
                  items={[
                    "Procurement of high-quality materials and components",
                    "Supply and logistics management",
                    "Professional installation by skilled technicians",
                    "System commissioning and testing",
                    "Long-term maintenance and service support",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
