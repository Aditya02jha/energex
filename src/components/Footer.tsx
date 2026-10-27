import Image from "next/image";
import Link from "next/link";
import { contact, tagline } from "@/lib/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/our-work" },
      { label: "Execution Partner", href: "/execution-partner" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Residential Solar", href: "/solutions#residential" },
      { label: "Commercial Solar", href: "/solutions#commercial" },
      { label: "Industrial Solar", href: "/solutions#industrial" },
      { label: "High Mast & Lighting", href: "/solutions#lighting" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "PM Surya Ghar Yojana", href: "/pm-surya-ghar" },
      { label: "Service Catalogue", href: "/services#catalogue" },
      { label: "Our Process", href: "/services#process" },
      { label: "After-Sales & AMC", href: "/services#after-sales" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="h-1.5 brand-gradient" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="inline-block bg-white p-4">
              <Image src="/images/logo.png" alt="ENERGEX" width={500} height={292} className="h-16 w-auto" />
            </div>
            <p className="mt-6 max-w-sm text-lg font-light text-white/80">{tagline}</p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p>{contact.address}</p>
              <p>
                <a href={contact.phoneHref} className="hover:text-lime-300">{contact.phone}</a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-lime-300">{contact.email}</a>
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/80 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">Follow</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={contact.instagram} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ENERGEX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
