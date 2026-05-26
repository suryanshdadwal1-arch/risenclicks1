"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight, BookOpen, Layers, Terminal, BookOpenCheck } from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextureBackground from "../../components/TextureBackground";
import PixelGuide from "../../components/PixelGuide";
import { labPostsData, LabPost } from "../../data/labPosts";

export default function Lab() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState<LabPost[]>(labPostsData);
  const [selectedPost, setSelectedPost] = useState<LabPost | null>(null);
  const [clickMessage, setClickMessage] = useState<string | undefined>("Click: Scanning signals...");

  const categories = [
    "All",
    "Trends",
    "Breakdowns",
    "Local Lead Gen",
    "SaaS Growth",
    "Creative Strategy",
    "AI Visibility",
    "Field Notes"
  ];

  // Set randomized quotes for the Click researcher
  useEffect(() => {
    const quotes = [
      "Signal found.",
      "Trend under observation.",
      "Theory is cheap. Testing is better.",
      "No fluff database active.",
      "Scanning marketing formulas..."
    ];
    
    const interval = setInterval(() => {
      const selectQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setClickMessage(selectQuote);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Filter posts
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(labPostsData);
    } else {
      setFilteredPosts(
        labPostsData.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase())
      );
    }
  }, [selectedCategory]);

  return (
    <TextureBackground>
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Header section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary-teal/20 pb-8 mb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-teal rounded-full animate-ping" />
                <span className="text-[10px] font-mono tracking-widest text-primary-teal uppercase border border-primary-teal/20 px-2.5 py-0.5 rounded bg-primary-teal/5">
                  Thinking Lab / Database
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-text-primary">
                The Lab
              </h1>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Ideas, breakdowns, and experiments on what makes marketing actually sell. This is not a generic marketing blog — it is Rise n Clicks’ public thinking lab.
              </p>
            </div>

            {/* Click researcher */}
            <div className="mt-6 md:mt-0 flex items-center gap-3">
              <div className="flex flex-col text-right">
                <span className="text-[8px] font-mono text-text-muted">RESEARCHER_NODE</span>
                <span className="text-[10px] font-mono text-primary-teal">Active Status</span>
              </div>
              <PixelGuide state="carry" size={48} message={clickMessage} direction="left" />
            </div>
          </div>

          {/* Categories Filter Row */}
          <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-primary-teal/10 pb-5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] font-mono px-3.5 py-2 rounded transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-primary-teal text-main-bg font-bold shadow-glow shadow-primary-teal/10"
                    : "text-text-muted hover:text-text-primary hover:bg-card-surf/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-card-surf border border-primary-teal/15 p-6 rounded-xl flex flex-col justify-between hover:border-primary-teal/35 hover:bg-panel-surf/80 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual grid decor */}
                <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center text-[10px] font-mono text-primary-teal/15 border-l border-b border-primary-teal/5 bg-panel-surf group-hover:text-primary-teal/30">
                  <Terminal size={14} />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/10 border border-primary-teal/20 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-[9px] font-mono text-text-muted">{post.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-text-primary group-hover:text-primary-teal transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-primary-teal/5 mt-6 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-text-muted">{post.readTime}</span>
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-mono text-primary-teal hover:underline flex items-center gap-1 group/btn"
                  >
                    Read Note <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>

      {/* Lab Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-main-bg/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              className="bg-panel-surf border border-primary-teal/35 rounded-2xl w-full max-w-3xl shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 p-1.5 border border-primary-teal/20 text-text-muted hover:text-text-primary rounded bg-card-surf"
              >
                <X size={16} />
              </button>

              {/* Banner details */}
              <div className="p-8 border-b border-primary-teal/10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/10 border border-primary-teal/20 px-2 py-0.5 rounded">
                    {selectedPost.category}
                  </span>
                  <span className="text-[9px] font-mono text-text-muted">{selectedPost.date}</span>
                  <span className="text-[9px] font-mono text-text-muted">•</span>
                  <span className="text-[9px] font-mono text-text-muted">{selectedPost.readTime}</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">
                  {selectedPost.title}
                </h2>
              </div>

              {/* Article Content - 5 Part Template */}
              <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto font-mono text-xs text-text-muted border-b border-primary-teal/10">
                
                {/* 1. The Trend */}
                <div className="space-y-2">
                  <h4 className="text-[10px] text-primary-teal font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" /> // 1. The Trend
                  </h4>
                  <p className="text-text-primary leading-relaxed pl-3 font-sans text-sm">{selectedPost.trend}</p>
                </div>

                {/* 2. Why It's Working */}
                <div className="space-y-2">
                  <h4 className="text-[10px] text-primary-teal font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" /> // 2. Why It's Working
                  </h4>
                  <p className="text-text-primary leading-relaxed pl-3 font-sans text-sm">{selectedPost.whyWorking}</p>
                </div>

                {/* 3. What Most Businesses Get Wrong */}
                <div className="space-y-2">
                  <h4 className="text-[10px] text-coral-warn font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral-warn" /> // 3. What Most Businesses Get Wrong
                  </h4>
                  <p className="text-text-primary leading-relaxed pl-3 font-sans text-sm">{selectedPost.whatWrong}</p>
                </div>

                {/* 4. How To Adapt It */}
                <div className="space-y-2">
                  <h4 className="text-[10px] text-primary-teal font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" /> // 4. How To Adapt It
                  </h4>
                  <p className="text-text-primary leading-relaxed pl-3 font-sans text-sm">{selectedPost.howToAdapt}</p>
                </div>

                {/* 5. RNC Take */}
                <div className="space-y-2 border-l border-primary-teal/30 pl-4 py-1.5 bg-primary-teal/5 rounded-r">
                  <h4 className="text-[10px] text-soft-cyan font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <Terminal size={12} className="text-soft-cyan animate-pulse" /> RNC_TAKE // ANALYSIS
                  </h4>
                  <p className="text-text-primary leading-relaxed font-sans text-sm italic">{selectedPost.rncTake}</p>
                </div>

              </div>

              {/* Footer CTA inside modal */}
              <div className="p-8 bg-card-surf/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left space-y-1">
                  <span className="text-[10px] font-mono text-text-primary uppercase tracking-wider block">Want us to break down your growth system?</span>
                  <p className="text-[11px] text-text-muted">We’ll review your lead flow pipeline and locate the leaks.</p>
                </div>
                <Link
                  href="/build"
                  onClick={() => setSelectedPost(null)}
                  className="w-full sm:w-auto text-center px-4 py-2.5 bg-gradient-to-r from-primary-teal to-soft-cyan text-main-bg text-xs font-display font-bold rounded flex items-center justify-center gap-1.5 hover:shadow-glow hover:shadow-primary-teal/10"
                >
                  Let’s Build
                  <ArrowRight size={13} />
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </TextureBackground>
  );
}
