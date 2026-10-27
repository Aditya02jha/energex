import { PageHero } from "./ui";

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };

export default function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={<strong>{title}</strong>} intro={intro} image="/images/rooftop.jpeg" />
      <article className="mx-auto max-w-3xl px-6 py-20">
        {sections.map((s) => (
          <section key={s.heading} className="mb-12">
            <h2 className="text-2xl font-bold text-forest-800">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-stone">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-4 list-disc space-y-2 pl-6 text-stone marker:text-leaf-400">
                {s.list.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </>
  );
}
