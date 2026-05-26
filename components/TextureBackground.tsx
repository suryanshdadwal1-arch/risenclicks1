"use client";

import React from "react";

export default function TextureBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-main-bg text-text-primary overflow-hidden selection:bg-primary-teal/30 selection:text-white">
      {/* Hermes-style grid overlay - 50% opacity texture */}
      <div className="absolute inset-0 hermes-grid pointer-events-none opacity-50 z-0" />
      
      {/* Scanlines overlay for dashboard retro feel */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-10 z-0" />
      
      {/* Soft teal glow radial circles */}
      <div className="absolute inset-0 radial-glow-green pointer-events-none z-0" />
      <div className="absolute inset-0 radial-glow-cyan pointer-events-none z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
