"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, CheckCircle2, Send, ArrowRight, Loader2, Sparkles, ClipboardList } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextureBackground from "../../components/TextureBackground";


export default function Build() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [runningAds, setRunningAds] = useState<"Yes" | "No" | "Not sure">("Yes");
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    socialLink: "",
    goal: "More leads",
    // Ads specific (Yes)
    adPlatform: "Meta",
    monthlySpend: "",
    currentIssue: "",
    currentCpl: "",
    landingPageLink: "",
    // Starting fresh specific (No)
    considerReason: "",
    competitorInspiration: "",
    initialOffer: "",
    idealCustomer: "",
    hasCreatives: "No",
    hasWebsite: "No",
  });

  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  const helpNeedsOptions = [
    "Meta Ads",
    "Google Ads",
    "Lead Generation",
    "Website / Landing Page",
    "Content Creation",
    "Reels / Creatives",
    "AI Content / Automation",
    "Local SEO / Google Business Profile",
    "SaaS / App Marketing",
    "Not sure yet"
  ];

  const handleNeedToggle = (need: string) => {
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API database transaction
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <TextureBackground>
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
          
          {/* Header check */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary-teal/20 pb-8 mb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-teal rounded-full animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-primary-teal uppercase border border-primary-teal/20 px-2.5 py-0.5 rounded bg-primary-teal/5">
                  Build System Configuration
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-text-primary">
                Let’s Build
              </h1>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                We’ll review where your business is right now, what you’re trying to sell, and what system is needed to turn attention into leads, users, bookings, or revenue.
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 flex items-center gap-3">
              
            </div>
          </div>

          {!formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-panel-surf/60 border border-primary-teal/20 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
            >
              {/* Scanline decoration */}
              <div className="absolute inset-0 scanning-bar opacity-10 pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                
                {/* Step 1: Contact details */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// 01. Contact & Identity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Business Name *</label>
                      <input 
                        type="text" 
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                        placeholder="Nexus Corp"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Business Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                        placeholder="john@nexus.com"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">WhatsApp / Phone *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Website / Instagram / LinkedIn Profile</label>
                    <input 
                      type="text" 
                      name="socialLink"
                      value={formData.socialLink}
                      onChange={handleInputChange}
                      className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                      placeholder="https://instagram.com/nexus"
                    />
                  </div>
                </div>

                {/* Step 2: What they need help with (Multi-select) */}
                <div className="space-y-4 border-t border-primary-teal/10 pt-6">
                  <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// 02. What do you need help building?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {helpNeedsOptions.map((option) => {
                      const isSelected = selectedNeeds.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleNeedToggle(option)}
                          className={`flex items-center justify-between border px-3 py-2.5 rounded text-left transition-all ${
                            isSelected
                              ? "bg-primary-teal/10 border-primary-teal text-primary-teal font-bold"
                              : "bg-main-bg border-primary-teal/10 text-text-muted hover:border-primary-teal/20 hover:text-text-primary"
                          }`}
                        >
                          <span className="text-[11px] font-mono">{option}</span>
                          {isSelected && <Check size={12} className="text-primary-teal shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Business Goal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-primary-teal/10 pt-6">
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// 03. Main Business Goal</h3>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleInputChange}
                      className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-mono transition-all"
                    >
                      <option value="More leads">More leads</option>
                      <option value="More booked calls">More booked calls</option>
                      <option value="More store visits">More store visits</option>
                      <option value="More sales">More sales</option>
                      <option value="More app/SaaS users">More app/SaaS users</option>
                      <option value="Better ad performance">Better ad performance</option>
                      <option value="Better content system">Better content system</option>
                      <option value="Full marketing system">Full marketing system</option>
                    </select>
                  </div>

                  {/* Step 4: Are you currently running ads? */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono tracking-widest text-primary-teal uppercase">// 04. Currently Running Ads?</h3>
                    <div className="flex gap-4">
                      {["Yes", "No", "Not sure"].map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center gap-2 border px-4 py-2.5 rounded cursor-pointer transition-all flex-grow justify-center ${
                            runningAds === opt
                              ? "bg-primary-teal/10 border-primary-teal text-primary-teal font-bold"
                              : "bg-main-bg border-primary-teal/10 text-text-muted hover:border-primary-teal/20"
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="runningAds" 
                            checked={runningAds === opt}
                            onChange={() => setRunningAds(opt as "Yes" | "No" | "Not sure")}
                            className="hidden" 
                          />
                          <span className="text-xs font-mono">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 5: Conditional logic parameters */}
                {runningAds === "Yes" ? (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-primary-teal/15 pt-6 space-y-4"
                  >
                    <div className="flex items-center gap-2 text-primary-teal">
                      <Sparkles size={14} />
                      <span className="text-[10px] font-mono uppercase tracking-wider">// Running Ads Audit Inputs</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Which platforms are you running on?</label>
                        <select
                          name="adPlatform"
                          value={formData.adPlatform}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                        >
                          <option value="Meta">Meta (Facebook/Instagram)</option>
                          <option value="Google">Google (Search/YouTube/Display)</option>
                          <option value="Both">Both Meta & Google</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Approx Monthly Ad Spend (USD/INR)</label>
                        <input 
                          type="text" 
                          name="monthlySpend"
                          value={formData.monthlySpend}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                          placeholder="e.g. $2,000 or ₹1,50,000"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Current Cost-Per-Lead (CPL), if known</label>
                        <input 
                          type="text" 
                          name="currentCpl"
                          value={formData.currentCpl}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                          placeholder="e.g. ₹65 CPL or $12 CPL"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Landing Page / Lead Form Link</label>
                        <input 
                          type="text" 
                          name="landingPageLink"
                          value={formData.landingPageLink}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                          placeholder="https://nexus.com/promo"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">What is the main issue you are experiencing?</label>
                      <textarea 
                        name="currentIssue"
                        value={formData.currentIssue}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all resize-none"
                        placeholder="e.g. Leads are coming in but sales team reports they are low quality and cold."
                      />
                    </div>

                    <div className="bg-primary-teal/5 border border-primary-teal/10 rounded p-4 text-[11px] font-mono text-primary-teal leading-relaxed">
                      💡 <strong>RNC Memo:</strong> For our scheduled call, please keep your Meta Ads Manager or Google Ads details ready. The more data we have, the faster we can identify the leak.
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-primary-teal/15 pt-6 space-y-4"
                  >
                    <div className="flex items-center gap-2 text-soft-cyan">
                      <ClipboardList size={14} />
                      <span className="text-[10px] font-mono uppercase tracking-wider">// New Build Setup Parameters</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">What offer/service do you want to promote first?</label>
                        <input 
                          type="text" 
                          name="initialOffer"
                          value={formData.initialOffer}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                          placeholder="e.g. 10% discount on HVAC maintenance checkups"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Who is your ideal customer?</label>
                        <input 
                          type="text" 
                          name="idealCustomer"
                          value={formData.idealCustomer}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                          placeholder="e.g. Local suburban homeowners"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">What made you consider marketing now?</label>
                        <input 
                          type="text" 
                          name="considerReason"
                          value={formData.considerReason}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                          placeholder="e.g. Need to build predictable customer lead channels."
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Competitor/Campaign that inspired you</label>
                        <input 
                          type="text" 
                          name="competitorInspiration"
                          value={formData.competitorInspiration}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-sans transition-all"
                          placeholder="e.g. competitors running localized Meta video reels"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Do you already have photos / videos / creative assets?</label>
                        <select
                          name="hasCreatives"
                          value={formData.hasCreatives}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-mono transition-all"
                        >
                          <option value="Yes">Yes, we have high-quality photos/videos.</option>
                          <option value="No">No, we need to script and capture them.</option>
                          <option value="Not sure">Some, but they need performance redesigns.</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-text-muted uppercase block mb-1.5">Do you have a website or landing page already?</label>
                        <select
                          name="hasWebsite"
                          value={formData.hasWebsite}
                          onChange={handleInputChange}
                          className="w-full bg-main-bg border border-primary-teal/20 rounded px-4 py-3 text-xs text-text-primary focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal font-mono transition-all"
                        >
                          <option value="Yes">Yes, live site.</option>
                          <option value="No">No, starting fresh.</option>
                          <option value="In Progress">Under development.</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-soft-cyan/5 border border-soft-cyan/10 rounded p-4 text-[11px] font-mono text-soft-cyan leading-relaxed">
                      💡 <strong>RNC Memo:</strong> Starting fresh? Bring references, competitor links, or campaigns that inspired you. It will help us formulate the target design layout.
                    </div>
                  </motion.div>
                )}

                {/* Submit button */}
                <div className="pt-6 border-t border-primary-teal/10 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-teal to-soft-cyan text-main-bg text-sm font-display font-bold rounded flex items-center justify-center gap-2 hover:shadow-glow hover:shadow-primary-teal/25 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Scanning System Parameters...
                      </>
                    ) : (
                      <>
                        Start The Build
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          ) : (
            // ================= POST SUBMIT CONFIRMATION STATE =================
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-panel-surf/80 border border-primary-teal/30 p-8 rounded-2xl shadow-2xl relative overflow-hidden text-center space-y-6 max-w-2xl mx-auto"
            >
              <div className="absolute inset-0 scanning-bar opacity-15 pointer-events-none" />
              
              <div className="w-12 h-12 bg-primary-teal/10 border border-primary-teal/30 rounded-full flex items-center justify-center mx-auto text-primary-teal">
                <CheckCircle2 size={24} className="animate-pulse" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-primary-teal bg-primary-teal/5 border border-primary-teal/15 px-3 py-1 rounded">
                  ✓ Config Transferred Successfully
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
                  You’re in. Come prepared.
                </h2>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-md mx-auto">
                  For the discovery call, keep your ad account screenshots, website link, current creatives, past results, or inspiration references ready. The more context we have, the faster we can identify what needs to change.
                </p>
              </div>

              {/* Pixel character celebration & checklist */}
              <div className="border border-primary-teal/15 rounded-xl bg-card-surf/70 p-6 text-left max-w-md mx-auto space-y-4">
                <div className="flex items-center justify-between border-b border-primary-teal/10 pb-3 mb-2">
                  <span className="text-[9px] font-mono text-text-muted">PRE_CALL_CHECKLIST</span>
                  <span className="text-[8px] font-mono text-primary-teal bg-primary-teal/10 px-1.5 py-0.5 rounded">AUTO_CONFIG</span>
                </div>
                
                <div className="flex items-center gap-3">
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-primary-teal font-bold block">// Click: Ready for build!</span>
                    <span className="text-[9px] font-mono text-text-muted">Checklist below matches your status:</span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2 text-[11px] font-mono text-text-muted">
                  {runningAds === "Yes" ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-teal font-bold">[x]</span>
                        <span>Confirm Meta/Google Account Access Ready</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-teal font-bold">[x]</span>
                        <span>Screenshot CPC / CPL Performance curves</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-teal font-bold">[x]</span>
                        <span>Identify Landing Page Conversion dropoffs</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-teal font-bold">[x]</span>
                        <span>Compile Competitor references & ad links</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-teal font-bold">[x]</span>
                        <span>Identify Primary high-ticket offer values</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-teal font-bold">[x]</span>
                        <span>Locate existing raw media / product photos</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <Link
                  href="/"
                  className="px-5 py-2.5 bg-card-surf border border-primary-teal/20 text-text-primary text-xs font-mono rounded hover:bg-primary-teal/5 transition-all"
                >
                  Return to Dashboard
                </Link>
                <Link
                  href="/work"
                  className="px-5 py-2.5 bg-gradient-to-r from-primary-teal to-soft-cyan text-main-bg text-xs font-display font-bold rounded hover:shadow-glow hover:shadow-primary-teal/10 transition-all"
                >
                  Browse Creative Archive
                </Link>
              </div>
            </motion.div>
          )}

        </section>
      </main>

      <Footer />
    </TextureBackground>
  );
}

