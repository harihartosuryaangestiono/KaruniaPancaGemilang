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
      "Processing wood materials through controlled operations to support consistent product quality and reliable supply.",
    href: "/capabilities#wood-processing",
    image:
      "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1400&auto=format&fit=crop",
    badge: "Processing Operations",
  },
  {
    id: "02",
    title: "Plywood & Veneer",
    headline: "Engineered Wood Portfolio",
    description:
      "Providing plywood and veneer products for industrial, commercial, and construction requirements.",
    href: "/products",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
    badge: "Product Portfolio",
  },
  {
    id: "03",
    title: "Transportation & Freight",
    headline: "Heavy-Duty Supply Logistics",
    description:
      "Heavy-duty transportation supporting the distribution of products and movement of operational materials.",
    href: "/transportation",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1400&auto=format&fit=crop",
    badge: "KPG Freight Services",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "plywood",
    title: "Plywood",
    headline: "Reliable Plywood Solutions",
    description:
      "Reliable plywood products designed to support various industrial, commercial, and construction requirements.",
    href: "/products/plywood",
    features: [
      "High structural stability & bonding integrity",
      "Consistent thickness & surface finish",
      "Available for commercial & industrial trade",
      "Supported by KPG freight delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "veneer",
    title: "Veneer",
    headline: "Processed Wood Materials",
    description:
      "Quality veneer materials processed to support plywood manufacturing and industrial applications.",
    href: "/products/veneer",
    features: [
      "Processed from selected timber stock",
      "Consistent thickness & smooth peel quality",
      "Ideal for plywood core & face layer manufacturing",
      "Reliable supply for industrial manufacturing plants",
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
      "Efficient wood processing operations supporting consistent product output.",
    icon: "Trees",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "veneer-production",
    title: "Veneer Production",
    description:
      "Processing wood materials into veneer for plywood and industrial applications.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "plywood-supply",
    title: "Plywood Supply",
    description:
      "Reliable plywood sourcing and supply for business and industrial requirements.",
    icon: "Boxes",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "material-handling",
    title: "Material Handling",
    description:
      "Systematic warehousing, timber sorting, and moisture protection prior to dispatch.",
    icon: "Workflow",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "transportation",
    title: "Transportation",
    description:
      "Heavy-duty transportation supporting product distribution and material delivery.",
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "logistics-support",
    title: "Logistics Support",
    description:
      "Integrated transportation support connecting products, materials, and operational needs.",
    icon: "Route",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },
];

export const WHY_KPG_VALUES = [
  {
    number: "01",
    title: "Quality Focus",
    description:
      "We prioritize product quality and consistency throughout our operations.",
  },
  {
    number: "02",
    title: "Reliable Supply",
    description:
      "We support customers with dependable product and material supply.",
  },
  {
    number: "03",
    title: "Operational Efficiency",
    description:
      "We continuously focus on efficient processes and reliable execution.",
  },
  {
    number: "04",
    title: "Integrated Support",
    description:
      "Our wood products and transportation capabilities allow us to support broader operational requirements.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Material Sourcing",
    description: "Carefully selected raw wood materials for initial processing.",
  },
  {
    step: "02",
    title: "Veneer & Processing",
    description: "Precision veneer peeling and plywood manufacturing operations.",
  },
  {
    step: "03",
    title: "Quality Control",
    description: "Inspection for dimensional consistency and bonding strength.",
  },
  {
    step: "04",
    title: "Product Storage",
    description: "Systematic warehousing and inventory management.",
  },
  {
    step: "05",
    title: "Transportation",
    description: "On-time delivery via KPG heavy-duty cargo transportation fleet.",
  },
];

export const PRODUCT_APPLICATIONS = [
  {
    title: "Industrial Manufacturing",
    description: "Raw materials & veneer supply for factory production lines.",
  },
  {
    title: "Construction",
    description: "Structural & formwork plywood supply for building projects.",
  },
  {
    title: "Furniture",
    description: "Quality veneer & wood sheets for furniture manufacturing.",
  },
  {
    title: "Wood Products",
    description: "Consistent timber components for industrial processors.",
  },
  {
    title: "Distribution",
    description: "Wholesale plywood trading and distribution channels.",
  },
  {
    title: "Commercial Logistics",
    description: "Reliable material freight & heavy cargo transport.",
  },
];
