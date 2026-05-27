"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<"snake" | "click" | "online" | "exit">("snake");
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Check mobile & session storage on mount
  useEffect(() => {
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    const hasVisited = sessionStorage.getItem("rnc_visited");
    if (hasVisited) {
      // Skip loader on repeat visits
      onComplete();
      setStage("exit");
      return;
    }

    // Set visited for future sessions
    sessionStorage.setItem("rnc_visited", "true");
  }, [onComplete]);

  // Snake game animation loop
  useEffect(() => {
    if (stage !== "snake" || isMobile) {
      if (isMobile) {
        // Fast-track on mobile
        const timer = setTimeout(() => {
          setStage("click");
        }, 600);
        return () => clearTimeout(timer);
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Define pixel grid
    const cols = 30;
    const rows = 12;
    const cellSize = 10;
    canvas.width = cols * cellSize;
    canvas.height = rows * cellSize;

    // Path coordinates for "R N C" letter pixels
    const rncPoints = [
      // R
      { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
      { x: 3, y: 4 }, { x: 5, y: 4 },
      { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 },
      { x: 3, y: 6 }, { x: 5, y: 6 },
      { x: 3, y: 7 }, { x: 5, y: 7 },
      // N
      { x: 9, y: 3 }, { x: 13, y: 3 },
      { x: 9, y: 4 }, { x: 10, y: 4 }, { x: 13, y: 4 },
      { x: 9, y: 5 }, { x: 11, y: 5 }, { x: 13, y: 5 },
      { x: 9, y: 6 }, { x: 12, y: 6 }, { x: 13, y: 6 },
      { x: 9, y: 7 }, { x: 13, y: 7 },
      // C
      { x: 17, y: 3 }, { x: 18, y: 3 }, { x: 19, y: 3 },
      { x: 17, y: 4 },
      { x: 17, y: 5 },
      { x: 17, y: 6 },
      { x: 17, y: 7 }, { x: 18, y: 7 }, { x: 19, y: 7 },
    ];

    let snake = [
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
    ];

    let eatenPoints: typeof rncPoints = [];
    let currentTargetIndex = 0;
    let frames = 0;
    let animationFrameId: number;

    const gameLoop = () => {
      frames++;
      // Speed up loop
      if (frames % 2 === 0) {
        // Find next target point to "eat"
        if (currentTargetIndex < rncPoints.length) {
          const target = rncPoints[currentTargetIndex];
          const head = snake[snake.length - 1];

          let nextX = head.x;
          let nextY = head.y;

          // Simple pathfinding to target
          if (head.x < target.x) nextX++;
          else if (head.x > target.x) nextX--;
          else if (head.y < target.y) nextY++;
          else if (head.y > target.y) nextY--;

          const newHead = { x: nextX, y: nextY };
          snake.push(newHead);

          // If reached target, eat it
          if (newHead.x === target.x && newHead.y === target.y) {
            eatenPoints.push(target);
            currentTargetIndex++;
          } else {
            snake.shift();
          }
        } else {
          // Finished eating all blocks, transition stage
          cancelAnimationFrame(animationFrameId);
          setTimeout(() => {
            setStage("click");
          }, 200);
          return;
        }
      }

      // Draw gameboard
      ctx.fillStyle = "#070B0F";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(94, 234, 212, 0.03)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i <= rows; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
      }

      // Draw food targets (uneaten RNC pixels)
      ctx.fillStyle = "rgba(94, 234, 212, 0.25)";
      for (let i = currentTargetIndex; i < rncPoints.length; i++) {
        const pt = rncPoints[i];
        ctx.fillRect(pt.x * cellSize + 1, pt.y * cellSize + 1, cellSize - 2, cellSize - 2);
      }

      // Draw eaten letters (glow teal)
      ctx.fillStyle = "#5EEAD4";
      eatenPoints.forEach(pt => {
        ctx.fillRect(pt.x * cellSize + 1, pt.y * cellSize + 1, cellSize - 2, cellSize - 2);
      });

      // Draw Snake
      snake.forEach((pt, idx) => {
        ctx.fillStyle = idx === snake.length - 1 ? "#67E8F9" : "#5EEAD4";
        ctx.fillRect(pt.x * cellSize + 1, pt.y * cellSize + 1, cellSize - 2, cellSize - 2);
      });

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Safety timeout to prevent loading lock
    const safetyTimeout = setTimeout(() => {
      cancelAnimationFrame(animationFrameId);
      setStage("click");
    }, 1500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(safetyTimeout);
    };
  }, [stage, isMobile]);

  // Stage transition timers
  useEffect(() => {
    if (stage === "click") {
      const timer = setTimeout(() => {
        setStage("online");
      }, 500);
      return () => clearTimeout(timer);
    }

    if (stage === "online") {
      const timer = setTimeout(() => {
        setStage("exit");
        // Trigger complete callback
        setTimeout(() => {
          onComplete();
        }, 300);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  if (stage === "exit") return null;

  return (
    <div className="fixed inset-0 bg-main-bg z-50 flex flex-col items-center justify-center font-mono">
      {/* Background patterns */}
      <div className="absolute inset-0 hermes-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

      <div className="w-[320px] max-w-full flex flex-col items-center p-6 border border-primary-teal/20 bg-panel-surf/80 backdrop-blur-md rounded-xl shadow-2xl relative overflow-hidden">
        {/* Scanning bar */}
        <div className="absolute inset-0 scanning-bar pointer-events-none opacity-40" />

        {/* Console Header */}
        <div className="w-full flex items-center justify-between border-b border-primary-teal/20 pb-3 mb-6">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary-teal animate-pulse" />
            <span className="text-[10px] text-primary-teal/80">RNC_OS_V1.0</span>
          </div>
          <span className="text-[9px] text-text-muted">BOOT_MODE</span>
        </div>

        {/* Render Snake Canvas (skip on mobile) */}
        {!isMobile && stage === "snake" ? (
          <div className="w-[200px] h-[80px] flex items-center justify-center border border-primary-teal/10 bg-main-bg rounded-lg mb-6 p-2">
            <canvas ref={canvasRef} className="opacity-90" />
          </div>
        ) : (
          <div className="h-[80px] flex items-center justify-center mb-6">
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-display font-bold tracking-widest text-primary-teal"
            >
              RISE N CLICKS
            </motion.h1>
          </div>
        )}

        {/* Boot Status text */}
        <div className="w-full text-center h-8 flex flex-col items-center justify-center mb-4">
          {stage === "snake" && (
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-primary-teal">Booting growth system</span>
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-100">.</span>
              <span className="animate-bounce delay-200">.</span>
            </div>
          )}
          {stage === "click" && (
            <div className="flex items-center gap-2">
              
              <span className="text-[11px] text-soft-cyan">Click active: Connecting...</span>
            </div>
          )}
          {stage === "online" && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12px] text-primary-teal font-bold bg-primary-teal/10 px-4 py-1 border border-primary-teal/30 rounded"
            >
              ✓ SYSTEM ONLINE
            </motion.div>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-main-bg h-1 rounded overflow-hidden border border-primary-teal/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: stage === "snake" ? "70%" : stage === "click" ? "90%" : "100%"
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-primary-teal to-soft-cyan"
          />
        </div>
      </div>
    </div>
  );
}

