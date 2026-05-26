"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Info, Check } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextureBackground from "../../components/TextureBackground";
import PixelGuide from "../../components/PixelGuide";
import { caseStudiesData } from "../../data/caseStudies";

export default function Results() {
  return (
    <TextureBackground>
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Page Title & Subtext */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary-teal/20 pb-8 mb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-teal rounded-full" />
                <span className="text-[10px] font-mono tracking-widest text-primary-teal uppercase border border-primary-teal/20 px-2.5 py-0.5 rounded bg-primary-teal/5">
                  Performance Ledger
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-text-primary">
                Results, Not Activity
              </h1>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Campaign outcomes, lead systems, and execution snapshots from work across industries.
              </p>
            </div>
            
            {/* Guide character Click */}
            <div className="mt-6 md:mt-0 flex items-center gap-3">
              <PixelGuide state="point" size={44} message="Proof, not promises." direction="left" />
              <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/5 border border-primary-teal/10 px-2 py-1 rounded">
                // tracking: verified
              </span>
            </div>
          </div>

          {/* Impact Snapshot Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { title: "PROJECTS_COMPLETED", value: "47+", label: "Target outcomes reached" },
              { title: "CAMPAIGNS_DEPLOYED", value: "30+", label: "Multi-channel pipelines" },
              { title: "OPTIMAL_CPL_INR", value: "₹32", label: "Real Estate campaign" },
              { title: "TOTAL_LEADS_COUNT", value: "324 Leads", label: "Real Estate qualified" },
              { title: "REAL_DEALS_CLOSED", value: "11 Deals", label: "High-ticket property conversions" },
              { title: "MEDIA_BUDGET_TEST", value: "₹5K → 87 Leads", label: "Architectural photography" },
              { title: "LTL_LOGISTICS_TEST", value: "$100 → 19 Leads", label: "B2B shipping queries" },
              { title: "CREATIVE_ASSETS", value: "1,200+", label: "Scroll-stopping assets" },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-card-surf border border-primary-teal/15 p-5 rounded-lg flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] font-mono text-text-muted uppercase block">// {stat.title}</span>
                  <span className="text-2xl font-display font-bold text-primary-teal block mt-2">{stat.value}</span>
                </div>
                <p className="text-[10px] text-text-muted mt-3 font-mono border-t border-primary-teal/5 pt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Detailed Case Studies Section */}
          <div className="space-y-16 mb-16">
            <div className="border-b border-primary-teal/10 pb-4">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-text-primary uppercase tracking-wide">
                // Campaign Deep Dives
              </h2>
            </div>

            {caseStudiesData.map((study, idx) => (
              <div 
                key={study.id} 
                id={study.id}
                className="bg-panel-surf/60 border border-primary-teal/20 rounded-xl overflow-hidden hover:border-primary-teal/35 transition-colors relative"
              >
                {/* Header segment with badge */}
                <div className="bg-card-surf px-6 py-4 border-b border-primary-teal/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-text-muted">CASE_0{idx + 1}</span>
                    <h3 className="text-lg font-display font-bold text-text-primary">{study.title}</h3>
                  </div>
                  <span className="text-xs font-mono text-primary-teal bg-primary-teal/10 border border-primary-teal/20 px-3 py-1 rounded">
                    {study.badge}
                  </span>
                </div>

                {/* Case Grid Layout */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Left Specs side */}
                  <div className="md:col-span-4 space-y-4">
                    <div className="bg-main-bg/50 border border-primary-teal/10 p-4 rounded-lg space-y-3 font-mono text-xs">
                      <div>
                        <span className="text-text-muted text-[10px] uppercase">// Industry</span>
                        <p className="text-text-primary mt-0.5">{study.industry}</p>
                      </div>
                      <div>
                        <span className="text-text-muted text-[10px] uppercase">// Current State</span>
                        <p className="text-soft-cyan mt-0.5 font-bold">{study.clientStatus}</p>
                      </div>
                      <div>
                        <span className="text-text-muted text-[10px] uppercase">// Core Pipeline</span>
                        <p className="text-text-primary mt-0.5">{study.systemBuilt}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Content side */}
                  <div className="md:col-span-8 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono text-primary-teal uppercase mb-2">// 1. The Challenge / Problem</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono text-primary-teal uppercase mb-2">// 2. Execution / Build</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{study.execution}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono text-primary-teal uppercase mb-3">// 3. Performance Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {study.results.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="bg-main-bg border border-primary-teal/15 p-3 rounded flex items-center gap-2">
                            <Check className="text-primary-teal shrink-0" size={14} />
                            <span className="text-[11px] font-mono text-text-primary">{m}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed mt-3">{study.results.summary}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-primary-teal/10">
                      <div>
                        <h5 className="text-[10px] font-mono text-primary-teal uppercase">// What Worked</h5>
                        <p className="text-xs text-text-muted mt-1 leading-relaxed">{study.whatWorked}</p>
                      </div>
                      <div>
                        <h5 className="text-[10px] font-mono text-coral-warn uppercase">// Next Iteration / Improvement</h5>
                        <p className="text-xs text-text-muted mt-1 leading-relaxed">{study.whatWeWouldImprove}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Anonymized Proof Note */}
          <div className="border border-primary-teal/15 rounded-xl bg-card-surf/50 p-5 flex items-start gap-3 max-w-3xl mx-auto mb-16">
            <Info className="text-primary-teal shrink-0 mt-0.5" size={16} />
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-text-primary uppercase tracking-wider">Anonymized Proof Note</span>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Some client-identifying details, logos, or domain references are hidden to protect client privacy. Results shown are based on verified campaign snapshots, ad account ledgers, and internal CRM logs.
              </p>
            </div>
          </div>

          {/* Final CTA panel */}
          <div className="p-8 border border-primary-teal/30 bg-panel-surf/80 backdrop-blur-md rounded-2xl text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-block text-[9px] font-mono text-primary-teal border border-primary-teal/20 px-2.5 py-0.5 rounded bg-primary-teal/5">
              SYSTEM_DIAGNOSIS_ACTIVE
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-display font-bold leading-tight text-text-primary">
              Want us to break down your growth system?
            </h2>
            
            <p className="text-xs sm:text-sm text-text-muted max-w-md mx-auto leading-relaxed">
              We’ll run a technical audit on your ads, landing pages, and follow-ups to point out exactly where your conversions are leaking.
            </p>

            <div className="pt-2">
              <Link
                href="/build"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-gradient-to-r from-primary-teal to-soft-cyan text-main-bg text-xs font-display font-bold rounded shadow-glow shadow-primary-teal/10 hover:shadow-primary-teal/25 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Let’s Build <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </TextureBackground>
  );
}
