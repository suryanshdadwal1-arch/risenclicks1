"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight, Eye, FolderOpen, AlertCircle } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextureBackground from "../../components/TextureBackground";
import PixelGuide from "../../components/PixelGuide";
import { portfolioData, PortfolioItem } from "../../data/portfolio";

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioData);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [clickMessage, setClickMessage] = useState<string | undefined>("Click: Let's open the archives!");

  const filters = [
    "All",
    "Ads",
    "Reels",
    "Websites",
    "AI Creatives",
    "Branding",
    "SaaS",
    "Local Services",
    "Real Estate",
    "HVAC",
    "Plumbing",
    "Pest Control",
    "Logistics",
    "Media",
    "Luxury / Lifestyle"
  ];

  useEffect(() => {
    // Dynamic message from Click based on filter
    if (selectedFilter !== "All") {
      setClickMessage(`Creative file opened: ${selectedFilter}`);
      setTimeout(() => {
        setClickMessage(undefined);
      }, 2000);
    }
  }, [selectedFilter]);

  // Handle active filters
  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(
        portfolioData.filter(item =>
          item.categories.some(cat => cat.toLowerCase() === selectedFilter.toLowerCase())
        )
      );
    }
  }, [selectedFilter]);

  return (
    <TextureBackground>
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Header section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary-teal/20 pb-8 mb-10">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
                <span className="text-[10px] font-mono tracking-widest text-primary-teal uppercase border border-primary-teal/20 px-2.5 py-0.5 rounded bg-primary-teal/5">
                  Creative Repository
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-text-primary">
                Creative Archive
              </h1>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Visual systems, campaign creatives, websites, AI content, and sample work built across industries. Client-identifying details may be hidden where required for privacy.
              </p>
            </div>

            {/* Click peeking and greeting */}
            <div className="mt-6 md:mt-0 flex items-center gap-3">
              <PixelGuide 
                state={hoveredCardId ? "blink" : "idle"} 
                size={44} 
                message={clickMessage} 
                direction="left"
              />
              <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/5 border border-primary-teal/10 px-2 py-1 rounded">
                // status: folder_opened
              </span>
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-primary-teal/10 pb-5 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`text-[10px] font-mono px-3.5 py-2 rounded transition-all whitespace-nowrap ${
                  selectedFilter === filter
                    ? "bg-primary-teal text-main-bg font-bold shadow-glow shadow-primary-teal/10"
                    : "text-text-muted hover:text-text-primary hover:bg-card-surf/50 border border-transparent hover:border-primary-teal/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCardId(item.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="bg-card-surf border border-primary-teal/15 rounded-xl overflow-hidden hover:border-primary-teal/40 transition-all duration-300 group flex flex-col justify-between relative"
                >
                  {/* Click peeking element when card hovered */}
                  {hoveredCardId === item.id && (
                    <div className="absolute top-2 right-2 z-20 scale-75 animate-bounce">
                      <PixelGuide state="point" size={24} interactive={false} direction="left" />
                    </div>
                  )}

                  {/* Image Display */}
                  <div className="relative aspect-video w-full bg-main-bg overflow-hidden flex items-center justify-center border-b border-primary-teal/10">
                    {item.imagePath.startsWith("/") ? (
                      <img
                        src={item.imagePath}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      // Custom placeholder fallback design
                      <div className="p-6 text-center space-y-3">
                        <FolderOpen className="text-primary-teal/40 mx-auto" size={32} />
                        <span className="text-[9px] font-mono text-primary-teal block uppercase">{item.category} SYSTEM</span>
                        <span className="text-[11px] text-text-muted block">Interactive web preview under client privacy lock.</span>
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-main-bg/85 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="flex items-center gap-1 px-4 py-2 border border-primary-teal bg-primary-teal/10 text-primary-teal text-xs font-mono rounded hover:scale-105 transition-transform"
                      >
                        <Eye size={14} /> View Details
                      </button>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/5 px-2 py-0.5 rounded border border-primary-teal/15">
                        {item.category}
                      </span>
                      <span className="text-[8px] font-mono text-text-muted">{item.status}</span>
                    </div>

                    <h3 className="text-base font-display font-bold text-text-primary group-hover:text-primary-teal transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="text-[10px] text-text-muted border-t border-primary-teal/5 pt-2 flex items-center justify-between">
                      <span>Goal: {item.goal}</span>
                      <span className="font-mono text-primary-teal/70">{item.format}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="border border-primary-teal/10 rounded-xl bg-panel-surf/40 p-12 text-center max-w-md mx-auto space-y-4">
              <AlertCircle className="text-coral-warn mx-auto" size={36} />
              <h3 className="font-display font-bold text-lg">No Archive Files Found</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We currently do not have matching creative files in our public dashboard. Check other tags or filters for execution samples.
              </p>
              <button
                onClick={() => setSelectedFilter("All")}
                className="text-xs font-mono text-primary-teal underline"
              >
                Reset filters
              </button>
            </div>
          )}

        </section>
      </main>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-main-bg/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-panel-surf border border-primary-teal/30 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-1.5 border border-primary-teal/20 text-text-muted hover:text-text-primary hover:border-primary-teal/40 rounded bg-card-surf"
              >
                <X size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Media Preview Column */}
                <div className="bg-main-bg aspect-video md:aspect-auto md:h-full flex items-center justify-center border-r border-b md:border-b-0 border-primary-teal/15 p-6 min-h-[250px]">
                  {selectedItem.imagePath.startsWith("/") ? (
                    <img
                      src={selectedItem.imagePath}
                      alt={selectedItem.title}
                      className="max-h-[350px] w-full object-contain rounded border border-primary-teal/10"
                    />
                  ) : (
                    <div className="text-center space-y-3">
                      <FolderOpen className="text-primary-teal/40 mx-auto" size={48} />
                      <span className="text-[10px] font-mono text-primary-teal block uppercase">PRIVACY LOCK ACTIVE</span>
                      <p className="text-xs text-text-muted max-w-[200px]">Client-identifying branding is hidden to protect privacy.</p>
                    </div>
                  )}
                </div>

                {/* Details Column */}
                <div className="p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/10 border border-primary-teal/20 px-2 py-0.5 rounded">
                        {selectedItem.category}
                      </span>
                      <span className="text-[9px] font-mono text-soft-cyan bg-soft-cyan/10 border border-soft-cyan/20 px-2 py-0.5 rounded">
                        {selectedItem.format}
                      </span>
                      <span className="text-[9px] font-mono text-text-muted border border-primary-teal/10 px-2 py-0.5 rounded">
                        {selectedItem.status}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
                      {selectedItem.title}
                    </h2>

                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <span className="text-text-muted block text-[10px] uppercase tracking-wider">// Project Objective</span>
                        <p className="text-text-primary mt-1 leading-relaxed">{selectedItem.objective}</p>
                      </div>
                      <div>
                        <span className="text-text-muted block text-[10px] uppercase tracking-wider">// Creative Direction</span>
                        <p className="text-text-primary mt-1 leading-relaxed">{selectedItem.direction}</p>
                      </div>
                      <div>
                        <span className="text-text-muted block text-[10px] uppercase tracking-wider">// Campaign Goal</span>
                        <p className="text-primary-teal mt-1 font-bold">{selectedItem.goal}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-primary-teal/10 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href="/build"
                      onClick={() => setSelectedItem(null)}
                      className="w-full sm:w-auto text-center px-4 py-2.5 bg-gradient-to-r from-primary-teal to-soft-cyan text-main-bg text-xs font-display font-bold rounded flex items-center justify-center gap-1.5 hover:shadow-glow hover:shadow-primary-teal/10"
                    >
                      Build Something Similar
                      <ArrowRight size={13} />
                    </Link>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="w-full sm:w-auto px-4 py-2.5 border border-primary-teal/20 text-text-muted hover:text-text-primary text-xs font-display font-medium rounded hover:bg-primary-teal/5"
                    >
                      Close Window
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </TextureBackground>
  );
}
