import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { Bullets, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "PM Surya Ghar Yojana" };

const steps = [
  { title: "Site Survey & Feasibility", body: "We inspect your rooftop and electricity usage to size the right system." },
  { title: "Customised System Design", body: "A design matched to your load, roof and budget." },
  { title: "Professional Installation", body: "Installation by trained experts using quality components." },
  { title: "Net Meter Application", body: "We file and follow up on the net meter application and approval." },
  { title: "Subsidy Processing", body: "Complete government subsidy documentation, handled for you." },
];

export default function PmSuryaGharPage() {
  return (
    <>
      <PageHero
        eyebrow="PM Surya Ghar Yojana"
        title={
          <>
            Bring solar power <strong>to your home.</strong>
          </>
        }
        intro="PM Surya Ghar Yojana helps eligible residential consumers adopt rooftop solar with government subsidy support — and ENERGEX handles the entire process."
        image="/images/ind-apartments.png"
      />

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf-500">Subsidy of up to</p>
          <p className="mt-2 text-7xl font-extrabold text-forest-700 md:text-8xl">₹78,000</p>
          <p className="mt-6 text-lg text-stone">
            Subsidy benefits are subject to government policy, eligibility and approvals. ENERGEX assists with the full application; approval and
            disbursement are handled by government authorities.
          </p>
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf-500">Key benefits</p>
            <div className="mt-5">
              <Bullets items={["Lower electricity bills", "Government subsidy support", "Bank loan & EMI options", "Clean and reliable solar energy"]} />
            </div>
          </div>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image src="/images/pm-surya-ghar-2.png" alt="PM Surya Ghar Yojana" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-forest-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow light>Complete End-to-End Service</Eyebrow>
          <h2 className="headline mt-6 max-w-3xl text-4xl md:text-5xl">
            We handle it all — <strong>you enjoy the savings.</strong>
          </h2>
          <ol className="mt-14 grid gap-px bg-white/10 md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-forest-900 p-8">
                <p className="text-4xl font-extrabold text-lime-300">0{i + 1}</p>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
