"use client";

import { motion } from "framer-motion";

function SkeletonTile({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      className={`rounded-2xl bg-bg-card border border-border-subtle p-5 ${className}`}
    >
      <div className="h-10 w-10 rounded-xl bg-bg-elevated mb-4" />
      <div className="h-3 w-3/4 rounded-full bg-bg-elevated mb-2" />
      <div className="h-2.5 w-1/2 rounded-full bg-bg-elevated mb-4" />
      <div className="h-1.5 w-full rounded-full bg-bg-elevated" />
    </motion.div>
  );
}

// Full skeleton state shown while Supabase data is in flight
export function CoursesSkeleton() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-6">
      {/* Hero skeleton — wider */}
      <div className="col-span-1 md:col-span-2">
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl bg-bg-card border border-border-subtle p-6 min-h-[160px]"
        >
          <div className="h-3 w-24 rounded-full bg-bg-elevated mb-3" />
          <div className="h-8 w-48 rounded-full bg-bg-elevated mb-6" />
          <div className="h-8 w-36 rounded-full bg-bg-elevated" />
        </motion.div>
      </div>

      {/* Activity skeleton */}
      <SkeletonTile />

      {/* Course card skeletons */}
      {[1, 2, 3, 4].map((i) => (
        <SkeletonTile key={i} />
      ))}
    </section>
  );
}
