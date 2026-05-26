"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Results", path: "/results" },
    { name: "Lab", path: "/lab" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-main-bg/85 border-b border-primary-teal/20 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded border border-primary-teal/40 overflow-hidden flex items-center justify-center bg-card-surf">
              {/* Fallback typography and image */}
              <img
                src="/assest/logo/ChatGPT Image May 27, 2026, 04_02_25 AM.png"
                alt="RNC Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-[10px] font-mono text-primary-teal font-bold absolute z-10 group-hover:scale-105">RNC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-text-primary group-hover:text-primary-teal transition-colors">
                Rise n Clicks
              </span>
              <span className="text-[9px] font-mono text-text-muted tracking-wider leading-none">
                CREATIVE SYSTEMS LAB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-xs font-mono tracking-wider transition-colors relative py-1 ${
                    isActive ? "text-primary-teal font-medium" : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary-teal"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[9px] font-mono text-primary-teal/80 border border-primary-teal/20 px-2 py-0.5 rounded bg-primary-teal/5">
              SYSTEM ONLINE
            </span>
            <Link
              href="/build"
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary-teal to-soft-cyan text-main-bg text-xs font-display font-bold rounded hover:shadow-glow hover:shadow-primary-teal/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Let’s Build
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 border border-primary-teal/20 text-text-muted hover:text-text-primary rounded bg-card-surf"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-primary-teal/20 bg-secondary-bg/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-sm font-mono tracking-wider transition-colors ${
                      isActive ? "text-primary-teal" : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {isActive ? "> " : ""}
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-primary-teal/10 flex flex-col gap-3">
                <Link
                  href="/build"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-primary-teal to-soft-cyan text-main-bg font-display text-sm font-bold rounded"
                >
                  Let’s Build
                  <ArrowRight size={14} />
                </Link>
                <div className="text-center text-[9px] font-mono text-text-muted">
                  // rnc_status: active_and_online
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
