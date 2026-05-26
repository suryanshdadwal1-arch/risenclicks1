"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-teal/20 bg-secondary-bg/60 relative overflow-hidden mt-auto">
      {/* Background decoration */}
      <div className="absolute inset-0 hermes-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Footer Top Dashboard Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-primary-teal/10 pb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border border-primary-teal/30 flex items-center justify-center bg-card-surf">
                <span className="text-[8px] font-mono text-primary-teal font-bold">RNC</span>
              </div>
              <span className="font-display font-bold text-text-primary tracking-wide">Rise n Clicks</span>
            </div>
            <p className="text-xs text-text-muted max-w-sm leading-relaxed">
              AI-enabled creative systems lab that turns attention into leads, users, bookings, and measurable revenue through conversion-focused performance marketing.
            </p>
            <div className="text-[10px] font-mono text-primary-teal bg-primary-teal/5 border border-primary-teal/10 rounded px-2.5 py-1 inline-block">
              // Core positioning: Creative Systems Lab
            </div>
          </div>

          {/* Directory Links Col */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-4">// System Directory</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-xs text-text-muted hover:text-primary-teal transition-colors flex items-center gap-1">
                  Home <ArrowUpRight size={10} className="text-text-muted/40" />
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-xs text-text-muted hover:text-primary-teal transition-colors flex items-center gap-1">
                  Creative Archive <ArrowUpRight size={10} className="text-text-muted/40" />
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-xs text-text-muted hover:text-primary-teal transition-colors flex items-center gap-1">
                  Results Snapshot <ArrowUpRight size={10} className="text-text-muted/40" />
                </Link>
              </li>
              <li>
                <Link href="/lab" className="text-xs text-text-muted hover:text-primary-teal transition-colors flex items-center gap-1">
                  Thinking Lab <ArrowUpRight size={10} className="text-text-muted/40" />
                </Link>
              </li>
              <li>
                <Link href="/build" className="text-xs text-text-muted hover:text-primary-teal transition-colors flex items-center gap-1">
                  Start Build <ArrowUpRight size={10} className="text-text-muted/40" />
                </Link>
              </li>
            </ul>
          </div>

          {/* System Status Col */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-text-muted mb-4">// Status Dashboard</h4>
            <div className="space-y-3 font-mono text-[10px] text-text-muted">
              <div className="flex items-center justify-between border-b border-primary-teal/10 pb-1.5">
                <span>OS_STATUS:</span>
                <span className="text-primary-teal">ONLINE</span>
              </div>
              <div className="flex items-center justify-between border-b border-primary-teal/10 pb-1.5">
                <span>VANITY_METRICS:</span>
                <span className="text-coral-warn">REMOVED</span>
              </div>
              <div className="flex items-center justify-between border-b border-primary-teal/10 pb-1.5">
                <span>FLUFF_CHECK:</span>
                <span className="text-primary-teal">0% DETECTED</span>
              </div>
              <div className="flex items-center justify-between">
                <span>TRACKING_MODE:</span>
                <span className="text-soft-cyan">REVENUE_FIRST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-text-muted">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>© {currentYear} Rise n Clicks. All rights reserved.</span>
            <span className="hidden sm:inline text-primary-teal/20">|</span>
            <span className="text-text-muted/80">You Build It. We Make It Sell.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-teal/60">Signal: Stable</span>
            <span className="text-primary-teal/20">|</span>
            <span>Loc: Global / AI Visibile</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
