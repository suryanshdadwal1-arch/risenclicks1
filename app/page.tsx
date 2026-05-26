"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Video,
  Monitor,
  Cpu,
  Search,
  CheckCircle,
  AlertTriangle,
  FolderOpen,
  Eye,
  Zap,
  Play
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TextureBackground from "../components/TextureBackground";
import LoadingScreen from "../components/LoadingScreen";
import ImpactDashboard from "../components/ImpactDashboard";
import PixelGuide, { ClickState } from "../components/PixelGuide";
import { servicesData } from "../data/services";
import { caseStudiesData } from "../data/caseStudies";
import { portfolioData, PortfolioItem } from "../data/portfolio";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [filteredPortfolio, setFilteredPortfolio] = useState<PortfolioItem[]>([]);
  const [ctaHovered, setCtaHovered] = useState(false);
  const [finalCtaHovered, setFinalCtaHovered] = useState(false);

  // Filter portfolio preview items based on active tab
  useEffect(() => {
    let filtered = portfolioData;
    if (activeTab !== "All") {
      filtered = portfolioData.filter(item => 
        item.categories.some(cat => cat.toLowerCase() === activeTab.toLowerCase())
      );
    }
    setFilteredPortfolio(filtered.slice(0, 6)); // Show top 6 items in preview
  }, [activeTab]);

  const tabs = [
    "All",
    "Ads",
    "Reels",
    "Websites",
    "AI Creatives",
    "SaaS",
    "Real Estate",
    "Local Services"
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp": return <TrendingUp className="text-primary-teal" size={20} />;
      case "Video": return <Video className="text-primary-teal" size={20} />;
      case "Monitor": return <Monitor className="text-primary-teal" size={20} />;
      case "Cpu": return <Cpu className="text-primary-teal" size={20} />;
      case "Search": return <Search className="text-primary-teal" size={20} />;
      default: return <Zap className="text-primary-teal" size={20} />;
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <TextureBackground>
      <Header />

      <main className="flex-grow pt-24 pb-20">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-teal animate-ping" />
                <span className="text-[10px] font-mono tracking-widest text-primary-teal uppercase border border-primary-teal/20 px-2.5 py-0.5 rounded bg-primary-teal/5">
                  Creative Systems Lab
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-display font-bold leading-[1.05] tracking-tight text-text-primary">
                You Build It. <br />
                <span className="bg-gradient-to-r from-primary-teal via-soft-cyan to-text-primary bg-clip-text text-transparent">
                  We Make It Sell.
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl">
                AI-enabled growth systems that turn attention into leads, users, bookings, and revenue — through performance marketing, conversion-focused creatives, websites, automation, and conversion-focused execution.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/build"
                  onMouseEnter={() => setCtaHovered(true)}
                  onMouseLeave={() => setCtaHovered(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-teal to-soft-cyan text-main-bg text-sm font-display font-bold rounded shadow-glow shadow-primary-teal/10 hover:shadow-primary-teal/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  Let’s Build
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/results"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 border border-primary-teal/20 text-text-primary text-sm font-display font-medium rounded hover:bg-primary-teal/5 hover:border-primary-teal/40 transition-all duration-200"
                >
                  View Results →
                </Link>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-[9px] font-mono text-text-muted">// Micro-line:</span>
                <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/5 border border-primary-teal/10 px-2 py-0.5 rounded">
                  Built for execution. Not just appearance.
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              {/* Click interacting with hero headline/dashboard */}
              <div className="absolute -top-16 right-4 sm:right-16 z-20 flex items-center gap-2">
                <PixelGuide 
                  state={ctaHovered ? "point" : "carry"} 
                  direction="left"
                  size={52} 
                  message={ctaHovered ? "Start Build!" : "Let's fix it!"}
                />
              </div>
              
              {/* Dashboard Snapshot */}
              <div className="w-full">
                <ImpactDashboard />
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 2: IMPACT SNAPSHOT ================= */}
        {/* Embedded in Section 1 Right column for visual aesthetic & flow */}

        {/* ================= SECTION 3: PROBLEM ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-primary-teal/10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-coral-warn bg-coral-warn/5 border border-coral-warn/20 px-3 py-1 rounded-full text-[10px] font-mono">
              <AlertTriangle size={12} />
              <span>DIAGNOSTIC_WARNING: CONVERSION_LEAK</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight tracking-tight">
              Most brands are getting attention. <br />
              <span className="text-coral-warn">They’re just not converting it.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Reach is coming in. Clicks are happening. Content is being posted. But the numbers that matter — leads, users, bookings, and revenue — are not compounding. That usually means the system behind the marketing is broken.
            </p>
          </div>
        </section>

        {/* ================= SECTION 4: WHERE GROWTH BREAKS ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="text-center mb-12">
            <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// Friction Points</h3>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mt-2">Where Growth Breaks</h2>
            <p className="text-xs font-mono text-text-muted mt-1">Attention is easy. Conversion is the work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: "01", title: "Creative", desc: "Does it stop the scroll?", status: "SCROLL_STOPPER?" },
              { num: "02", title: "Message", desc: "Does it make the offer clear?", status: "OFFER_CLARITY" },
              { num: "03", title: "Funnel", desc: "Does the visitor know what to do next?", status: "LEAKING_PATH" },
              { num: "04", title: "Follow-Up", desc: "Are leads being contacted fast enough?", status: "LAG_DROP_OFF" },
              { num: "05", title: "Tracking", desc: "Do you know what is actually working?", status: "BLIND_SPOTS" },
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-panel-surf/60 border border-primary-teal/15 p-5 rounded-lg hover:border-primary-teal/40 hover:bg-card-surf/80 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-primary-teal/40 group-hover:text-primary-teal">{card.num}</span>
                    <span className="text-[8px] font-mono text-coral-warn bg-coral-warn/5 border border-coral-warn/25 px-1.5 py-0.5 rounded">
                      {card.status}
                    </span>
                  </div>
                  <h4 className="text-base font-display font-bold mb-2 text-text-primary">{card.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{card.desc}</p>
                </div>
                <div className="border-t border-primary-teal/10 mt-4 pt-3 flex items-center justify-between text-[9px] font-mono text-text-muted">
                  <span>AUDIT: INCOMPLETE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-coral-warn" />
                </div>
              </div>
            ))}
          </div>

          {/* Click inspecting the leaks */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <PixelGuide state="fix" size={32} message="Patching funnel leak..." />
            <span className="text-[10px] font-mono text-primary-teal">// Click: Funnel leak patched. Clicks locked.</span>
          </div>
        </section>

        {/* ================= SECTION 5: RESULTS SNAPSHOT ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-primary-teal/10 bg-secondary-bg/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-block text-[9px] font-mono text-primary-teal border border-primary-teal/20 px-2 py-0.5 rounded bg-primary-teal/5">
                EXECUTION_DOSSIER
              </div>
              <h2 className="text-3xl font-display font-bold leading-tight">
                This Isn’t Theory. <br />
                <span className="text-primary-teal">This Is Execution.</span>
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We build quantitative growth loops for brands. Our dashboard shows exact figures of projects, budgets, cost-per-lead margins, and client close-out metrics. We do not hide behind reach metrics.
              </p>
              <div className="pt-2">
                <Link
                  href="/results"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary-teal border border-primary-teal/30 hover:border-primary-teal hover:bg-primary-teal/10 px-4 py-2.5 rounded transition-all"
                >
                  View Results <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Completed Projects", value: "47+" },
                { label: "Active Campaigns", value: "30+" },
                { label: "Best CPL Target", value: "₹32" },
                { label: "Lead Pipeline generated", value: "324 Leads" },
                { label: "Google Ads CPL Ratio", value: "$100 → 19 Leads" },
                { label: "Meta Budget Compound", value: "₹5K → 87 Leads" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-card-surf border border-primary-teal/10 p-5 rounded-lg text-left">
                  <span className="text-[20px] font-display font-bold text-primary-teal block">{stat.value}</span>
                  <span className="text-[10px] text-text-muted mt-1 block leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= SECTION 6: CAMPAIGN ARCHIVES ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// Proof Folder</h3>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mt-2">Campaign Archives</h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <PixelGuide state="carry" size={32} message="Opening Results!" />
              <Link 
                href="/results" 
                className="text-xs font-mono text-text-muted hover:text-primary-teal transition-colors flex items-center gap-1"
              >
                Open Campaign Archives <FolderOpen size={12} className="text-primary-teal" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudiesData.map((study) => (
              <div 
                key={study.id} 
                className="bg-panel-surf/60 border border-primary-teal/15 p-6 rounded-xl flex flex-col justify-between hover:border-primary-teal/30 hover:bg-card-surf/80 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual scanline details */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-teal to-transparent opacity-30" />
                
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono text-primary-teal bg-primary-teal/10 px-2 py-0.5 rounded border border-primary-teal/20">
                      {study.badge}
                    </span>
                    <span className="text-[8px] font-mono text-text-muted">{study.clientStatus}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-text-primary mb-2 group-hover:text-primary-teal transition-colors">
                    {study.title}
                  </h3>
                  
                  <span className="text-[9px] font-mono text-text-muted/60 block mb-3 uppercase tracking-wider">{study.industry}</span>

                  <ul className="space-y-2 mt-4">
                    {study.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs text-text-muted flex items-start gap-2">
                        <span className="text-primary-teal font-bold font-mono mt-0.5">&gt;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-primary-teal/10 mt-6 pt-4 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-text-muted">SYSTEM: COMPLETED</span>
                  <Link 
                    href={`/results#${study.id}`}
                    className="text-[10px] font-mono text-primary-teal hover:underline flex items-center gap-1"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7: WORK / PORTFOLIO PREVIEW ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-primary-teal/10 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// Creative built to convert</h3>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mt-2">What Make It Sell Looks Like</h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <PixelGuide state="point" size={32} />
              <Link 
                href="/work" 
                className="text-xs font-mono text-primary-teal border border-primary-teal/20 hover:border-primary-teal px-4 py-2 rounded bg-primary-teal/5 transition-all"
              >
                Open Creative Archive →
              </Link>
            </div>
          </div>

          {/* Portfolio tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-primary-teal/10 pb-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] font-mono px-3 py-1.5 rounded transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? "bg-primary-teal text-main-bg font-bold" 
                    : "text-text-muted hover:text-text-primary hover:bg-card-surf/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Portfolio Grid Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id} 
                className="bg-card-surf border border-primary-teal/15 rounded-xl overflow-hidden hover:border-primary-teal/40 transition-all duration-300 group flex flex-col justify-between relative"
              >
                <div className="relative aspect-video w-full bg-main-bg overflow-hidden flex items-center justify-center border-b border-primary-teal/10">
                  {item.imagePath.startsWith("/") ? (
                    <img 
                      src={item.imagePath} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    // Placeholder card layout
                    <div className="p-6 text-center space-y-3">
                      <div className="w-10 h-10 rounded border border-primary-teal/30 bg-primary-teal/5 flex items-center justify-center mx-auto text-primary-teal font-mono font-bold text-xs">
                        RNC
                      </div>
                      <span className="text-[10px] font-mono text-primary-teal block uppercase">{item.category} SYSTEM</span>
                      <span className="text-xs text-text-muted block">Interactive web preview under client privacy lock.</span>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-main-bg/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <Link
                      href="/work"
                      className="p-2 border border-primary-teal bg-primary-teal/15 rounded-full text-primary-teal hover:scale-110 transition-transform"
                      title="Open full Creative Archive"
                    >
                      <Eye size={16} />
                    </Link>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/5 px-2 py-0.5 rounded border border-primary-teal/10">
                      {item.category}
                    </span>
                    <span className="text-[8px] font-mono text-text-muted">{item.status}</span>
                  </div>
                  <h4 className="text-sm font-display font-bold text-text-primary group-hover:text-primary-teal transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-[10px] text-text-muted flex justify-between pt-1 border-t border-primary-teal/5">
                    <span>Goal: {item.goal}</span>
                    <span className="font-mono text-primary-teal/60">{item.format}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 8: WHAT WE BUILD ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-primary-teal/10">
          <div className="text-center mb-16">
            <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// System Architecture</h3>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">We Build the Missing Pieces</h2>
            <p className="text-sm text-text-muted mt-2 max-w-xl mx-auto">
              We diagnose conversion leaks and deploy dedicated marketing infrastructure designed specifically to make what you build sell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => (
              <div 
                key={service.id} 
                className={`bg-panel-surf/60 border border-primary-teal/15 p-6 rounded-xl hover:bg-card-surf/80 hover:border-primary-teal/30 transition-all duration-300 flex flex-col justify-between relative group ${
                  idx === 3 || idx === 4 ? "md:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-primary-teal/10 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-primary-teal/20 rounded bg-primary-teal/5">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <h4 className="text-lg font-display font-bold text-text-primary group-hover:text-primary-teal transition-colors">
                        {service.title}
                      </h4>
                    </div>
                    <span className="text-[8px] font-mono text-primary-teal uppercase bg-primary-teal/10 px-1.5 py-0.5 rounded">
                      {service.systemLabel}
                    </span>
                  </div>

                  <p className="text-xs text-text-muted mb-4 font-mono leading-relaxed">{service.tagline}</p>
                  <p className="text-xs text-text-muted leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs text-text-muted flex items-center gap-2">
                        <CheckCircle size={12} className="text-primary-teal/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-primary-teal/5 mt-6 pt-4 flex items-center justify-between text-[9px] font-mono text-text-muted">
                  <span>DEPLOYMENT: ACTIVE</span>
                  <span className="text-primary-teal">SYS_VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 9: WHO WE HELP ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-primary-teal/10 bg-secondary-bg/15">
          <div className="text-center mb-16">
            <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// Client Niches</h3>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">Built for businesses that need outcomes, not activity.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                title: "Local & Home Services",
                sub: "HVAC, plumbing, pest control, cleaning, electricians.",
                label: "CALL_GEN"
              },
              {
                title: "Service Businesses",
                sub: "Clinics, gyms, salons, consultants, photographers.",
                label: "APPT_GEN"
              },
              {
                title: "Real Estate & Property",
                sub: "Realtors, builders, interiors, architecture brands.",
                label: "LEAD_BUY"
              },
              {
                title: "SaaS & Digital Products",
                sub: "Product launches, landing pages, demo funnels, user acquisition.",
                label: "ACQ_GEN"
              },
              {
                title: "Lifestyle & D2C Brands",
                sub: "Hospitality, fashion, products, personal brands.",
                label: "CONV_GEN"
              }
            ].map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-card-surf border border-primary-teal/10 p-5 rounded-lg flex flex-col justify-between hover:border-primary-teal/30 hover:bg-card-surf/90 transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[8px] font-mono text-primary-teal border border-primary-teal/20 px-1.5 py-0.5 rounded bg-primary-teal/5">
                      {cat.label}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                  </div>
                  <h4 className="text-sm font-display font-bold text-text-primary mb-2">{cat.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{cat.sub}</p>
                </div>
                <div className="border-t border-primary-teal/5 mt-4 pt-3 text-[8px] font-mono text-text-muted">
                  // targeting: optimized
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 10: OPERATING MODEL ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-primary-teal/10">
          <div className="text-center mb-16">
            <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// Operational Blueprint</h3>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2">How We Make It Sell</h2>
            <p className="text-xs font-mono text-coral-warn mt-1">If something is broken, we don’t protect it. We fix it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: "01", title: "Diagnose", desc: "Find the leak." },
              { num: "02", title: "Build", desc: "Fix what is missing." },
              { num: "03", title: "Launch", desc: "Execute cleanly." },
              { num: "04", title: "Optimize", desc: "Test, kill, scale." },
              { num: "05", title: "Report", desc: "Show what moved." },
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="bg-panel-surf/60 border border-primary-teal/15 p-5 rounded-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center text-[10px] font-mono text-primary-teal/20 border-l border-b border-primary-teal/10 bg-card-surf">
                  {step.num}
                </div>
                <h4 className="text-sm font-display font-bold text-text-primary mt-2 mb-1">{step.title}</h4>
                <p className="text-xs text-text-muted">{step.desc}</p>
                <div className="mt-4 w-full bg-primary-teal/10 h-0.5 rounded overflow-hidden">
                  <div className="bg-primary-teal h-full" style={{ width: `${(idx + 1) * 20}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 11: ABOUT US ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-primary-teal/10 bg-secondary-bg/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="p-8 border border-primary-teal/20 bg-card-surf rounded-2xl w-full text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-teal via-soft-cyan to-transparent" />
                <PixelGuide state="idle" size={64} message="No fluff detected." className="mx-auto" />
                <h4 className="font-display font-bold text-lg mt-4 text-primary-teal">Rise n Clicks Lab</h4>
                <p className="text-xs text-text-muted mt-1 font-mono">// code: creative_growth_systems</p>
                <div className="mt-6 flex justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-primary-teal rounded-full animate-ping" />
                  <span className="text-[10px] font-mono text-text-muted">Diagnostic Check: Passed</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-mono text-primary-teal uppercase tracking-wider">// Lab DNA</span>
              <h2 className="text-3xl font-display font-bold">Not built like a normal agency.</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Rise n Clicks is a creative systems lab built around one belief: marketing should not just look good — it should move people, generate demand, and create measurable growth.
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                We combine performance marketing, creative production, websites, automation, and AI-enabled workflows to build systems that sell.
              </p>
            </div>

          </div>
        </section>

        {/* ================= SECTION 12: FINAL CTA ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-primary-teal/10 relative">
          <div className="p-8 md:p-12 border border-primary-teal/30 bg-panel-surf/80 backdrop-blur-md rounded-2xl text-center space-y-6 relative overflow-hidden shadow-2xl">
            {/* Glowing borders */}
            <div className="absolute inset-0 scanning-bar opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-teal via-soft-cyan to-primary-teal" />
            
            <div className="inline-flex items-center gap-2 border border-primary-teal/20 px-3 py-1 rounded bg-primary-teal/5">
              <span className="w-2 h-2 bg-primary-teal rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-primary-teal uppercase">Ready to patch your leaks?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight max-w-2xl mx-auto text-text-primary">
              If your marketing isn’t working, <br />
              <span className="text-primary-teal">there’s a reason.</span>
            </h2>

            <p className="text-sm sm:text-base text-text-muted max-w-lg mx-auto">
              We’ll help you find the leak, fix what’s broken, and build the system that turns attention into measurable growth.
            </p>

            <div className="pt-4 flex justify-center items-center gap-4 relative">
              <Link
                href="/build"
                onMouseEnter={() => setFinalCtaHovered(true)}
                onMouseLeave={() => setFinalCtaHovered(false)}
                className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-teal to-soft-cyan text-main-bg text-sm font-display font-bold rounded shadow-glow shadow-primary-teal/10 hover:shadow-primary-teal/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ${
                  finalCtaHovered ? "ring-2 ring-primary-teal" : ""
                }`}
              >
                Let’s Build
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex justify-center pt-2">
              <PixelGuide 
                state={finalCtaHovered ? "celebrate" : "tap"} 
                size={42} 
                message={finalCtaHovered ? "Start Build!" : "Let's build together!"}
                interactive={false}
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </TextureBackground>
  );
}
