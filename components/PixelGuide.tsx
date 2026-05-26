"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ClickState = 
  | "idle" 
  | "blink" 
  | "bounce" 
  | "walk" 
  | "carry" 
  | "drop" 
  | "fix" 
  | "tap" 
  | "point" 
  | "celebrate";

interface PixelGuideProps {
  state?: ClickState;
  message?: string;
  className?: string;
  direction?: "left" | "right";
  size?: number;
  interactive?: boolean;
}

export default function PixelGuide({
  state = "idle",
  message,
  className = "",
  direction = "right",
  size = 64,
  interactive = true,
}: PixelGuideProps) {
  const [currentMessage, setCurrentMessage] = useState<string | undefined>(message);
  const [internalState, setInternalState] = useState<ClickState>(state);

  // Sync internal state with prop
  useEffect(() => {
    setInternalState(state);
  }, [state]);

  // Sync message with prop
  useEffect(() => {
    setCurrentMessage(message);
  }, [message]);

  // Random Idle behaviors (blinking)
  useEffect(() => {
    if (state !== "idle") return;
    
    const interval = setInterval(() => {
      setInternalState("blink");
      setTimeout(() => {
        setInternalState("idle");
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [state]);

  // Click handler to trigger action
  const handleCharacterClick = () => {
    if (!interactive) return;
    const randomStates: ClickState[] = ["bounce", "celebrate", "walk", "point"];
    const selectState = randomStates[Math.floor(Math.random() * randomStates.length)];
    
    setInternalState(selectState);
    
    // Random microcopy comments
    const quotes = [
      "No fluff detected.",
      "Tracking what matters.",
      "Lead leak found.",
      "System online.",
      "Proof, not promises.",
      "Build mode active.",
      "Clicks are rising!",
      "Funnel leak patched.",
      "Vanity metrics removed."
    ];
    const selectQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentMessage(selectQuote);

    setTimeout(() => {
      setInternalState(state);
      // Keep quote visible for a couple of seconds
      setTimeout(() => {
        setCurrentMessage(undefined);
      }, 2500);
    }, 1500);
  };

  // Generate SVG elements based on state
  const renderClickSVG = () => {
    const isBlinking = internalState === "blink";
    const isCarrying = internalState === "carry";
    const isPointing = internalState === "point";
    const isFixing = internalState === "fix";
    const isCelebrating = internalState === "celebrate";

    // Standard Cream: #F5F5F0
    // Dark Body: #101820 or #1E293B
    // Primary Teal: #5EEAD4
    // Secondary Soft Cyan: #67E8F9

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ${direction === "left" ? "scale-x-[-1]" : ""}`}
      >
        {/* Antennas / Signal Indicator */}
        <rect x="15" y="2" width="2" height="2" fill="#5EEAD4" />
        <rect x="15" y="4" width="2" height="2" fill="#67E8F9" className={internalState === "idle" ? "animate-pulse" : ""} />
        
        {/* Core Block Head */}
        <rect x="8" y="6" width="16" height="16" fill="#101820" rx="1" stroke="#5EEAD4" strokeWidth="1" />
        
        {/* Screen/Faceplate Area */}
        <rect x="10" y="8" width="12" height="12" fill="#070B0F" rx="0.5" />
        
        {/* Face Screen Details (Pixel grid style) */}
        <rect x="11" y="9" width="10" height="1" fill="rgba(94, 234, 212, 0.15)" />
        <rect x="11" y="11" width="10" height="1" fill="rgba(94, 234, 212, 0.15)" />

        {/* Eyes (Blinking vs Open) */}
        {isBlinking ? (
          <>
            {/* Blinking eyes (horizontal lines) */}
            <rect x="11" y="12" width="3" height="1" fill="#5EEAD4" />
            <rect x="18" y="12" width="3" height="1" fill="#5EEAD4" />
          </>
        ) : isCelebrating ? (
          <>
            {/* Happy eyes (v-shapes/curved) */}
            <rect x="11" y="12" width="1" height="2" fill="#5EEAD4" />
            <rect x="13" y="12" width="1" height="2" fill="#5EEAD4" />
            <rect x="12" y="11" width="1" height="1" fill="#5EEAD4" />
            
            <rect x="18" y="12" width="1" height="2" fill="#5EEAD4" />
            <rect x="20" y="12" width="1" height="2" fill="#5EEAD4" />
            <rect x="19" y="11" width="1" height="1" fill="#5EEAD4" />
          </>
        ) : (
          <>
            {/* Regular eyes (squares) */}
            <rect x="11" y="11" width="2" height="2" fill="#5EEAD4" />
            <rect x="19" y="11" width="2" height="2" fill="#5EEAD4" />
            {/* Pupils (soft cyan) */}
            <rect x="12" y="12" width="1" height="1" fill="#67E8F9" />
            <rect x="20" y="12" width="1" height="1" fill="#67E8F9" />
          </>
        )}

        {/* Mouth */}
        {isCelebrating ? (
          <rect x="14" y="16" width="4" height="2" fill="#67E8F9" />
        ) : isFixing ? (
          <rect x="15" y="16" width="2" height="1" fill="#F87171" />
        ) : (
          <rect x="14" y="16" width="4" height="1" fill="#5EEAD4" />
        )}

        {/* Body/Torso */}
        <rect x="10" y="22" width="12" height="6" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
        
        {/* Core Heart Light */}
        <rect x="15" y="24" width="2" height="2" fill={isCelebrating ? "#5EEAD4" : "#67E8F9"} className="animate-pulse" />

        {/* Arms */}
        {isCarrying ? (
          <>
            {/* Arms raised up */}
            <rect x="7" y="16" width="2" height="7" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
            <rect x="23" y="16" width="2" height="7" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
          </>
        ) : isPointing ? (
          <>
            {/* Right arm pointing */}
            <rect x="7" y="23" width="2" height="4" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
            <rect x="23" y="23" width="7" height="2" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
            {/* Pointing hand indicator */}
            <rect x="30" y="23" width="1" height="2" fill="#5EEAD4" />
          </>
        ) : isFixing ? (
          <>
            {/* Hammering/wrench action */}
            <rect x="7" y="23" width="2" height="4" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
            {/* Holding tool (coral color) */}
            <rect x="23" y="21" width="3" height="3" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
            <rect x="25" y="18" width="2" height="4" fill="#F87171" />
          </>
        ) : (
          <>
            {/* Standard arms at sides */}
            <rect x="7" y="23" width="2" height="4" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
            <rect x="23" y="23" width="2" height="4" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
          </>
        )}

        {/* Legs / Feet */}
        <rect x="11" y="28" width="3" height="3" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />
        <rect x="18" y="28" width="3" height="3" fill="#101820" stroke="#5EEAD4" strokeWidth="1" />

        {/* State specific items (Blocks to carry or drop) */}
        {isCarrying && (
          <g>
            {/* Lead Block / Word block */}
            <rect x="9" y="1" width="14" height="4" fill="#070B0F" stroke="#5EEAD4" strokeWidth="1" />
            <text x="16" y="4.5" fill="#5EEAD4" fontSize="3" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SELL</text>
          </g>
        )}
      </svg>
    );
  };

  // Set framer motion animation states
  const getFramerAnimation = (): any => {
    switch (internalState) {
      case "bounce":
      case "celebrate":
        return {
          y: [0, -10, 0],
          transition: { repeat: 3, duration: 0.4 },
        };
      case "walk":
        return {
          x: [0, -8, 8, 0],
          y: [0, -2, -2, 0],
          transition: { repeat: 1, duration: 0.8 },
        };
      case "fix":
        return {
          rotate: [0, -15, 10, -15, 0],
          transition: { repeat: 2, duration: 0.5 },
        };
      case "idle":
      default:
        return {
          y: [0, -2, 0],
          transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
        };
    }
  };

  return (
    <div className={`relative flex items-center gap-3 ${className}`}>
      {/* Dialogue Speech Bubble */}
      <AnimatePresence>
        {currentMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20 px-3 py-1.5 bg-panel-surf border border-primary-teal/40 rounded-lg shadow-lg text-[10px] text-primary-teal font-mono whitespace-nowrap"
          >
            <div className="relative">
              {currentMessage}
              {/* Bubble Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-panel-surf border-r border-b border-primary-teal/40 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click Interactive Container */}
      <motion.div
        animate={getFramerAnimation()}
        onClick={handleCharacterClick}
        className={interactive ? "cursor-pointer select-none hover:scale-105 active:scale-95 transition-transform duration-200" : ""}
        style={{ width: size, height: size }}
      >
        {renderClickSVG()}
      </motion.div>
    </div>
  );
}
