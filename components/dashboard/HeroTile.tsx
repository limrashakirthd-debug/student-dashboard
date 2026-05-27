"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

interface HeroTileProps {
  name: string;
  streak: number;
  className?: string;
}

export function HeroTile({ name, streak, className = "" }: HeroTileProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle p-6 min-h-[160px] card-glow ${className}`}
    >
      {/* Background gradient mesh */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(79,142,247,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.12) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10">
        <p className="text-sm text-zinc-500 mb-1 font-mono tracking-wide uppercase">
          Welcome back
        </p>
        <h1 className="text-3xl font-bold gradient-text mb-6">{name} 👋</h1>

        {/* Streak indicator */}
        <div className="flex items-center gap-2 mt-auto">
          <div className="flex items-center gap-2 bg-bg-elevated border border-orange-500/20 rounded-full px-4 py-1.5">
            <Flame size={15} className="text-orange-400" />
            <span className="text-sm font-semibold text-orange-300">
              {streak} day streak
            </span>
          </div>
          <span className="text-xs text-zinc-600">Keep it going!</span>
        </div>
      </div>
    </motion.article>
  );
}
