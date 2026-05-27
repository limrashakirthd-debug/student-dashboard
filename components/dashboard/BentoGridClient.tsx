"use client";

import { motion } from "framer-motion";
import { containerVariants, tileVariants } from "@/lib/motion-variants";
import { Children } from "react";

interface Props {
  children: React.ReactNode;
}

// Wraps each child in a motion.div for staggered entrance
// Separating this from BentoGrid keeps the Server Component clean
export function BentoGridClient({ children }: Props) {
  const items = Children.toArray(children);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-6 pb-24 md:pb-6"
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={tileVariants}>
          {child}
        </motion.div>
      ))}
    </motion.section>
  );
}
