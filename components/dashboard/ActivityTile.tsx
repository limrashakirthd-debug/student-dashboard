"use client";

import { motion } from "framer-motion";

interface ActivityTileProps {
  className?: string;
}

// Generates a 7x10 mock activity grid (simulates a GitHub-style chart)
function generateActivityData() {
  return Array.from({ length: 70 }, () => Math.floor(Math.random() * 4));
}

const activityData = generateActivityData();

function cellColor(level: number) {
  const colors = [
    "bg-bg-elevated",
    "bg-accent-blue/30",
    "bg-accent-blue/60",
    "bg-accent-blue",
  ];
  return colors[level] ?? colors[0];
}

export function ActivityTile({ className = "" }: ActivityTileProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle p-5 card-glow ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(6,182,212,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
          Weekly Activity
        </p>

        {/* 7-column grid of activity cells */}
        <div className="grid grid-cols-10 gap-1">
          {activityData.map((level, i) => (
            <motion.div
              key={i}
              className={`h-3 w-full rounded-sm ${cellColor(level)}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i, duration: 0.2 }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-zinc-600">Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3].map((l) => (
              <div
                key={l}
                className={`h-2.5 w-2.5 rounded-sm ${cellColor(l)}`}
              />
            ))}
          </div>
          <span className="text-xs text-zinc-600">More</span>
        </div>
      </div>
    </motion.article>
  );
}
