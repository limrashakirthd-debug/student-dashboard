import { Variants } from "framer-motion";

// Page-level container — staggers children
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Individual bento tile entrance
export const tileVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

// Sidebar nav item highlight (used with layoutId)
export const navHighlightVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Progress bar fill animation
export const progressVariants = (target: number) => ({
  initial: { width: "0%" },
  animate: {
    width: `${target}%`,
    transition: {
      duration: 1.2,
      ease: [0.34, 1.56, 0.64, 1], // custom spring-ish ease
      delay: 0.5,
    },
  },
});

// Skeleton shimmer pulse
export const skeletonVariants: Variants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
