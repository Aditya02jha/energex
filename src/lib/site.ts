// All copy is sourced from the original energex.co.in pages (see docs/energex-site-content.md).

export const contact = {
  phone: "+91 70707 00465",
  phoneHref: "tel:+917070700465",
  whatsappNumber: "917070700465",
  email: "energex.co.in@gmail.com",
  address: "P.C Colony, Kankarbagh, Patna – 800020, Bihar",
  instagram: "https://www.instagram.com/energex.bihar/",
};

export const tagline = "We Don't Just Install Solar — We Deliver Long-Term Reliability";

export type NavGroup = { title: string; links: { label: string; href: string }[] };
export type NavItem = { label: string; href: string; groups?: NavGroup[]; blurb?: string };

export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    blurb: "An execution-driven solar and lighting company based in Bihar.",
    groups: [
      {
        title: "Company",
        links: [
          { label: "Who We Are", href: "/about" },
          { label: "Mission", href: "/about#mission" },
          { label: "Why ENERGEX", href: "/about#why" },
          { label: "Clients & Partners", href: "/about#partners" },
        ],
      },
    ],
  },
  {
    label: "Our Work",
    href: "/our-work",
    blurb: "40,000+ solar street lights and counting, across districts of Bihar.",
    groups: [
      {
        title: "Industries",
        links: [
          { label: "Cold Storage", href: "/our-work#industries" },
          { label: "Flour & Rice Mills", href: "/our-work#industries" },
          { label: "Hotels & Hospitals", href: "/our-work#industries" },
          { label: "Schools & Apartments", href: "/our-work#industries" },
          { label: "Factories", href: "/our-work#industries" },
        ],
      },
      {
        title: "Districts",
        links: [
          { label: "Darbhanga", href: "/our-work#districts" },
          { label: "Madhubani", href: "/our-work#districts" },
          { label: "Purnea", href: "/our-work#districts" },
          { label: "Saran", href: "/our-work#districts" },
          { label: "Jehanabad", href: "/our-work#districts" },
          { label: "East Champaran", href: "/our-work#districts" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    blurb: "Solar and lighting infrastructure for every scale.",
    groups: [
      {
        title: "Solar",
        links: [
          { label: "Residential Solar", href: "/solutions#residential" },
          { label: "Commercial Solar", href: "/solutions#commercial" },
          { label: "Industrial Solar", href: "/solutions#industrial" },
          { label: "Government Projects", href: "/solutions#government" },
          { label: "Rural Energy", href: "/solutions#rural" },
        ],
      },
      {
        title: "Lighting",
        links: [
          { label: "High Mast Installation", href: "/solutions#lighting" },
          { label: "Solar Street Lights", href: "/solutions#lighting" },
          { label: "LED Industrial Lighting", href: "/solutions#lighting" },
          { label: "Smart Lighting Automation", href: "/solutions#lighting" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    blurb: "Design → Supply → Installation → Maintenance.",
    groups: [
      {
        title: "Services",
        links: [
          { label: "PM Surya Ghar Yojana", href: "/pm-surya-ghar" },
          { label: "Hybrid & Battery Backup", href: "/services#catalogue" },
          { label: "Solar VFD", href: "/services#catalogue" },
          { label: "Annual Maintenance (AMC)", href: "/services#catalogue" },
          { label: "Our Process", href: "/services#process" },
        ],
      },
    ],
  },
  { label: "Execution Partner", href: "/execution-partner" },
  { label: "PM Surya Ghar", href: "/pm-surya-ghar" },
];

export const stats = [
  { value: "40,000+", label: "Solar street lights installed in the last year" },
  { value: "6+", label: "Districts of Bihar served" },
  { value: "₹78,000", label: "Max subsidy under PM Surya Ghar Yojana" },
  { value: "25+ yrs", label: "Rated lifespan of our solar systems" },
];

export const pillars = [
  {
    title: "Rooftop Solar",
    image: "/images/rooftop.jpeg",
    points: ["Residential & Commercial Solar Installation", "PM Surya Ghar Yojana", "Subsidy & Loan Support"],
    href: "/solutions#residential",
  },
  {
    title: "High Mast & Lighting",
    image: "/images/high-mast.jpeg",
    points: ["High Mast Installation", "Solar Street Lights", "LED Industrial Lighting", "Smart Lighting Automation"],
    href: "/solutions#lighting",
  },
  {
    title: "Execution & Services",
    image: "/images/ind-factories.png",
    points: ["Procurement", "Installation", "Commissioning", "After-Sales Service"],
    href: "/execution-partner",
  },
];

export const featuredWork = [
  { title: "Solar Street Light Programme", place: "Darbhanga, Bihar", image: "/images/street-light.jpeg" },
  { title: "Industrial Rooftop Solar", place: "Bihar", image: "/images/rooftop.jpeg" },
  { title: "Cold Storage Solar", place: "Madhubani, Bihar", image: "/images/ind-cold-storage.png" },
  { title: "High Mast Lighting", place: "Purnea, Bihar", image: "/images/high-mast.jpeg" },
  { title: "Rice Mill Solar", place: "Saran, Bihar", image: "/images/ind-rice-mill.png" },
];

export const solutions = [
  {
    id: "residential",
    title: "Residential Solar",
    image: "/images/ind-apartments.png",
    body: "Residential Solar helps homeowners generate clean energy from their own rooftops while reducing monthly electricity bills. With a suitable rooftop solar system, you can enjoy long-term savings and a reliable source of renewable energy. ENERGEX provides quality solar products, professional installation, and support with subsidy, loan and EMI options for eligible residential consumers.",
  },
  {
    id: "commercial",
    title: "Commercial Solar",
    image: "/images/commercial.jpeg",
    body: "Commercial Solar helps businesses generate their own clean energy and reduce electricity costs. It is suitable for commercial spaces such as warehouses, hotels, hospitals, shops and other business establishments. ENERGEX provides quality solar products, professional installation, and reliable post-installation support.",
  },
  {
    id: "industrial",
    title: "Industrial Solar",
    image: "/images/rooftop.jpeg",
    body: "Industrial Solar helps factories, manufacturing units, warehouses and other large facilities reduce electricity costs through rooftop solar. ENERGEX provides end-to-end support including system design, professional installation, commissioning and after-sales service, tailored to industrial energy requirements.",
  },
  {
    id: "government",
    title: "Government Projects",
    image: "/images/street-light.jpeg",
    body: "ENERGEX provides reliable solar installation solutions for government projects, helping institutions adopt clean and efficient energy. From project planning and professional installation to testing, commissioning and support, we deliver quality solutions tailored to project requirements.",
  },
  {
    id: "rural",
    title: "Rural Energy Solutions",
    image: "/images/rural-energy.jpeg",
    body: "ENERGEX is developing practical solar solutions for rural energy needs, including Portable Solar, Small Shop Kits, Village Energy Boxes, Solar DC Products and Home Backup solutions — designed to make solar energy more accessible for rural homes and small businesses.",
  },
];

export const serviceCatalogue = [
  { title: "Residential Solar", image: "/images/ind-apartments.png" },
  { title: "Commercial Solar", image: "/images/commercial.jpeg" },
  { title: "Industrial Solar", image: "/images/industrial.jpeg" },
  { title: "Cold Storage Solutions", image: "/images/cold-storage.jpeg" },
  { title: "Future Rural Energy", image: "/images/rural-energy.jpeg" },
  { title: "Solar VFD", image: "/images/solar-vfd.png" },
  { title: "Hybrid Systems", image: "/images/hybrid.jpeg" },
  { title: "Battery Backup", image: "/images/battery.jpeg" },
  { title: "Annual Maintenance (AMC)", image: "/images/amc.webp" },
  { title: "Solar Street Lights", image: "/images/street-light.jpeg" },
  { title: "Government Projects", image: "/images/high-mast.jpeg" },
  { title: "Grid Layout", image: "/images/ind-hospitals.png" },
];

export const process = [
  { step: "01", title: "Site Survey", body: "Site survey and feasibility analysis of your roof, load and electricity usage." },
  { step: "02", title: "System Design", body: "A customised system design sized to your consumption and budget." },
  { step: "03", title: "Installation", body: "Professional installation by trained, in-house experts." },
  { step: "04", title: "Net Meter & Subsidy", body: "Net meter application, approval, and government subsidy documentation." },
  { step: "05", title: "After-Sales Service", body: "Dedicated service supervisors and long-term maintenance support." },
];

export const whyUs = [
  "High-quality, efficient systems",
  "No compromise on quality",
  "Professional installation team",
  "Immediate response on complaints",
  "Transparent pricing – no hidden charges",
  "Strong after-sales support",
];

export const industries = [
  { title: "Cold Storage", image: "/images/ind-cold-storage.png" },
  { title: "Flour Mill", image: "/images/ind-flour-mill.png" },
  { title: "Rice Mill", image: "/images/ind-rice-mill.png" },
  { title: "Hotels", image: "/images/ind-hotels.png" },
  { title: "Hospitals", image: "/images/ind-hospitals.png" },
  { title: "Schools", image: "/images/ind-schools.png" },
  { title: "Apartments", image: "/images/ind-apartments.png" },
  { title: "Factories", image: "/images/ind-factories.png" },
];

export const districts = ["Darbhanga", "Madhubani", "Purnea", "Saran", "Jehanabad", "East Champaran"];

export const partners = ["Bondada Engineers", "Syska LED", "Amit Pomeg", "Visual Tech"];
