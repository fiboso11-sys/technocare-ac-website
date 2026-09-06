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
    title: "Clear service approach",
    description:
      "The work starts with the actual requirement — installation, repair, maintenance, or cleaning — rather than a generic pitch.",
  },
  {
    title: "Practical AC & HVAC solutions",
    description:
      "Recommendations stay focused on restoring or installing cooling equipment so it can be used as intended.",
  },
  {
    title: "Installation, repair and maintenance support",
    description:
      "TECHNO CARE covers the core AC and HVAC jobs customers typically need, including duct and vent work.",
  },
  {
    title: "Customer-focused communication",
    description:
      "Findings and next steps are explained in plain language so you can decide on the work with a clear picture.",
  },
];

export const acHighlights = [
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
    title: "Maintenance",
    description:
      "Scheduled servicing to keep systems cleaner, more reliable, and ready for regular use.",
  },
  {
    title: "Cleaning",
    description:
      "Cleaning of AC equipment and related airflow paths to support better performance and indoor comfort.",
  },
] as const;

export const aboutContent = {
  whoWeAre:
    "TECHNO CARE is an air-conditioning and HVAC service business based in Nolambur, Chennai. The company provides installation, repair, maintenance, and cleaning services for AC and HVAC systems across Chennai and nearby areas.",
  whatWeDo:
    "The work covers split and other air-conditioning systems, portable AC service, HVAC system repair and maintenance, and HVAC duct and vent installation, repair, and cleaning. Each request is treated as a technical service job: understand the requirement, assess the equipment, and complete the agreed work.",
  approach:
    "Service begins with the customer’s requirement. That may be a new installation, a system that has stopped cooling, routine servicing, or cleaning. TECHNO CARE discusses the job, assesses what is needed, and proceeds with the recommended work once it is agreed.",
} as const;
