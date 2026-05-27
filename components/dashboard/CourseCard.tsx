"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/lib/icon-map";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

// Pastel-ish gradient pairs for card backgrounds — cycles by index
const gradients = [
  "radial-gradient(ellipse at top left, rgba(79,142,247,0.1) 0%, transparent 60%)",
  "radial-gradient(ellipse at top right, rgba(139,92,246,0.1) 0%, transparent 60%)",
  "radial-gradient(ellipse at bottom left, rgba(6,182,212,0.1) 0%, transparent 60%)",
  "radial-gradient(ellipse at top left, rgba(16,185,129,0.1) 0%, transparent 60%)",
];

// Maps progress to a color so the bar changes as you get closer to 100%
function progressColor(value: number) {
  if (value >= 80) return "from-accent-green to-emerald-400";
  if (value >= 50) return "from-accent-blue to-cyan-400";
  return "from-accent-purple to-violet-400";
}

let cardIndex = 0;

export function CourseCard({ course }: CourseCardProps) {
  const Icon = getIcon(course.icon_name);
  const gradientIndex = cardIndex++ % gradients.length;
  const barColor = progressColor(course.progress);

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle p-5 card-glow"
    >
      {/* Subtle gradient mesh background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: gradients[gradientIndex] }}
      />

      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-center mb-4">
          <Icon size={18} className="text-accent-blue" />
        </div>

        {/* Title */}
        <h2 className="text-sm font-semibold text-white mb-1 leading-snug">
          {course.title}
        </h2>
        <p className="text-xs text-zinc-500 mb-4">{course.progress}% complete</p>

        {/* Animated progress bar */}
        <div className="h-1.5 rounded-full bg-bg-elevated overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{
              duration: 1.2,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.4,
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}
