"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { metricsData } from "../data/metrics";


export default function ImpactDashboard() {
  const [animatedVals, setAnimatedVals] = useState({
    projects: 0,
    campaigns: 0,
    industries: 0,
  });

  useEffect(() => {
    const duration = 1200; // ms
    const steps = 30;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setAnimatedVals({
        projects: Math.round((47 / steps) * currentStep),
        campaigns: Math.round((30 / steps) * currentStep),
        industries: Math.round((8 / steps) * currentStep),
      });

      if (currentStep >= steps) {
        setAnimatedVals({ projects: 47, campaigns: 30, industries: 8 });
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border border-primary-teal/20 rounded-xl bg-panel-surf/70 p-6 relative overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Scanline layer inside dashboard */}
      <div className="absolute inset-0 scanning-bar opacity-20 pointer-events-none" />

      {/* Dashboard Top bar */}
      <div className="flex items-center justify-between border-b border-primary-teal/10 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-primary-teal animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-primary-teal uppercase">
            LIVE_IMPACT_DASHBOARD
          </span>
        </div>
        <div className="text-[9px] font-mono text-text-muted">
          SIGNAL: ACTIVE // FEED: OK
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Projects Completed */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-card-surf border border-primary-teal/15 p-4 rounded-lg flex flex-col justify-between"
        >
          <div>
            <span className="text-[9px] font-mono text-text-muted uppercase">SYS_PROJECTS</span>
            <h3 className="text-2xl font-display font-bold text-primary-teal mt-1">
              {animatedVals.projects}+
            </h3>
          </div>
          <p className="text-[10px] text-text-muted mt-2">Projects Completed</p>
        </motion.div>

        {/* Campaigns Executed */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-card-surf border border-primary-teal/15 p-4 rounded-lg flex flex-col justify-between"
        >
          <div>
            <span className="text-[9px] font-mono text-text-muted uppercase">SYS_CAMPAIGNS</span>
            <h3 className="text-2xl font-display font-bold text-soft-cyan mt-1">
              {animatedVals.campaigns}+
            </h3>
          </div>
          <p className="text-[10px] text-text-muted mt-2">Campaigns Executed</p>
        </motion.div>

        {/* Industries Served */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-card-surf border border-primary-teal/15 p-4 rounded-lg flex flex-col justify-between"
        >
          <div>
            <span className="text-[9px] font-mono text-text-muted uppercase">SYS_INDUSTRIES</span>
            <h3 className="text-2xl font-display font-bold text-text-primary mt-1">
              {animatedVals.industries}+
            </h3>
          </div>
          <p className="text-[10px] text-text-muted mt-2">Industries Served</p>
        </motion.div>

        {/* Best CPL Card */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-card-surf border border-primary-teal/30 p-4 rounded-lg flex flex-col justify-between shadow-glow shadow-primary-teal/5 relative group"
        >
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono text-primary-teal uppercase">SYS_BEST_CPL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary-teal mt-1">₹32</h3>
          </div>
          <div>
            <p className="text-[10px] text-text-muted mt-2">Real Estate Leads</p>
            <span className="text-[8px] font-mono text-text-muted/60 block">Verified Snapshot</span>
          </div>
        </motion.div>
      </div>

      {/* Row 2: Campaign Ratio performance & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Ratio metrics */}
        <div className="lg:col-span-1 space-y-3">
          <div className="bg-card-surf/60 border border-primary-teal/10 p-3 rounded-lg flex items-center justify-between">
            <div>
              <span className="text-[8px] font-mono text-text-muted">BUDGET_TO_LEAD_INR</span>
              <p className="text-xs font-mono font-bold text-text-primary mt-0.5">₹5,000 → 87 Leads</p>
            </div>
            <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/10 px-1.5 py-0.5 rounded">
              91% OK
            </span>
          </div>

          <div className="bg-card-surf/60 border border-primary-teal/10 p-3 rounded-lg flex items-center justify-between">
            <div>
              <span className="text-[8px] font-mono text-text-muted">BUDGET_TO_LEAD_USD</span>
              <p className="text-xs font-mono font-bold text-text-primary mt-0.5">$100 → 19 Leads</p>
            </div>
            <span className="text-[9px] font-mono text-soft-cyan bg-soft-cyan/10 px-1.5 py-0.5 rounded">
              CALLS_BOOKED
            </span>
          </div>

          <div className="bg-card-surf/60 border border-primary-teal/10 p-3 rounded-lg flex items-center justify-between">
            <div>
              <span className="text-[8px] font-mono text-text-muted">FUNNEL_CONVERSION_RATIO</span>
              <p className="text-xs font-mono font-bold text-text-primary mt-0.5">324 Leads / 11 Deals</p>
            </div>
            <span className="text-[9px] font-mono text-primary-teal bg-primary-teal/10 px-1.5 py-0.5 rounded">
              SCALE_MODE
            </span>
          </div>
        </div>

        {/* Live Vector Line Chart */}
        <div className="lg:col-span-2 bg-card-surf/40 border border-primary-teal/10 p-4 rounded-lg flex flex-col justify-between min-h-[140px] relative overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-mono text-text-muted">RETARGETING_CONVERSION_CURVE</span>
            <span className="text-[9px] font-mono text-primary-teal">ROI: +340%</span>
          </div>

          {/* SVG Line Graph */}
          <div className="w-full h-20 relative">
            <svg className="w-full h-full" viewBox="0 0 300 80">
              {/* Grid guide lines */}
              <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(94, 234, 212, 0.05)" strokeDasharray="3 3" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(94, 234, 212, 0.05)" strokeDasharray="3 3" />
              
              {/* Linear Chart Path */}
              <motion.path
                d="M 0 70 L 40 65 L 80 50 L 120 55 L 160 30 L 200 35 L 240 15 L 280 8 L 300 5"
                fill="none"
                stroke="#5EEAD4"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Cyan Secondary Curve */}
              <motion.path
                d="M 0 75 L 50 68 L 100 62 L 150 48 L 200 42 L 250 25 L 300 12"
                fill="none"
                stroke="#67E8F9"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Glowing Dots */}
              <motion.circle
                cx="280"
                cy="8"
                r="4"
                fill="#5EEAD4"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </svg>
          </div>

          {/* Character Click Interactivity inside dashboard footer */}
          <div className="flex items-center justify-between border-t border-primary-teal/5 pt-2 mt-2">
            <span className="text-[8px] font-mono text-text-muted">SYS_ONLINE: VERIFIED_METRICS</span>
            <div className="flex items-center gap-2">
              
              <span className="text-[9px] font-mono text-primary-teal">Tap Click to inspect</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

