import type { ProcessStep, TrustItem } from "@/types/content";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Contact",
    description: "Call or send a service request with the issue or work you need.",
  },
  {
    step: "02",
    title: "Discuss Requirement",
    description: "TECHNO CARE reviews the requirement so the next step is clear.",
  },
  {
    step: "03",
    title: "Service Assessment",
    description: "The system or installation need is assessed before work is recommended.",
  },
  {
    step: "04",
    title: "Recommended Work",
    description: "You receive a straightforward recommendation based on what is required.",
  },
  {
    step: "05",
    title: "Service / Installation",
    description: "Agreed repair, maintenance, cleaning, or installation work is carried out.",
  },
];

export const whyChooseItems: TrustItem[] = [
  {
    title: "Multi-Brand Choice",
    description:
      "Sales and service support across multiple AC brands, including Panasonic, IFB, Daikin, O General and Mitsubishi Electric.",
  },
  {
    title: "Professional Installation",
    description:
      "Careful placement, connections and handover so a new AC is ready for everyday use.",
  },
  {
    title: "Service & Repair",
    description:
      "Practical fault-finding and repair when cooling, noise, leaks or start-up problems appear.",
  },
  {
    title: "Preventive Maintenance / AMC",
    description:
      "Scheduled servicing and AMC options that help keep systems cleaner and more dependable.",
  },
  {
    title: "Local Chennai Support",
    description:
      "Based in Nolambur, Chennai — clear communication and local service across Chennai and nearby areas.",
  },
];

export const acHighlights = [
  {
    title: "Sales & Supply",
    description:
      "Multi-brand AC sales for residential and commercial cooling needs, with installation and after-sales support.",
  },
  {
    title: "Installation",
    description:
      "New air-conditioning equipment installed with attention to placement, connections, and a working handover.",
  },
  {
    title: "Repair",
    description:
      "Fault finding and repair when a unit is not cooling, leaking, noisy, or failing to run as it should.",
  },
  {
    title: "Maintenance & AMC",
    description:
      "Scheduled servicing and AMC options to keep systems cleaner, more reliable, and ready for regular use.",
  },
  {
    title: "Cleaning & Refurbishing",
    description:
      "Cleaning of AC equipment and refurbishing support when restore-over-replace is the practical path.",
  },
] as const;

export const aboutContent = {
  whoWeAre:
    "TECHNO CARE is an aircondition authorised dealer for sales and service based in Nolambur, Chennai. The business is also a multi-brand AC reseller and service provider covering AC sales, installation, service, repair, AMC, and refurbishing across Chennai and nearby areas.",
  whatWeDo:
    "TECHNO CARE provides multi-brand AC sales and service, supporting brands including Panasonic, IFB, Daikin, O General and Mitsubishi Electric. Work also covers portable AC support, HVAC system repair and maintenance, and HVAC duct and vent installation, repair, and cleaning where needed.",
  approach:
    "Service begins with the customer’s requirement. That may be buying a new AC, a new installation, a system that has stopped cooling, routine servicing, AMC, or refurbishing. TECHNO CARE discusses the job, assesses what is needed, and proceeds with the recommended work once it is agreed.",
  brandsIntro:
    "TECHNO CARE provides sales and service support across multiple AC brands. Brand coverage highlighted on this site includes Panasonic, IFB, Daikin, O General and Mitsubishi Electric.",
} as const;

/** Lead form service choices (labels for customers; values map to service slugs). */
export const leadServiceOptions = [
  { value: "ac-sales", label: "Buy New AC" },
  { value: "ac-installation", label: "AC Installation" },
  { value: "ac-repair", label: "AC Repair" },
  { value: "ac-maintenance", label: "AC Service / Maintenance" },
  { value: "ac-cleaning", label: "AC Cleaning" },
  { value: "ac-amc", label: "AMC" },
  { value: "ac-refurbishing", label: "AC Refurbishing" },
  { value: "hvac-system-repair", label: "HVAC" },
  { value: "duct-vent-cleaning", label: "Duct & Vent" },
  { value: "other", label: "Other" },
] as const;

/** Homepage service presentation matching the reference concept. */
export const homepageServiceCards = [
  {
    title: "AC Sales & Supply",
    description: "Multi-brand residential and commercial AC supply.",
    href: "/services/ac-sales",
    icon: "snowflake" as const,
  },
  {
    title: "AC Installation",
    description: "Professional fitting and working handover.",
    href: "/services/ac-installation",
    icon: "snowflake" as const,
  },
  {
    title: "AC Repair",
    description: "Fault finding when cooling is not right.",
    href: "/services/ac-repair",
    icon: "wrench" as const,
  },
  {
    title: "AC Maintenance & Servicing",
    description: "Scheduled servicing for reliable cooling.",
    href: "/services/ac-maintenance",
    icon: "clipboardCheck" as const,
  },
  {
    title: "AC Cleaning",
    description: "Cleaning for better airflow and everyday use.",
    href: "/services/ac-cleaning",
    icon: "sparkles" as const,
  },
  {
    title: "AC Refurbishing",
    description: "Inspect, repair and restore serviceable units.",
    href: "/services/ac-refurbishing",
    icon: "settings" as const,
  },
  {
    title: "AMC",
    description: "Annual maintenance for homes and premises.",
    href: "/services/ac-amc",
    icon: "shield" as const,
  },
  {
    title: "HVAC Services",
    description: "System-level HVAC repair and maintenance.",
    href: "/services#hvac",
    icon: "airVent" as const,
  },
  {
    title: "Duct & Vent Services",
    description: "Duct and vent installation, repair and cleaning.",
    href: "/services#duct",
    icon: "pipe" as const,
  },
] as const;
