"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  Zap,
  Bell,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "My Courses", icon: BookOpen },
  { id: "progress", label: "Progress", icon: BarChart2 },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <motion.nav
        animate={{ width: collapsed ? 68 : 220 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden md:flex flex-col h-full bg-bg-secondary border-r border-border-subtle relative z-20 overflow-hidden flex-shrink-0"
      >
        {/* Logo area */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-border-subtle">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0">
            <Zap size={16} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-semibold text-white whitespace-nowrap overflow-hidden"
              >
                LearnFlow
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Nav items */}
        <div className="flex-1 px-2 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left group"
              >
                {/* Animated highlight using layoutId — snaps between items */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-highlight"
                    className="absolute inset-0 rounded-lg bg-bg-elevated border border-border-subtle"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  size={17}
                  className={`relative z-10 flex-shrink-0 transition-colors ${
                    isActive ? "text-accent-blue" : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className={`relative z-10 text-sm font-medium whitespace-nowrap ${
                        isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* Bottom area */}
        <div className="px-2 pb-4 space-y-1 border-t border-border-subtle pt-4">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:text-zinc-300 transition-colors">
            <Bell size={17} className="flex-shrink-0" />
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm"
                >
                  Notifications
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Collapse toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <motion.div
              animate={{ rotate: collapsed ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <ChevronLeft size={17} />
            </motion.div>
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm"
                >
                  Collapse
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary border-t border-border-subtle px-4 py-2 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="relative flex flex-col items-center gap-1 px-3 py-1"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-highlight"
                  className="absolute inset-0 rounded-lg bg-bg-elevated"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                size={20}
                className={`relative z-10 ${isActive ? "text-accent-blue" : "text-zinc-500"}`}
              />
              <span
                className={`relative z-10 text-[10px] ${
                  isActive ? "text-white" : "text-zinc-600"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
