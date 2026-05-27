"use client";

import React from "react";

export default function TextureBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-main-bg text-text-primary overflow-hidden selection:bg-primary-teal/30 selection:text-white">
      
      {/* Layer 1: Hermes-style teal grid — visible structure */}
      <div className="fixed inset-0 hermes-grid pointer-events-none z-0" />

      {/* Layer 2: Dot grid — depth and texture */}
      <div className="fixed inset-0 dot-grid pointer-events-none z-0" />

      {/* Layer 3: Film grain noise */}
      <div className="fixed inset-0 noise-layer pointer-events-none z-0" />

      {/* Layer 4: Scanlines — retro CRT feel */}
      <div className="fixed inset-0 scanlines pointer-events-none z-0 opacity-[0.07]" />

      {/* Layer 5: Soft teal ambient glows */}
      <div className="fixed inset-0 radial-glow-green pointer-events-none z-0" />
      <div className="fixed inset-0 radial-glow-cyan pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
