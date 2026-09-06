import type { Service, ServiceCategory } from "@/types/content";

export const services: Service[] = [
  {
    id: "ac-installation",
    slug: "ac-installation",
    category: "ac",
    title: "AC Installation",
    shortTitle: "AC Installation",
    description:
      "Professional air-conditioning installation for homes and premises in Chennai and nearby areas.",
    longDescription:
      "TECHNO CARE installs air-conditioning systems after discussing the cooling requirement, the space, and the equipment to be fitted. The work covers positioning, mounting, connections, and a working handover so the system can be used as intended. Installation recommendations stay practical and are based on the job at hand.",
    icon: "snowflake",
    image: "/services/ac-installation.svg",
    imageAlt: "Illustration of air-conditioning installation work.",
    benefits: [
      "A planned installation rather than an improvised fit",
      "Clear discussion of what the job involves before work starts",
      "A system left ready for everyday use after handover",
    ],
    serviceIncludes: [
      "Discussion of cooling requirement and unit placement",
      "Installation of agreed indoor and outdoor equipment",
      "Required pipework, drainage, and electrical connections for the job",
      "Start-up check and basic operating guidance",
    ],
    commonReasons: [
      "A new room, home, or workplace that needs cooling",
      "Replacement of an older air-conditioner",
      "An existing unit that is poorly placed or no longer suitable",
    ],
    relatedServices: ["ac-maintenance", "ac-cleaning", "portable-ac-services"],
    seoTitle: "AC Installation in Chennai | TECHNO CARE",
    seoDescription:
      "AC installation in Chennai and nearby areas by TECHNO CARE. Practical fitting, commissioning, and handover for new or replacement air-conditioning systems.",
    featured: true,
    order: 1,
  },
  {
    id: "ac-repair",
    slug: "ac-repair",
    category: "ac",
    title: "AC Repair",
    shortTitle: "AC Repair",
    description:
      "Air-conditioning repair when a unit is not cooling, leaking, noisy, or failing to run properly.",
    longDescription:
      "When an air-conditioner is not performing as it should, TECHNO CARE focuses on identifying the issue and carrying out the agreed repair. Typical requests include weak cooling, water leaks, unusual noise, and units that stop or fail to start. The recommendation follows what the inspection shows, including when replacement is the more practical option.",
    icon: "wrench",
    image: "/services/ac-repair.svg",
    imageAlt: "Illustration of air-conditioning repair and diagnostics.",
    benefits: [
      "A clearer picture of why the unit is not working as expected",
      "Repair work based on the actual fault, not guesswork",
      "Straightforward advice if the unit is no longer worth repairing",
    ],
    serviceIncludes: [
      "Review of the reported fault",
      "Inspection of the air-conditioning system",
      "Agreed repair work",
      "A functional check after the repair",
    ],
    commonReasons: [
      "Warm air, weak airflow, or uneven cooling",
      "Water leaking from the indoor unit",
      "Unusual noise, odour, or vibration",
      "A unit that trips, freezes, or will not start",
    ],
    relatedServices: ["ac-maintenance", "ac-cleaning", "hvac-system-repair"],
    seoTitle: "AC Repair in Chennai | TECHNO CARE",
    seoDescription:
      "AC repair in Chennai by TECHNO CARE. Fault finding and repair for air-conditioners that are not cooling, leaking, noisy, or failing to start.",
    featured: true,
    order: 2,
  },
  {
    id: "ac-maintenance",
    slug: "ac-maintenance",
    category: "ac",
    title: "AC Maintenance & Servicing",
    shortTitle: "AC Maintenance",
    description:
      "Scheduled AC servicing to keep systems cleaner, more reliable, and ready for regular use.",
    longDescription:
      "Preventive maintenance helps air-conditioners run more consistently through the year. TECHNO CARE provides AC maintenance and servicing that focuses on inspection, cleaning, and checking the points that commonly cause poor performance if they are left unattended. Servicing is useful both as a routine visit and after a period of heavy use.",
    icon: "clipboardCheck",
    image: "/services/ac-maintenance.svg",
    imageAlt: "Illustration of air-conditioning maintenance and servicing.",
    benefits: [
      "More consistent cooling during regular use",
      "Fewer avoidable issues from blocked filters or neglected drainage",
      "A clearer view of the system’s condition after the visit",
    ],
    serviceIncludes: [
      "Inspection of the air-conditioning unit",
      "Filter and accessible-component cleaning as required",
      "Check of drainage and basic operating condition",
      "Notes on items that may need later attention",
    ],
    commonReasons: [
      "A system that has not been serviced for a long period",
      "Reduced airflow or weaker cooling over time",
      "Preparing equipment before a warmer season",
    ],
    relatedServices: ["ac-cleaning", "ac-repair", "hvac-system-maintenance"],
    seoTitle: "AC Maintenance in Chennai | TECHNO CARE",
    seoDescription:
      "AC maintenance and servicing in Chennai by TECHNO CARE. Scheduled inspection and cleaning to keep air-conditioners running more reliably.",
    featured: true,
    order: 3,
  },
  {
    id: "ac-cleaning",
    slug: "ac-cleaning",
    category: "ac",
    title: "AC Cleaning",
    shortTitle: "AC Cleaning",
    description:
      "Cleaning of air-conditioning units to support better airflow, hygiene, and day-to-day performance.",
    longDescription:
      "Dust, residue, and neglected filters can reduce airflow and affect how an air-conditioner feels in the room. TECHNO CARE provides AC cleaning as a focused service, covering the equipment that can reasonably be cleaned during a service visit. Cleaning is often requested on its own or as part of wider maintenance.",
    icon: "sparkles",
    image: "/services/ac-cleaning.svg",
    imageAlt: "Illustration of air-conditioning cleaning.",
    benefits: [
      "Improved airflow from a cleaner indoor unit",
      "A fresher, more usable cooling system",
      "Support for regular maintenance rather than waiting for a breakdown",
    ],
    serviceIncludes: [
      "Cleaning of accessible indoor-unit surfaces and filters",
      "Attention to areas that commonly collect dust and residue",
      "A working check after cleaning",
    ],
    commonReasons: [
      "Dusty indoor units or weak airflow",
      "Odour from the air-conditioner",
      "A system that has been used heavily without cleaning",
    ],
    relatedServices: ["ac-maintenance", "duct-vent-cleaning", "ac-repair"],
    seoTitle: "AC Cleaning in Chennai | TECHNO CARE",
    seoDescription:
      "AC cleaning in Chennai by TECHNO CARE. Filter and unit cleaning to support better airflow and everyday cooling performance.",
    featured: true,
    order: 4,
  },
  {
    id: "portable-ac-services",
    slug: "portable-ac-services",
    category: "ac",
    title: "Portable AC Services",
    shortTitle: "Portable AC",
    description:
      "Service support for portable air-conditioners used in rooms that need flexible cooling.",
    longDescription:
      "Portable air-conditioners are often used where a split system is not practical. TECHNO CARE provides portable AC services covering setup support, repair, and servicing of portable cooling units. The work is based on the specific unit and the way it is being used in the space.",
    icon: "fan",
    image: "/services/portable-ac.svg",
    imageAlt: "Illustration of portable air-conditioning service.",
    benefits: [
      "Help with portable units that are not cooling as expected",
      "Practical advice on use and placement within the room",
      "Servicing support without requiring a full split-system installation",
    ],
    serviceIncludes: [
      "Review of the portable unit and the reported issue",
      "Service or repair of the agreed items",
      "Guidance on exhaust, drainage, and everyday use where relevant",
    ],
    commonReasons: [
      "A portable AC that is not cooling the room",
      "Water-tank, drainage, or airflow issues",
      "A unit that needs servicing after storage or heavy use",
    ],
    relatedServices: ["ac-repair", "ac-installation", "ac-maintenance"],
    seoTitle: "Portable AC Services in Chennai | TECHNO CARE",
    seoDescription:
      "Portable AC services in Chennai by TECHNO CARE. Setup support, repair, and servicing for portable air-conditioners.",
    featured: false,
    order: 5,
  },
  {
    id: "hvac-system-repair",
    slug: "hvac-system-repair",
    category: "hvac",
    title: "HVAC System Repair",
    shortTitle: "HVAC Repair",
    description:
      "Repair of HVAC systems when cooling or airflow is not working as it should.",
    longDescription:
      "HVAC repair covers faults in heating, ventilation, and air-conditioning systems beyond a single split AC unit. TECHNO CARE attends to HVAC system repair requests in Chennai and nearby areas, focusing on the reported problem, the condition of the equipment, and the work needed to restore operation where that is practical.",
    icon: "settings",
    image: "/services/hvac-repair.svg",
    imageAlt: "Illustration of HVAC system repair.",
    benefits: [
      "A structured look at HVAC equipment that is not performing",
      "Repair recommendations based on the system in front of us",
      "Support for premises that rely on more than a single AC unit",
    ],
    serviceIncludes: [
      "Discussion of the HVAC fault or performance issue",
      "Inspection of relevant equipment",
      "Agreed repair work",
      "A check of operation after the repair",
    ],
    commonReasons: [
      "An HVAC system that has stopped cooling or circulating air properly",
      "Recurring faults on existing HVAC equipment",
      "Poor performance that has not been resolved by basic servicing",
    ],
    relatedServices: [
      "hvac-system-maintenance",
      "ac-repair",
      "duct-vent-repair",
    ],
    seoTitle: "HVAC Repair in Chennai | TECHNO CARE",
    seoDescription:
      "HVAC system repair in Chennai by TECHNO CARE. Practical fault finding and repair for HVAC equipment serving homes and premises.",
    featured: true,
    order: 6,
  },
  {
    id: "hvac-system-maintenance",
    slug: "hvac-system-maintenance",
    category: "hvac",
    title: "HVAC System Maintenance",
    shortTitle: "HVAC Maintenance",
    description:
      "Maintenance of HVAC systems to support reliable operation and fewer avoidable interruptions.",
    longDescription:
      "Regular HVAC maintenance helps keep larger cooling and ventilation systems in usable condition. TECHNO CARE provides HVAC system maintenance covering inspection, servicing, and cleaning of accessible components. The visit is planned around the equipment on site rather than a one-size checklist copied from another job.",
    icon: "shield",
    image: "/services/hvac-maintenance.svg",
    imageAlt: "Illustration of HVAC system maintenance.",
    benefits: [
      "A more consistent operating condition for HVAC equipment",
      "Earlier visibility of items that may need repair",
      "Maintenance support alongside AC servicing",
    ],
    serviceIncludes: [
      "Inspection of HVAC equipment included in the visit",
      "Cleaning and servicing of accessible components",
      "Operating check after maintenance",
      "Notes on follow-up items if they are identified",
    ],
    commonReasons: [
      "HVAC equipment that has not been maintained for some time",
      "Premises that need a planned servicing visit",
      "Systems that run daily and need routine attention",
    ],
    relatedServices: [
      "hvac-system-repair",
      "ac-maintenance",
      "duct-vent-cleaning",
    ],
    seoTitle: "HVAC Maintenance in Chennai | TECHNO CARE",
    seoDescription:
      "HVAC system maintenance in Chennai by TECHNO CARE. Inspection and servicing to keep HVAC equipment in more reliable working order.",
    featured: true,
    order: 7,
  },
  {
    id: "duct-vent-installation",
    slug: "duct-vent-installation",
    category: "duct",
    title: "HVAC Duct & Vent Installation",
    shortTitle: "Duct Installation",
    description:
      "Installation of HVAC ducts and vents to support proper airflow as part of a cooling or ventilation system.",
    longDescription:
      "Duct and vent installation is needed when airflow paths have to be added, extended, or replaced. TECHNO CARE provides HVAC duct and vent installation as part of its HVAC service offer in Chennai and nearby areas. The work is discussed against the layout of the space and the equipment it needs to serve.",
    icon: "pipe",
    image: "/services/duct-installation.svg",
    imageAlt: "Illustration of HVAC duct and vent installation.",
    benefits: [
      "Airflow paths planned around the space and the equipment",
      "Installation aligned with the HVAC or AC system it serves",
      "A practical alternative to leaving damaged or missing ducting unaddressed",
    ],
    serviceIncludes: [
      "Discussion of the duct or vent requirement",
      "Installation of agreed ducting and vents",
      "A review of airflow after the work, where applicable",
    ],
    commonReasons: [
      "A new HVAC layout that needs ducting or vents",
      "Replacement of damaged or inadequate ducting",
      "Additional vents required for a room that is not receiving enough air",
    ],
    relatedServices: ["duct-vent-repair", "duct-vent-cleaning", "hvac-system-maintenance"],
    seoTitle: "HVAC Duct Installation in Chennai | TECHNO CARE",
    seoDescription:
      "HVAC duct and vent installation in Chennai by TECHNO CARE. Practical ducting and vent work to support airflow in AC and HVAC systems.",
    featured: false,
    order: 8,
  },
  {
    id: "duct-vent-repair",
    slug: "duct-vent-repair",
    category: "duct",
    title: "HVAC Duct & Vent Repair",
    shortTitle: "Duct Repair",
    description:
      "Repair of HVAC ducts and vents that are leaking, damaged, disconnected, or restricting airflow.",
    longDescription:
      "Damaged ducts and vents can reduce cooling, create uneven rooms, and waste the work the HVAC system is doing. TECHNO CARE provides HVAC duct and vent repair to restore airflow paths where the existing installation can be put back into proper condition. The repair is based on what is found on site.",
    icon: "wrench",
    image: "/services/duct-repair.svg",
    imageAlt: "Illustration of HVAC duct and vent repair.",
    benefits: [
      "Attention to leaks, disconnects, and damaged vents",
      "Better use of the existing HVAC equipment where ducting is the issue",
      "Repair options discussed before work proceeds",
    ],
    serviceIncludes: [
      "Inspection of the reported duct or vent issue",
      "Repair of agreed sections or fittings",
      "A check of the repaired area after the work",
    ],
    commonReasons: [
      "Weak airflow from some vents",
      "Visible damage, gaps, or disconnected ducting",
      "Rooms that stay warm despite the HVAC system running",
    ],
    relatedServices: [
      "duct-vent-installation",
      "duct-vent-cleaning",
      "hvac-system-repair",
    ],
    seoTitle: "HVAC Duct Repair in Chennai | TECHNO CARE",
    seoDescription:
      "HVAC duct and vent repair in Chennai by TECHNO CARE. Repair of damaged, leaking, or disconnected ducts and vents affecting airflow.",
    featured: false,
    order: 9,
  },
  {
    id: "duct-vent-cleaning",
    slug: "duct-vent-cleaning",
    category: "duct",
    title: "HVAC Duct & Vent Cleaning",
    shortTitle: "Duct Cleaning",
    description:
      "Cleaning of HVAC ducts and vents to reduce dust build-up and support cleaner airflow.",
    longDescription:
      "Duct and vent cleaning is requested when dust, residue, or neglected airflow paths are affecting comfort. TECHNO CARE provides HVAC duct and vent cleaning in Chennai and nearby areas as a focused service. What gets cleaned is agreed against the system on site so the visit stays relevant.",
    icon: "wind",
    image: "/services/duct-cleaning.svg",
    imageAlt: "Illustration of HVAC duct and vent cleaning.",
    benefits: [
      "Cleaner airflow paths for the HVAC system",
      "Support for indoor comfort where dust has built up in vents",
      "A complementary service to AC and HVAC maintenance",
    ],
    serviceIncludes: [
      "Review of the ducts and vents included in the visit",
      "Cleaning of agreed duct and vent areas",
      "A short summary of what was cleaned and any follow-up noted",
    ],
    commonReasons: [
      "Dusty vents or visible build-up",
      "Airflow that feels stale or restricted",
      "Cleaning requested as part of HVAC maintenance",
    ],
    relatedServices: [
      "ac-cleaning",
      "hvac-system-maintenance",
      "duct-vent-repair",
    ],
    seoTitle: "HVAC Duct Cleaning in Chennai | TECHNO CARE",
    seoDescription:
      "HVAC duct and vent cleaning in Chennai by TECHNO CARE. Cleaning of ducts and vents to support cleaner airflow in AC and HVAC systems.",
    featured: false,
    order: 10,
  },
];

export const serviceCategories: { id: ServiceCategory; title: string; intro: string }[] =
  [
    {
      id: "ac",
      title: "Air Conditioning",
      intro:
        "Installation, repair, maintenance, cleaning, and portable AC support.",
    },
    {
      id: "hvac",
      title: "HVAC",
      intro: "System-level repair and maintenance for HVAC equipment.",
    },
    {
      id: "duct",
      title: "Duct & Vent",
      intro: "Installation, repair, and cleaning of HVAC ducts and vents.",
    },
  ];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getServicesByCategory = (category: ServiceCategory) =>
  services
    .filter((service) => service.category === category)
    .sort((a, b) => a.order - b.order);

export const getFeaturedServices = () =>
  services.filter((service) => service.featured).sort((a, b) => a.order - b.order);

export const getRelatedServices = (slug: string) => {
  const current = getServiceBySlug(slug);
  if (!current) return [];
  return current.relatedServices
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((service): service is Service => Boolean(service));
};
