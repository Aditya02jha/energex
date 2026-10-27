import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { Bullets, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Execution Partner" };

const provide = [
  { title: "Skilled Manpower", body: "Skilled and trained manpower for on-site execution." },
  { title: "Fast Deployment", body: "Fast deployment and timely project completion." },
  { title: "Accurate Reporting", body: "Accurate reporting and project tracking." },
  { title: "Service & Coordination", body: "Strong service support and coordination." },
];

export default function ExecutionPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Execution Partner"
        title={
          <>
            Speed, precision <strong>and accountability.</strong>
          </>
        }
        intro="ENERGEX is a reliable execution partner for solar and infrastructure projects, delivering high-quality on-ground support across Bihar."
        image="/images/street-light.jpeg"
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
        <div className="space-y-6 text-lg text-stone">
          <Eyebrow>Execution Partner for Solar &amp; Infrastructure</Eyebrow>
          <h2 className="headline text-4xl text-ink md:text-5xl">
            From start to finish, <strong>on the ground.</strong>
          </h2>
          <p>
            We collaborate with leading companies, vendors, and contractors to ensure smooth project execution from start to finish. With a strong
            field presence across Bihar and a highly trained workforce, we specialise in large-scale deployments while maintaining strict quality and
            safety standards.
          </p>
        </div>
        <div className="bg-mist p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf-500">Who we work with</p>
          <div className="mt-6 text-lg">
            <Bullets items={["Solar EPC companies and vendors", "Infrastructure and engineering firms", "Government contractors and project agencies"]} />
          </div>
        </div>
      </section>

      <section className="bg-forest-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow light>What We Provide</Eyebrow>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {provide.map((p, i) => (
              <div key={p.title} className="bg-forest-950 p-8">
                <p className="text-sm font-bold text-lime-300">0{i + 1}</p>
                <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-white/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src="/images/ind-factories.png" alt="Industrial facility" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <Eyebrow>Our Strength</Eyebrow>
          <h2 className="headline mt-6 text-4xl md:text-5xl">
            Execution <strong>excellence.</strong>
          </h2>
          <p className="mt-6 text-lg text-stone">
            Disciplined operations, an experienced team, and a commitment to timelines make us a dependable partner for projects of any scale. We
            don&apos;t just support projects — we ensure they are executed efficiently, professionally, and successfully.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
