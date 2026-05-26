export interface CaseStudy {
  id: string;
  title: string;
  badge: string;
  industry: string;
  problem: string;
  systemBuilt: string;
  execution: string;
  results: {
    metrics: string[];
    summary: string;
  };
  whatWorked: string;
  whatWeWouldImprove: string;
  details: string[];
  clientStatus: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "case-logistics",
    title: "Logistics Campaign",
    badge: "$100 → 19 Leads → 3 Bookings",
    industry: "Logistics & Freight Services",
    problem: "Zero structured lead acquisition pipeline. Client relied entirely on cold outreach, leading to high sales fatigue and unpredictable fleet utility rates.",
    systemBuilt: "High-Intent Search Advertising + Single-Focus Booking Funnel.",
    execution: "Scrapped broad social reach ads. Launched hyper-targeted Google Search campaigns focused on transactional keywords (e.g. 'refrigerated LTL carrier near me'). Routed clicks to a fast, clean landing page where visitors could calculate instant quote estimation and book discovery calls.",
    results: {
      metrics: ["$100 Campaign Test Spend", "19 Verified Business Leads", "3 Firm Discovery Bookings"],
      summary: "Acquired commercial shippers at record-low cost, keeping fleet routes booked without manual cold outreach."
    },
    whatWorked: "Focusing strictly on buyer intent search keywords rather than passive scrolling social media ads.",
    whatWeWouldImprove: "Integrating direct freight rate API integrations to calculate real-time transit pricing instantly on the funnel page.",
    details: [
      "No structured lead system prior to campaign.",
      "Built targeted campaigns around high-intent business users.",
      "Focused on scheduling direct booking intent."
    ],
    clientStatus: "Active System"
  },
  {
    id: "case-media",
    title: "Media / Architectural Photography",
    badge: "₹5,000 → 87 Leads → 3 Projects",
    industry: "Premium Photography & Media Production",
    problem: "Needed inbound leads directly from elite architects and interior designers, but struggled with generic styling that blended in with normal wedding or portrait photographers.",
    systemBuilt: "Premium Portfolio Grid + Niche Direct Messaging Funnel.",
    execution: "Shifted positioning away from 'photographer for hire' to 'architectural representation lab'. Ran highly targeted Meta campaigns showing cinematic, slowly animated video frames of modern houses. Kept messaging ultra-premium, focusing on publishing readiness rather than simple photos.",
    results: {
      metrics: ["₹5,000 Total Ad Spend", "87 Interior/Architect Inquiries", "3 High-Ticket Retained Projects"],
      summary: "Established a pipeline of elite design studios, leading to project contracts that returned the ad spend multiple times over."
    },
    whatWorked: "Using premium, slow-motion video hooks that mimic luxury design magazines instead of loud social ads.",
    whatWeWouldImprove: "Automating the initial portfolio showcase via WhatsApp catalogs immediately after submission.",
    details: [
      "Needed inbound inquiries specifically from architects and interior designers.",
      "Used premium layout and magazine-style positioning.",
      "Applied strict niche targeting and razor-sharp messaging hooks."
    ],
    clientStatus: "Completed Asset"
  },
  {
    id: "case-realestate",
    title: "Real Estate",
    badge: "324 Leads → 11 Deals → ₹32 CPL",
    industry: "Real Estate & Builders",
    problem: "Highly inconsistent lead flow and poor lead qualification, causing the sales team to waste hundreds of hours calling cold contacts who couldn't afford the properties.",
    systemBuilt: "Meta Direct Lead Qualification Flow + Retargeting Loops.",
    execution: "Developed custom pricing hook ads showing project layouts and payment terms. Utilized an in-ad lead form with multi-step qualification (budget filters and purchase timeline queries). Connected WhatsApp auto-responders to contact leads within 90 seconds of submission.",
    results: {
      metrics: ["324 Inbound Property Leads", "11 Closed Property Deals", "₹32 Best Cost-Per-Lead (CPL)"],
      summary: "Generated high volumes of sales-ready property buyers, reducing average sales cycles by 14 days."
    },
    whatWorked: "Pre-qualifying leads with immediate budget checkboxes directly within the lead form before they could submit.",
    whatWeWouldImprove: "Adding an interactive 3D villa floor plan selector directly inside the landing page funnel.",
    details: [
      "Inconsistent and unverified lead flow.",
      "Tested creatives, custom pricing hooks, and target messaging.",
      "Iterated campaign systems daily based on lead-to-deal conversion rates."
    ],
    clientStatus: "Scaling Mode"
  }
];
