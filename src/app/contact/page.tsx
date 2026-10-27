import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <strong>talk.</strong>
          </>
        }
        intro="Call, WhatsApp or email us — or schedule an appointment and our team will get back to you."
        image="/images/rooftop.jpeg"
      />
      <ContactSection heading={false} />
      <section className="h-[420px] w-full">
        <iframe
          title="ENERGEX office location — Kankarbagh, Patna"
          src="https://www.google.com/maps?q=P.C.+Colony,+Kankarbagh,+Patna+800020&output=embed"
          className="h-full w-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
