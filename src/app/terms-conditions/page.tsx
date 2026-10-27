import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

const sections: LegalSection[] = [
  {
    heading: "1. General Information",
    paragraphs: [
      "The content available on this website, including text, images, project details, and service descriptions, is provided for general informational and promotional purposes only.",
      "While we strive to maintain accuracy, ENERGEX reserves the right to modify, update, or remove content without prior notice.",
    ],
  },
  {
    heading: "2. Services & Consultations",
    list: [
      "All consultation requests made through the website, phone, or email are subject to availability and confirmation.",
      "Clients are expected to provide accurate site details, electricity requirements, and contact information to ensure proper system design and planning.",
      "Project timelines may vary depending on site conditions, system capacity, approvals, and material availability.",
    ],
  },
  {
    heading: "3. Solar System & Execution Disclaimer",
    list: [
      "All system designs, estimates, and performance projections are indicative and may vary based on site conditions, weather factors, and technical feasibility.",
      "Actual energy generation depends on sunlight availability, system maintenance, and environmental conditions.",
      "Final installation outcomes may vary due to structural limitations, technical adjustments, or client-approved changes.",
    ],
  },
  {
    heading: "4. Subsidy & Government Scheme Disclaimer",
    list: [
      "Subsidy benefits under schemes such as PM Surya Ghar Yojana are subject to government policies, eligibility criteria, and approvals.",
      "ENERGEX assists in the application process; however, approval, processing time, and disbursement are controlled by government authorities.",
      "We are not liable for delays, rejections, or changes in subsidy policies.",
    ],
  },
  {
    heading: "5. Payments & Project Engagement",
    list: [
      "Project confirmation is subject to approved quotation, system design, and advance payment as per company policy.",
      "Payment terms and milestones will be defined in the project agreement. Delayed payments may affect project timelines and execution.",
      "Any cancellations, revisions, or refunds (if applicable) will be governed by mutually agreed project terms.",
    ],
  },
  {
    heading: "6. Installation & Site Responsibilities",
    list: [
      "Clients must provide proper site access, structural readiness, and necessary approvals (if required) before installation.",
      "Any pre-existing electrical or structural issues must be disclosed prior to execution.",
      "ENERGEX will not be responsible for delays caused by third-party vendors or external agencies not engaged by our team.",
    ],
  },
  {
    heading: "7. After-Sales Service",
    list: [
      "ENERGEX provides after-sales support as per agreed service terms.",
      "Maintenance, servicing, and complaint resolution timelines may vary depending on location and service conditions.",
      "Warranty terms for equipment will be governed by respective manufacturers.",
    ],
  },
  {
    heading: "8. Intellectual Property",
    paragraphs: [
      "All website content, designs, images, and materials are the intellectual property of ENERGEX and may not be copied, reproduced, or used without prior written permission.",
    ],
  },
  {
    heading: "9. Privacy & Confidentiality",
    paragraphs: [
      "We respect client privacy and ensure that personal information and project details are handled securely. Project images and installation photos may be used for marketing or portfolio purposes unless the client requests confidentiality in writing.",
    ],
  },
  {
    heading: "10. Limitation of Liability",
    paragraphs: ["ENERGEX shall not be held liable for indirect losses, delays, or damages arising from:"],
    list: [
      "Unforeseen site conditions",
      "Weather or environmental factors",
      "Government approvals or delays",
      "Vendor or supply chain issues",
      "Changes in policies or regulations",
    ],
  },
  {
    heading: "11. Third-Party Vendors & Links",
    paragraphs: [
      "Projects may involve third-party suppliers or manufacturers. While we ensure quality standards, we are not responsible for independent commitments outside our agreed scope. This website may include external links for reference purposes; ENERGEX is not responsible for their content or accuracy.",
    ],
  },
  {
    heading: "12. Changes to Terms",
    paragraphs: ["ENERGEX reserves the right to update or modify these Terms & Conditions at any time. Continued use of the website implies acceptance of such updates."],
  },
  {
    heading: "13. Governing Law",
    paragraphs: ["These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of Patna, Bihar."],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="By accessing or using this website and our services, you agree to comply with the following Terms & Conditions."
      sections={sections}
    />
  );
}
