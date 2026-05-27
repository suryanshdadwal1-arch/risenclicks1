export interface PortfolioItem {
  id: string;
  title: string;
  category: string; // Primary category name for display
  categories: string[]; // List of categories/filters it belongs to
  imagePath: string;
  format: 'Image' | 'Video' | 'Carousel' | 'Web Link';
  goal: string;
  status: 'Client Work' | 'Sample' | 'Concept';
  objective: string;
  direction: string;
}

export const portfolioData: PortfolioItem[] = [
  // HVAC
  {
    id: "hvac-1",
    title: "Airflow Optimization Ad",
    category: "HVAC",
    categories: ["HVAC", "Local Services", "Ads"],
    imagePath: "/assest/HVAC/WhatsApp Image 2026-05-25 at 6.22.00 PM.jpeg",
    format: "Image",
    goal: "More inbound calls & CPL decrease",
    status: "Client Work",
    objective: "Create a direct-response ad creative addressing AC efficiency and cooling delays before hot season peak.",
    direction: "Bold typography, clear benefit layout, immediate phone call CTA."
  },
  {
    id: "hvac-2",
    title: "Summer Maintenance Campaign",
    category: "HVAC",
    categories: ["HVAC", "Local Services", "Ads"],
    imagePath: "/assest/HVAC/WhatsApp Image 2026-05-25 at 6.57.00 PM.jpeg",
    format: "Image",
    goal: "Booked tune-up appointments",
    status: "Client Work",
    objective: "Highlight the cost of system neglect versus preventative flat-rate tune-ups.",
    direction: "Contrast colors, trust badges, immediate discount offer."
  },
  {
    id: "hvac-3",
    title: "Emergency AC Repair Hook",
    category: "HVAC",
    categories: ["HVAC", "Local Services", "Ads"],
    imagePath: "/assest/HVAC/WhatsApp Image 2026-05-25 at 6.57.00 PM (1).jpeg",
    format: "Image",
    goal: "Emergency service leads",
    status: "Client Work",
    objective: "Target homeowners dealing with sudden system breakdown on 95+ degree days.",
    direction: "Red warning accent elements, 24/7 availability highlight, quick mobile tap action."
  },
  {
    id: "hvac-4",
    title: "System Replacement Financing Ad",
    category: "HVAC",
    categories: ["HVAC", "Local Services", "Ads"],
    imagePath: "/assest/HVAC/WhatsApp Image 2026-05-25 at 7.11.52 PM.jpeg",
    format: "Image",
    goal: "Finance program applications",
    status: "Client Work",
    objective: "Address the barrier of high replacement cost by advertising low monthly payment terms.",
    direction: "Clear financial split graphics, low-interest visual highlighting."
  },
  {
    id: "hvac-5",
    title: "Local AC Specialist Trust Ad",
    category: "HVAC",
    categories: ["HVAC", "Local Services", "Ads"],
    imagePath: "/assest/HVAC/WhatsApp Image 2026-05-25 at 7.19.49 PM.jpeg",
    format: "Image",
    goal: "Local credibility & conversions",
    status: "Client Work",
    objective: "Showcase real technician visuals to bypass stock photo blindness on paid social channels.",
    direction: "Friendly local-first feel, client review overlay, teal brand border framing."
  },

  // PLUMBING
  {
    id: "plumb-1",
    title: "Burst Pipe Intervention",
    category: "Plumbing",
    categories: ["Plumbing", "Local Services", "Ads"],
    imagePath: "/assest/PLUMBING/WhatsApp Image 2026-05-26 at 3.59.40 AM.jpeg",
    format: "Image",
    goal: "Instant repair dispatch bookings",
    status: "Client Work",
    objective: "Deliver emergency plumbing response advertising optimized for local geographic queries.",
    direction: "Bold high-contrast warning text, click-to-call integration, response speed guarantee."
  },
  {
    id: "plumb-2",
    title: "Drain Cleaning Special",
    category: "Plumbing",
    categories: ["Plumbing", "Local Services", "Ads"],
    imagePath: "/assest/PLUMBING/WhatsApp Image 2026-05-26 at 4.00.56 AM.jpeg",
    format: "Image",
    goal: "Low-friction introductory service bookings",
    status: "Client Work",
    objective: "Use flat-rate pricing to acquire customers who will later need high-ticket sewer interventions.",
    direction: "Clean vector icon markers, bold discount banner, clean typography."
  },
  {
    id: "plumb-3",
    title: "Water Heater Installation Ad",
    category: "Plumbing",
    categories: ["Plumbing", "Local Services", "Ads"],
    imagePath: "/assest/PLUMBING/WhatsApp Image 2026-05-26 at 4.03.38 AM.jpeg",
    format: "Image",
    goal: "Water heater swap requests",
    status: "Client Work",
    objective: "Advertise next-day water heater replacement options for families with cold showers.",
    direction: "Before/After layout structure, energy saving calculations, warranty badges."
  },
  {
    id: "plumb-4",
    title: "Commercial Plumbing Diagnostics",
    category: "Plumbing",
    categories: ["Plumbing", "Local Services", "Ads"],
    imagePath: "/assest/PLUMBING/WhatsApp Image 2026-05-26 at 4.07.42 AM.jpeg",
    format: "Image",
    goal: "Commercial maintenance contracts",
    status: "Client Work",
    objective: "Target local business managers and facility operations leaders with commercial service offerings.",
    direction: "Industrial typography, checklist formatting of services, premium corporate layout."
  },
  {
    id: "plumb-5",
    title: "Sewer Line Camera Inspection",
    category: "Plumbing",
    categories: ["Plumbing", "Local Services", "Ads"],
    imagePath: "/assest/PLUMBING/WhatsApp Image 2026-05-26 at 4.13.07 AM.jpeg",
    format: "Image",
    goal: "High-ticket sewer line repairs",
    status: "Client Work",
    objective: "Highlight camera diagnostics that remove the guesswork and show direct pipe damage proofs.",
    direction: "Monitor screen display frame, high tech tool styling, 'no excavation until scan' message."
  },

  // PEST
  {
    id: "pest-first",
    title: "Premium Pest Control Solution",
    category: "Pest Control",
    categories: ["Pest Control", "Local Services", "Ads"],
    imagePath: "/assest/PEST/WhatsApp Image 2026-05-26 at 4.32.46 AM.jpeg",
    format: "Image",
    goal: "High-intent service bookings",
    status: "Client Work",
    objective: "Highlight complete eradication and long-term prevention of household pests.",
    direction: "Bold typography, clear benefit layout, immediate phone call CTA."
  },
  {
    id: "pest-1",
    title: "Termite Barrier Defense",
    category: "Pest Control",
    categories: ["Pest Control", "Local Services", "Ads"],
    imagePath: "/assest/PEST/WhatsApp Image 2026-05-26 at 4.24.53 AM.jpeg",
    format: "Image",
    goal: "Home inspection bookings",
    status: "Client Work",
    objective: "Highlight hidden structural wood damage that termites create without visual signs.",
    direction: "Subtle warning colors, clear structure audit CTA, protective shield iconography."
  },
  {
    id: "pest-2",
    title: "Rodent Control System",
    category: "Pest Control",
    categories: ["Pest Control", "Local Services", "Ads"],
    imagePath: "/assest/PEST/WhatsApp Image 2026-05-26 at 4.25.00 AM.jpeg",
    format: "Image",
    goal: "Rodent exclusion contracts",
    status: "Client Work",
    objective: "Explain rodent nesting cycles and why typical store traps fail long-term infestation blocks.",
    direction: "Scientific styling, clean structure layout, exclusion zone diagrams."
  },
  {
    id: "pest-3",
    title: "Bed Bug Eradication Ad",
    category: "Pest Control",
    categories: ["Pest Control", "Local Services", "Ads"],
    imagePath: "/assest/PEST/WhatsApp Image 2026-05-26 at 4.26.12 AM.jpeg",
    format: "Image",
    goal: "Urgent bed bug heat treatments",
    status: "Client Work",
    objective: "Target the extreme discomfort of bedbug infestation with direct next-day treatment solutions.",
    direction: "Clean room visual, 100% guarantee badge, direct booking CTA."
  },

  // DRINKS
  {
    id: "drink-1",
    title: "Cold Brew Launch Creative",
    category: "Luxury / Lifestyle",
    categories: ["Luxury / Lifestyle", "Ads", "Branding"],
    imagePath: "/assest/DRINKS/WhatsApp Image 2026-05-26 at 5.38.01 AM.jpeg",
    format: "Image",
    goal: "Retail foot traffic & launch sales",
    status: "Client Work",
    objective: "Build premium visual appeal for high-end craft beverages utilizing glass reflections.",
    direction: "Deep rich contrast, soft backlight glowing, modern minimalist typography."
  },
  {
    id: "drink-2",
    title: "Organic Matcha Social Ad",
    category: "Luxury / Lifestyle",
    categories: ["Luxury / Lifestyle", "Ads", "Reels"],
    imagePath: "/assest/DRINKS/WhatsApp Image 2026-05-26 at 5.38.10 AM.jpeg",
    format: "Image",
    goal: "Direct sales & subscription orders",
    status: "Client Work",
    objective: "Design scroll-stopping dynamic splash layout for organic matcha energy drink.",
    direction: "Energetic green splash curves, bright lifestyle layout, health-benefit list."
  },

  // BURGER
  {
    id: "burger-1",
    title: "Premium Wagyu Burger Visual",
    category: "Luxury / Lifestyle",
    categories: ["Luxury / Lifestyle", "Ads", "Branding"],
    imagePath: "/assest/burger/Luxury Burger Restaurant Instagram_page-0001.jpg",
    format: "Image",
    goal: "Dine-in table reservations",
    status: "Client Work",
    objective: "Establish premium food styling positioning for high-ticket gourmet burgers.",
    direction: "Hermes dark background backdrop, warm yellow accent lights, serif typography."
  },
  {
    id: "burger-2",
    title: "Craft Burger Menu Promo",
    category: "Luxury / Lifestyle",
    categories: ["Luxury / Lifestyle", "Ads", "Branding"],
    imagePath: "/assest/burger/Luxury Burger Restaurant Instagram_page-0002.jpg",
    format: "Image",
    goal: "Takeout orders & Clicks",
    status: "Client Work",
    objective: "Highlight custom stackable ingredients in a high-impact split poster design.",
    direction: "Dynamic food stack layout, bold typographic claims, bright detail contrast."
  },

  // COFFEE
  {
    id: "coffee-1",
    title: "Artisanal Dessert Story",
    category: "Luxury / Lifestyle",
    categories: ["Luxury / Lifestyle", "Ads", "Branding"],
    imagePath: "/assest/coffee/High-End Dessert Instagram Ad_page-0001.jpg",
    format: "Image",
    goal: "Weekend booking conversions",
    status: "Client Work",
    objective: "Advertise seasonal luxury pastries with elegant plating and soft focus details.",
    direction: "Warm cream background tones, micro-spacing labels, gold highlight glows."
  },
  {
    id: "coffee-2",
    title: "Specialty Espresso Ad",
    category: "Luxury / Lifestyle",
    categories: ["Luxury / Lifestyle", "Ads", "Branding"],
    imagePath: "/assest/coffee/High-End Dessert Instagram Ad_page-0002.jpg",
    format: "Image",
    goal: "Coffee club signups",
    status: "Client Work",
    objective: "Deliver visual asset focusing on the micro-foam detail of specialty coffees.",
    direction: "Macro zoom shots, clean white frame accents, mono-label stats."
  },

  // LOGISTICS (Conceptual placeholder)
  {
    id: "logistics-1",
    title: "Supply Chain Velocity Funnel",
    category: "Logistics",
    categories: ["Logistics", "Ads"],
    imagePath: "placeholder-logistics",
    format: "Web Link",
    goal: "B2B Freight Quote Requests",
    status: "Concept",
    objective: "Build landing pages that capture fleet logistics requests using clear transit calculators.",
    direction: "Vector routing map lines, teal accent widgets, clear mono-styled calculation tables."
  },

  // MEDIA (Conceptual placeholder)
  {
    id: "media-1",
    title: "Architectural Inbound System",
    category: "Media",
    categories: ["Media", "Websites"],
    imagePath: "placeholder-media",
    format: "Web Link",
    goal: "High-Ticket Photo Shoot Inquiries",
    status: "Client Work",
    objective: "Construct high-end digital galleries showcasing structural forms and premium real-estate views.",
    direction: "Minimalist grid, silent fullscreen autoplay video background, elegant menu."
  },

  // SAAS (Conceptual placeholder)
  {
    id: "saas-1",
    title: "AI Workflows Landpage",
    category: "SaaS",
    categories: ["SaaS", "Websites", "AI Creatives"],
    imagePath: "placeholder-saas",
    format: "Web Link",
    goal: "Free Trial Opt-Ins",
    status: "Concept",
    objective: "Structure landing pages highlighting data pipelines, auto-CRM lead routers, and API states.",
    direction: "Premium dashboard screenshots, interactive toggles, soft green glow borders."
  },

  // REAL ESTATE (Conceptual placeholder)
  {
    id: "realestate-1",
    title: "Premium Villa Lead Funnel",
    category: "Real Estate",
    categories: ["Real Estate", "Ads", "Websites"],
    imagePath: "placeholder-realestate",
    format: "Web Link",
    goal: "Pre-construction sales bookings",
    status: "Client Work",
    objective: "Launch high-intent Meta campaigns targeting high-net-worth real estate buyers in major cities.",
    direction: "Luxurious architectural render overlays, pricing hook tables, clear qualification form."
  }
];
