import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { contact } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

const sections: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    paragraphs: ["Personal information you voluntarily provide when you interact with our website or services, such as:"],
    list: ["Phone number", "Email address", "Address / site location", "Project requirements or electricity usage details"],
  },
  {
    heading: "Usage Information",
    paragraphs: ["We may collect non-personal information about your interaction with our website, including:"],
    list: ["IP address", "Browser type", "Device information", "Operating system", "Referring URLs", "Pages visited and usage patterns"],
  },
  {
    heading: "2. Use of Information",
    paragraphs: [
      "Provide services: respond to your inquiries, provide solar consultation and quotations, process installation requests, and assist with subsidy and documentation processes.",
      "Communication: share updates about your project, send service-related information, and inform you about offers, schemes (like PM Surya Ghar Yojana), and new services. You may opt out of promotional communication at any time.",
      "Analyze & improve: we analyze user behavior to improve our website, services, and customer experience. This may include the use of cookies and similar technologies.",
      "Legal compliance: we may use or disclose your information to comply with applicable laws, regulations, or legal processes, and to protect our legal rights.",
    ],
  },
  {
    heading: "3. Information Sharing",
    paragraphs: [
      "We may share your information with trusted partners such as installation teams, payment processors, hosting providers and analytics services. These parties are required to maintain confidentiality and use your data only for service-related purposes.",
      "In case of merger, acquisition, or business restructuring, your data may be transferred to the concerned entity. We may also disclose your information if required by law or to protect our rights, safety, or property.",
    ],
  },
  {
    heading: "4. Data Security",
    paragraphs: [
      "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "5. Third-Party Websites",
    paragraphs: [
      "Our website may contain links to third-party websites. ENERGEX is not responsible for their privacy practices. We recommend reviewing their privacy policies before sharing any information.",
    ],
  },
  {
    heading: "6. Children's Privacy",
    paragraphs: ["Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children."],
  },
  {
    heading: "7. Updates to This Privacy Policy",
    paragraphs: [
      "ENERGEX reserves the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting on the website. We encourage you to review this page periodically.",
    ],
  },
  {
    heading: "8. Contact Us",
    paragraphs: [`Phone: ${contact.phone} · Email: ${contact.email} · Website: www.energex.co.in`],
  },
  {
    heading: "Final Statement",
    paragraphs: ["By using our website or services, you acknowledge that you have read, understood, and agreed to this Privacy Policy."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How ENERGEX collects, uses, stores, and safeguards your personal information."
      sections={sections}
    />
  );
}
