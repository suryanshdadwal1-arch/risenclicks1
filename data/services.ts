export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  systemLabel: string;
  iconName: string;
}

export const servicesData: ServicePillar[] = [
  {
    id: "growth-systems",
    title: "Growth Systems",
    tagline: "Turn attention into customer pipeline.",
    description: "Paid traffic execution built for direct response CPL efficiency and volume stability. No vanity reach, just conversion metrics.",
    items: ["Meta Ads", "Google Ads", "Custom Funnels", "Retargeting Systems", "Lead Capture Campaigns"],
    systemLabel: "growth_sys_active",
    iconName: "TrendingUp"
  },
  {
    id: "creative-systems",
    title: "Creative Systems",
    tagline: "Stop the scroll. Start the decision.",
    description: "High-performance creatives tailored for modern vertical video formats, direct response ad hooks, and AI-enabled storytelling workflows.",
    items: ["Reels Production", "Direct Response Ads", "AI Content Systems", "Visual Brand Systems", "Creative Hooks & Copy"],
    systemLabel: "creative_sys_active",
    iconName: "Video"
  },
  {
    id: "digital-systems",
    title: "Digital Systems",
    tagline: "Speed, clarity, and zero conversion leaks.",
    description: "Ultra-fast websites, custom web applications, and landing pages optimized for maximum conversion and pixel-perfect responsiveness.",
    items: ["Websites & Web Apps", "High-Converting Landing Pages", "SaaS Marketing Pages", "Analytics & Pixel Tracking", "Technical SEO Audits"],
    systemLabel: "digital_sys_active",
    iconName: "Monitor"
  },
  {
    id: "automation-systems",
    title: "Automation Systems",
    tagline: "Engage leads instantly. Zero dropoffs.",
    description: "Connecting the dots between marketing and CRM. We automate the follow-ups so you never lose a warm lead to response lag.",
    items: ["CRM Integrations", "WhatsApp Automated Flows", "Lead Routing Workflows", "Sales Dashboards", "AI Conversational Systems"],
    systemLabel: "auto_sys_active",
    iconName: "Cpu"
  },
  {
    id: "visibility-systems",
    title: "Visibility Systems",
    tagline: "Be the answer when they search.",
    description: "Own the local search landscape and optimize your digital presence for automated agent search engines and search queries.",
    items: ["Local SEO Domination", "Google Business Profile Optimizations", "AI Search Engine Optimization (GEO)", "Review Generation Engines", "Hyperlocal Visibility Mapping"],
    systemLabel: "visibility_sys_active",
    iconName: "Search"
  }
];
