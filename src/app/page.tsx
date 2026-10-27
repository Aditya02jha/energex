import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import ContactSection from "@/components/ContactSection";
import { ArrowLink, Bullets, Button, CtaBand, Eyebrow } from "@/components/ui";
import { districts, featuredWork, partners, pillars, process, stats, whyUs } from "@/lib/site";

const mosaic = [
  { src: "/images/rooftop.jpeg", className: "col-span-2 row-span-2" },
  { src: "/images/street-light.jpeg", className: "" },
  { src: "/images/ind-cold-storage.png", className: "" },
  { src: "/images/high-mast.jpeg", className: "col-span-2" },
];

export default function Home() {
  return (
    <>
      {/* Hero: headline panel + photo mosaic */}
      <section className="relative overflow-hidden bg-forest-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-12 lg:py-24">
          <div className="flex flex-col justify-center lg:col-span-5">
            <Eyebrow light>Solar &amp; Lighting Infrastructure · Bihar</Eyebrow>
            <h1 className="headline mt-6 text-5xl md:text-7xl">
              Save energy. <strong>Protect the environment.</strong> Trust our service.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              Reduce your electricity bills with smart solar solutions. Avail up to <strong className="text-lime-300">₹78,000 subsidy</strong> under
              Pradhan Mantri Surya Ghar Yojana.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/our-work">See Our Work</Button>
              <Button href="/contact" variant="outline">
                Get a Free Site Survey
              </Button>
            </div>
          </div>
          <div className="grid h-[420px] grid-cols-4 grid-rows-3 gap-3 md:h-[560px] lg:col-span-7">
            {mosaic.map((m, i) => (
              <div key={m.src} className={`relative overflow-hidden ${m.className}`}>
                <Image src={m.src} alt="" fill priority={i === 0} sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
            <div className="col-span-2 flex flex-col justify-end brand-gradient p-5">
              <p className="text-4xl font-extrabold">40,000+</p>
              <p className="text-sm font-semibold text-white/90">solar street lights installed in the last year</p>
            </div>
            <div className="relative col-span-2 overflow-hidden">
              <Image src="/images/ind-flour-mill.png" alt="" fill sizes="(min-width: 1024px) 30vw, 45vw" className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
        <div className="h-1.5 brand-gradient" />
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="headline mt-6 text-4xl md:text-6xl">
            We don&apos;t just install solar. <strong>We deliver long-term reliability.</strong>
          </h2>
        </div>
        <div className="space-y-6 text-lg text-stone">
          <p>
            ENERGEX is a dynamic, execution-driven company delivering complete end-to-end solutions for solar energy and lighting infrastructure
            projects across Bihar — from planning and procurement to installation, commissioning, and maintenance.
          </p>
          <p>
            Whether it&apos;s residential, commercial, or large-scale government projects, we ensure timely delivery, transparent processes, and
            unmatched after-sales support.
          </p>
          <ArrowLink href="/about">More about ENERGEX</ArrowLink>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-black/10 bg-mist">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-12 pr-6 ${i > 0 ? "lg:border-l lg:border-black/10 lg:pl-8" : ""} ${i % 2 === 1 ? "border-l border-black/10 pl-6" : ""}`}>
              <p className="text-4xl font-extrabold text-forest-700 md:text-5xl">{s.value}</p>
              <p className="mt-3 text-sm font-medium text-stone">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-forest-900 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow light>Featured Work</Eyebrow>
              <h2 className="headline mt-6 max-w-3xl text-4xl md:text-6xl">
                Executed on the ground, <strong>across Bihar.</strong>
              </h2>
            </div>
            <ArrowLink href="/our-work" light>
              View all work
            </ArrowLink>
          </div>
          <div className="mt-14">
            <Carousel light label="Featured projects">
              {featuredWork.map((w) => (
                <article key={w.title} className="group relative h-[460px] w-[85%] shrink-0 snap-start overflow-hidden sm:w-[60%] lg:w-[42%]">
                  <Image src={w.image} alt={w.title} fill sizes="(min-width: 1024px) 42vw, 85vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className="text-sm font-semibold uppercase tracking-widest text-lime-300">{w.place}</p>
                    <h3 className="mt-2 text-2xl font-bold">{w.title}</h3>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="headline mt-6 max-w-3xl text-4xl md:text-6xl">
          Complete solutions: <strong>design → supply → install → maintain.</strong>
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Link key={p.title} href={p.href} className="group relative flex h-[520px] flex-col justify-end overflow-hidden text-white">
              <Image src={p.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-forest-950/10 transition-colors group-hover:via-forest-900/70" />
              <div className="relative p-8">
                <h3 className="text-3xl font-bold">{p.title}</h3>
                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-60 group-hover:opacity-100 group-focus-visible:max-h-60 group-focus-visible:opacity-100">
                  <Bullets items={p.points} light />
                </div>
                <span className="mt-6 inline-flex items-center gap-2 border-b-2 border-leaf-400 pb-0.5 font-bold">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PM Surya Ghar feature */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image src="/images/pm-surya-ghar.png" alt="PM Surya Ghar Yojana rooftop solar" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <Eyebrow>PM Surya Ghar Yojana</Eyebrow>
            <h2 className="headline mt-6 text-4xl md:text-5xl">
              Bring solar power home with <strong>up to ₹78,000 subsidy.</strong>
            </h2>
            <p className="mt-6 text-lg text-stone">
              We handle everything for eligible households — site survey, system design, installation, net-metering, and the complete subsidy
              paperwork — with bank loan and EMI options.
            </p>
            <div className="mt-8">
              <Bullets items={["Lower electricity bills", "Government subsidy support", "Bank loan & EMI options", "Clean and reliable solar energy"]} />
            </div>
            <div className="mt-10">
              <Button href="/pm-surya-ghar">Check Eligibility</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <Eyebrow>Our Process</Eyebrow>
        <h2 className="headline mt-6 max-w-3xl text-4xl md:text-6xl">
          How we <strong>work.</strong>
        </h2>
        <ol className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p) => (
            <li key={p.step} className="group bg-white p-8 transition-colors hover:bg-forest-900 hover:text-white">
              <p className="text-5xl font-extrabold text-leaf-400">{p.step}</p>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-stone group-hover:text-white/75">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why + partners */}
      <section className="bg-forest-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <Eyebrow light>Why ENERGEX</Eyebrow>
            <h2 className="headline mt-6 text-4xl md:text-5xl">
              Service is <strong>our strength.</strong>
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/75">
              Dedicated service supervisors, fast complaint resolution and long-term maintenance support — long after commissioning.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {whyUs.map((w) => (
                <div key={w} className="border-l-4 border-leaf-400 bg-white/5 p-5 font-semibold">
                  {w}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">We have worked with</p>
              <ul className="mt-6 grid grid-cols-2 gap-px bg-white/10">
                {partners.map((p) => (
                  <li key={p} className="flex h-28 items-center justify-center bg-forest-950 px-4 text-center text-xl font-bold text-white/90">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">Projects executed in</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {districts.map((d) => (
                  <li key={d} className="border border-white/20 px-4 py-2 text-sm font-semibold">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Let&apos;s power <strong>Bihar together.</strong>
          </>
        }
        body="EPC companies, contractors and government agencies rely on ENERGEX for skilled manpower, fast deployment and accurate reporting."
        cta="Become an Execution Partner"
        href="/execution-partner"
        image="/images/street-light.jpeg"
      />

      <ContactSection />
    </>
  );
}
