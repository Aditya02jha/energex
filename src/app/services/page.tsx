import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { Bullets, Button, Eyebrow, PageHero } from "@/components/ui";
import { process, serviceCatalogue } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Design. Supply. Install. <strong>Maintain.</strong>
          </>
        }
        intro="A complete end-to-end service — from site survey and system design to net-metering, subsidy processing and long-term maintenance."
        image="/images/industrial.jpeg"
      />

      <section id="catalogue" className="mx-auto max-w-7xl px-6 py-24">
        <Eyebrow>Service Catalogue</Eyebrow>
        <h2 className="headline mt-6 max-w-3xl text-4xl md:text-5xl">
          Everything you need to <strong>go solar.</strong>
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {serviceCatalogue.map((s) => (
            <div key={s.title} className="group relative aspect-square overflow-hidden bg-forest-900">
              <Image src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
              <p className="absolute bottom-0 p-5 text-lg font-bold text-white">{s.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
          <div>
            <Eyebrow>Key Benefits</Eyebrow>
            <h2 className="headline mt-6 text-4xl">
              Savings that last <strong>25+ years.</strong>
            </h2>
            <div className="mt-8">
              <Bullets
                items={[
                  "Significant reduction in electricity bills",
                  "Government subsidy benefits up to ₹78,000",
                  "Long-lasting performance with 25+ years lifespan",
                  "Low maintenance and high efficiency systems",
                  "Environment-friendly and sustainable energy source",
                ]}
              />
            </div>
          </div>
          <div id="after-sales" className="scroll-mt-28">
            <Eyebrow>After-Sales Service</Eyebrow>
            <h2 className="headline mt-6 text-4xl">
              Service is <strong>our strength.</strong>
            </h2>
            <div className="mt-8">
              <Bullets
                items={[
                  "Dedicated service supervisors",
                  "Fast complaint resolution",
                  "Long-term maintenance support",
                  "Annual Maintenance Contracts (AMC)",
                ]}
              />
            </div>
            <div className="mt-10">
              <Button href="/pm-surya-ghar">Explore PM Surya Ghar</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24">
        <Eyebrow>Our Process</Eyebrow>
        <h2 className="headline mt-6 text-4xl md:text-5xl">
          Five steps to <strong>solar.</strong>
        </h2>
        <ol className="relative mt-14 space-y-0 border-l-2 border-leaf-400/40 pl-10">
          {process.map((p) => (
            <li key={p.step} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[3.05rem] flex h-8 w-8 items-center justify-center bg-forest-700 text-xs font-bold text-white">{p.step}</span>
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 max-w-2xl text-stone">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <ContactSection />
    </>
  );
}
