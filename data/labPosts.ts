export interface LabPost {
  id: string;
  slug: string;
  category: 'Trends' | 'Breakdowns' | 'Local Lead Gen' | 'SaaS Growth' | 'Creative Strategy' | 'AI Visibility' | 'Field Notes';
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  trend: string;
  whyWorking: string;
  whatWrong: string;
  howToAdapt: string;
  rncTake: string;
  ctaText: string;
}

export const labPostsData: LabPost[] = [
  {
    id: "post-1",
    slug: "why-ads-get-reach-not-leads",
    category: "Breakdowns",
    title: "Why Your Ads Are Getting Reach But Not Leads",
    excerpt: "You are spending money, getting millions of impressions, but your pipeline remains empty. Here is the mechanical reason behind this discrepancy.",
    readTime: "4 min read",
    date: "May 24, 2026",
    trend: "Platforms (Meta, Google) are optimizing for user engagement time. If your ads have broad appeal but lack conversion hooks, you will get cheap views but zero buyers.",
    whyWorking: "Broad reach occurs because the algorithm finds passive viewers easily. However, active intent require specific structural hurdles to convert passive scrolling into direct responses.",
    whatWrong: "Most agencies measure success on impressions and CTR. They optimize campaigns for 'Maximum Reach' rather than running strict lead-generation objectives with localized qualification forms.",
    howToAdapt: "Switch your Meta ad objective from 'Traffic' to 'Leads'. Implement in-form custom questions (e.g. 'Are you looking to start within 30 days?') to filter out casual clickers.",
    rncTake: "If you cannot measure CPL and cost-per-acquisition directly from your ad campaigns, you are funding the platform's data collection, not your business's revenue growth.",
    ctaText: "Let's diagnose your ad accounts and block the leaks."
  },
  {
    id: "post-2",
    slug: "home-services-clicks-to-calls",
    category: "Local Lead Gen",
    title: "How Home Service Businesses Can Turn Clicks Into Calls",
    excerpt: "Local HVAC, plumbers, and electricians do not need brand awareness campaigns. They need phone calls. Here is the operational playbook.",
    readTime: "5 min read",
    date: "May 20, 2026",
    trend: "Home service purchasing is immediate and emergency-driven. Homeowners with leaking basements do not read corporate brochures; they call the first business that answers.",
    whyWorking: "Direct Call-Only Ads on Google Search bypass landing pages entirely, putting the user in direct contact with your dispatch office within a single tap.",
    whatWrong: "Sending paid traffic to a desktop-designed homepage with a slow multi-field contact form. Leads disappear before clicking submit.",
    howToAdapt: "Implement mobile-first landing pages with sticky 'Tap to Call' headers. Use Google Local Services Ads (LSA) and set up instant automated WhatsApp replies for off-hour requests.",
    rncTake: "In local home services, speed is your primary unfair advantage. The provider that contacts the lead within 3 minutes wins the job 78% of the time.",
    ctaText: "Let's build a call-generation system for your territory."
  },
  {
    id: "post-3",
    slug: "meta-vs-google-local-leads",
    category: "Local Lead Gen",
    title: "Meta Ads vs Google Ads for Local Lead Generation",
    excerpt: "Should you hunt with search intent or gather prospects with social scrolling? A side-by-side comparison of local acquisition systems.",
    readTime: "6 min read",
    date: "May 15, 2026",
    trend: "Google capture active intent (people searching for fixes), while Meta targets passive demographics based on life events and localized zip-code profiles.",
    whyWorking: "Combining search capture (Google) for hot emergency leads and scroll-stopping visuals (Meta) to create preventive maintenance demands in the same territory.",
    whatWrong: "Using the same creative and messaging hooks on both networks. Google requires exact answers, while Meta requires strong scroll-stoppers.",
    howToAdapt: "Fund Google Search for immediate service needs. Fund Meta for lifestyle visual systems, pricing packages, and neighborhood group referral proofs.",
    rncTake: "Do not choose between them. Route hot demand on Google, and manufacture local demand on Meta. The compound effect dominates the local area.",
    ctaText: "Let's integrate Google and Meta for your service area."
  },
  {
    id: "post-4",
    slug: "landing-page-structure-converts",
    category: "Creative Strategy",
    title: "The Landing Page Structure That Converts Paid Traffic",
    excerpt: "The exact structural blueprint we use to turn cold traffic into qualified inquiries. Anatomy of a page built strictly to sell.",
    readTime: "4 min read",
    date: "May 10, 2026",
    trend: "Attention spans have dropped to under 3 seconds. High-converting landing pages eliminate all exit points, navigation links, and generic about-us copy.",
    whyWorking: "A single-path layout directs all focus onto one logical decision: submit your details or leave. No distraction yields higher conversion rates.",
    whatWrong: "Cluttering landing pages with navigation menus, social links, footer widgets, and multiple unrelated CTAs that bleed traffic.",
    howToAdapt: "Strip out the header navigation. Place a clear headline, subheadline, trust proofs, and the lead form above the fold. Detail benefits below, then restate the CTA.",
    rncTake: "A website is for browsing. A landing page is for converting. Stop using your corporate website as the landing page for your paid ads.",
    ctaText: "Let's build a dedicated conversion landing page."
  },
  {
    id: "post-5",
    slug: "what-is-ai-search-visibility",
    category: "AI Visibility",
    title: "What Is AI Search Visibility?",
    excerpt: "ChatGPT, Gemini, and Claude are replacing typical search behaviors. If your brand is not mentioned in their training or search models, you do not exist.",
    readTime: "5 min read",
    date: "May 05, 2026",
    trend: "AI search engines read the web dynamically to recommend solutions. Traditional keyword stuffing is dead; authority, citations, and clear semantic structures are the new SEO.",
    whyWorking: "Structuring web copy in clean, descriptive schema formats allows AI models to parse your service area, pricing structures, and core positioning easily.",
    whatWrong: "Writing poetic, vague corporate taglines that contain zero industry keywords or hiding all your service details inside flat images.",
    howToAdapt: "Create comprehensive authority guides, structure your FAQ sections using JSON-LD metadata, and declare your business categories clearly (e.g. 'Local HVAC specialist in Chicago').",
    rncTake: "Write for humans first, but make your code and semantic structure transparent enough for AI models to crawl, read, and cite your services.",
    ctaText: "Let's optimize your brand for AI search visibility."
  },
  {
    id: "post-6",
    slug: "why-pretty-creatives-dont-sell",
    category: "Creative Strategy",
    title: "Why Pretty Creatives Don't Always Sell",
    excerpt: "Aesthetics look beautiful in portfolio folders, but conversion-focused creatives rely on mechanical hooks, clarity, and direct offers.",
    readTime: "4 min read",
    date: "Apr 28, 2026",
    trend: "Polished, commercial-looking ad assets look like ads, causing viewers to scroll past. Gritty, authentic, native-looking UGC and clear type hooks outperform high-budget shoots.",
    whyWorking: "Native-styled vertical video assets feel like standard content from friends, bypassing the user's built-in advertising filters.",
    whatWrong: "Focusing on agency design awards and cinematic drone shots instead of highlighting the exact customer problem in the first 3 seconds of the video.",
    howToAdapt: "Use the first 3 seconds to highlight the core problem (e.g., 'If your roof leaks during rain...'). Use simple font overlays and raw, smartphone-shot visual hooks.",
    rncTake: "A creative's job is not to win design awards; it is to stop the thumb, make the offer clear, and earn the click. Clarity beats aesthetics every single time.",
    ctaText: "Let's craft creatives that generate pipeline."
  },
  {
    id: "post-7",
    slug: "saas-landing-pages-first-screens",
    category: "SaaS Growth",
    title: "Why SaaS Landing Pages Need Clearer First Screens",
    excerpt: "If visitors cannot tell what your software does, how it works, and who it is built for within 5 seconds, your churn is programmatic.",
    readTime: "5 min read",
    date: "Apr 22, 2026",
    trend: "SaaS buyers are fatigued by vague taglines like 'Reimagine collaboration'. They seek immediate functional answers and visual dashboards.",
    whyWorking: "Showing a real product dashboard screenshot or interactive interactive walk-through above the fold builds instant utility trust.",
    whatWrong: "Hiding your interface behind generic stock photos of smiling office workers and using abstract copy that explains zero features.",
    howToAdapt: "Change your main headline to explain the primary action (e.g. 'Automate WhatsApp Lead Follow-ups'). Embed a clean screenshot of the dashboard below it.",
    rncTake: "Don't sell the concept of productivity. Show the dashboard, detail the integration speed, and make the CTA 'Start Free Trial'. Let the system speak.",
    ctaText: "Let's audit and optimize your SaaS onboarding funnel."
  },
  {
    id: "post-8",
    slug: "anatomy-high-converting-service-ad",
    category: "Creative Strategy",
    title: "The Anatomy of a High-Converting Service Business Ad",
    excerpt: "The exact layout, script pacing, and design system we use to build local service ad creatives that drive leads.",
    readTime: "4 min read",
    date: "Apr 18, 2026",
    trend: "High-performing service ads use structured layout formulas: Hook (0-3s) → Problem Breakdown (3-10s) → Solution/System (10-20s) → Offer/CTA (20-30s).",
    whyWorking: "This structural hierarchy mirrors basic decision-making psychology. It validates the user's problem before presenting the service solution.",
    whatWrong: "Putting the brand logo at the very beginning of the video, wasting the vital 3-second hook window on brand introductions.",
    howToAdapt: "Open with a visual problem hook. Add text subtitles, display active customer reviews, present a risk-free offer, and end with a clear phone-call or booking button.",
    rncTake: "Structure is everything. If you don't catch their attention in the first 3 seconds, the rest of your 30-second ad is completely invisible.",
    ctaText: "Let's design ads that turn viewers into bookings."
  }
];
