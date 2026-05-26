export interface MetricCard {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  category: 'projects' | 'campaigns' | 'financial' | 'leads';
  microcopy?: string;
}

export const metricsData: MetricCard[] = [
  {
    id: "projects",
    value: "47+",
    label: "Projects Completed",
    category: "projects",
    microcopy: "System online."
  },
  {
    id: "campaigns",
    value: "30+",
    label: "Campaigns Executed",
    category: "campaigns",
    microcopy: "Tracking what matters."
  },
  {
    id: "industries",
    value: "8+",
    label: "Industries Served",
    category: "projects",
    microcopy: "No fluff detected."
  },
  {
    id: "best-cpl",
    value: "₹32",
    label: "Best Cost Per Lead (CPL)",
    sublabel: "Real Estate campaign",
    category: "financial",
    microcopy: "Vanity metrics removed."
  },
  {
    id: "inr-leads",
    value: "₹5K → 87 Leads",
    label: "Media / Photo Budget Performance",
    category: "leads",
    microcopy: "Signal detected."
  },
  {
    id: "usd-leads",
    value: "$100 → 19 Leads",
    label: "Logistics Campaign Performance",
    category: "leads",
    microcopy: "Lead leak found."
  },
  {
    id: "lead-deals",
    value: "324 Leads / 11 Deals",
    label: "Real Estate Funnel Compound",
    category: "leads",
    microcopy: "Proof, not promises."
  },
  {
    id: "assets-shipped",
    value: "1,200+",
    label: "Creative Assets Shipped",
    category: "campaigns",
    microcopy: "Build mode active."
  }
];
