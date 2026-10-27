"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/site";
import { Eyebrow } from "./ui";

// The old site's "Schedule the Appointment" form had no backend we can reuse, so submissions open
// WhatsApp with the details pre-filled — the channel ENERGEX already answers on.
export default function ContactSection({ heading = true }: { heading?: boolean }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "Hello ENERGEX, I'd like to schedule an appointment.",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      f.get("email") ? `Email: ${f.get("email")}` : "",
      f.get("interest") ? `Interested in: ${f.get("interest")}` : "",
      f.get("message") ? `Message: ${f.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  };

  const field = "w-full border-0 border-b-2 border-black/15 bg-transparent px-0 py-3 text-lg outline-none transition-colors placeholder:text-stone/70 focus:border-leaf-400";

  return (
    <section id="contact" className="bg-mist">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          {heading && <Eyebrow>Let&apos;s Talk</Eyebrow>}
          <h2 className="headline mt-6 text-4xl md:text-6xl">
            Schedule an <strong>appointment.</strong>
          </h2>
          <p className="mt-6 max-w-md text-lg text-stone">
            Tell us about your site and electricity needs. Our team will get back to you with a site survey and a transparent quotation.
          </p>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              { k: "Call Us", v: contact.phone, href: contact.phoneHref },
              { k: "WhatsApp Us", v: contact.phone, href: `https://wa.me/${contact.whatsappNumber}` },
              { k: "Email Us", v: contact.email, href: `mailto:${contact.email}` },
              { k: "Visit Us", v: contact.address },
            ].map((i) => (
              <div key={i.k} className="border-l-4 border-leaf-400 pl-4">
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-stone">{i.k}</dt>
                <dd className="mt-2 font-semibold text-ink">
                  {i.href ? (
                    <a href={i.href} className="hover:text-forest-600 break-words">
                      {i.v}
                    </a>
                  ) : (
                    i.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={onSubmit} className="bg-white p-8 shadow-[0_20px_60px_-20px_rgba(6,32,15,0.25)] md:p-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="sm:col-span-1">
              <span className="sr-only">Name</span>
              <input name="name" required placeholder="Name *" className={field} />
            </label>
            <label>
              <span className="sr-only">Phone number</span>
              <input name="phone" required type="tel" placeholder="Phone no. *" className={field} />
            </label>
            <label className="sm:col-span-2">
              <span className="sr-only">Email</span>
              <input name="email" type="email" placeholder="Email" className={field} />
            </label>
            <label className="sm:col-span-2">
              <span className="sr-only">Interested in</span>
              <select name="interest" defaultValue="" className={field}>
                <option value="">I&apos;m interested in…</option>
                <option>Residential Solar / PM Surya Ghar</option>
                <option>Commercial Solar</option>
                <option>Industrial Solar</option>
                <option>Solar Street Lights / High Mast</option>
                <option>Execution Partnership</option>
                <option>After-Sales / AMC</option>
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className="sr-only">Message</span>
              <textarea name="message" rows={4} placeholder="Message" className={field} />
            </label>
          </div>
          <button type="submit" className="mt-10 w-full bg-forest-700 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-leaf-500">
            Schedule Now
          </button>
          <p className="mt-4 text-center text-sm text-stone" aria-live="polite">
            {sent ? "Opening WhatsApp with your details — just hit send." : "Submitting opens WhatsApp with your details pre-filled."}
          </p>
        </form>
      </div>
    </section>
  );
}
