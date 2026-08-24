import { COMPANY_CONFIG } from "@/config/company";

export const COMPANY_INFO = COMPANY_CONFIG;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Transportation", href: "/transportation" },
  { label: "Contact", href: "/contact" },
];

export const BUSINESS_AREAS = [
  {
    id: "01",
    title: "Wood Processing",
    headline: "Controlled Manufacturing Operations",
    description:
      "Processing wood materials through controlled operations to support product supply requirements.",
    href: "/capabilities#wood-processing",
    image:
      "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1400&auto=format&fit=crop",
    badge: "Wood Processing",
  },
  {
    id: "02",
    title: "Plywood & Veneer",
    headline: "Product Supply & Trading",
    description:
      "Providing plywood and veneer products for industrial, commercial, and construction requirements.",
    href: "/products",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
    badge: "Plywood & Veneer",
  },
  {
    id: "03",
    title: "Transportation & Freight",
    headline: "Heavy Cargo Logistics Support",
    description:
      "Heavy-duty transportation supporting product distribution and industrial logistics.",
    href: "/transportation",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop",
    badge: "KPG Transportation",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "plywood",
    title: "Plywood",
    headline: "Plywood Supply & Trading",
    description:
      "Plywood products available to support various industrial, commercial, and construction requirements.",
    href: "/products/plywood",
    features: [
      "Suitable for construction, furniture, and packaging applications",
      "Available for commercial supply and trading contracts",
      "Product specifications available upon request",
      "Supported by KPG transportation & freight delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "veneer",
    title: "Veneer",
    headline: "Processed Wood Veneer",
    description:
      "Veneer materials processed to support plywood manufacturing and industrial wood applications.",
    href: "/products/veneer",
    features: [
      "Processed veneer sheets for core and face layer applications",
      "Suitable for plywood production and wood manufacturing plants",
      "Product specifications available upon request",
      "Supported by KPG freight logistics and delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1400&auto=format&fit=crop",
  },
];

export const CAPABILITIES_LIST = [
  {
    id: "wood-processing",
    title: "Wood Processing",
    description:
      "Wood processing operations supporting raw timber conversion into usable industrial components.",
    icon: "Trees",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "veneer-processing",
    title: "Veneer Processing",
    description:
      "Veneer peeling and processing operations to support plywood core and face layer production.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "plywood-supply",
    title: "Plywood Supply & Trading",
    description:
      "Plywood sourcing, inventory management, and trading for commercial clients.",
    icon: "Boxes",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "quality-inspection",
    title: "Quality & Inspection",
    description:
      "Operational verification and inspection procedures to support product consistency.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "material-handling",
    title: "Material Handling",
    description:
      "Systematic warehousing and timber sorting prior to logistics dispatch.",
    icon: "Workflow",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "transportation",
    title: "Transportation & Freight",
    description:
      "Heavy-duty cargo transportation fleet supporting product movement and delivery.",
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
  },
];

export const OUR_APPROACH = [
  {
    number: "01",
    title: "PRODUCT",
    subtitle: "Product Sourcing",
    description:
      "Understanding product and material requirements for industrial and commercial applications.",
  },
  {
    number: "02",
    title: "PROCESS",
    subtitle: "Operational Execution",
    description:
      "Consistent operational execution across wood processing, veneer processing, and plywood supply.",
  },
  {
    number: "03",
    title: "QUALITY",
    subtitle: "Process Consistency",
    description:
      "Focus on product and process consistency to meet client expectations.",
  },
  {
    number: "04",
    title: "DELIVERY",
    subtitle: "Freight Logistics",
    description:
      "Supporting product movement and cargo distribution through KPG Transportation.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Material Sourcing",
    description: "Raw wood materials prepared for processing operations.",
  },
  {
    step: "02",
    title: "Veneer Processing",
    description: "Veneer peeling and sheet preparation.",
  },
  {
    step: "03",
    title: "Quality Check",
    description: "Inspection procedures for dimensional consistency.",
  },
  {
    step: "04",
    title: "Storage & Handling",
    description: "Warehousing and inventory management.",
  },
  {
    step: "05",
    title: "Transportation",
    description: "Product delivery via KPG heavy-duty cargo fleet.",
  },
];

export const PRODUCT_APPLICATIONS = [
  {
    title: "Industrial Manufacturing",
    description: "Processed wood materials and veneer supply for industrial factory requirements.",
  },
  {
    title: "Construction",
    description: "Plywood products suitable for construction and structural framework needs.",
  },
  {
    title: "Furniture",
    description: "Veneer and plywood materials for furniture and cabinetry production.",
  },
  {
    title: "Packaging",
    description: "Plywood sheets for heavy-duty industrial packaging and crating.",
  },
  {
    title: "Commercial Applications",
    description: "Wood and plywood supply for commercial trading and distribution.",
  },
];
