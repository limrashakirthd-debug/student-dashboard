"use client";

import {
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  Cpu,
  BookOpen,
  Braces,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  Cpu,
  BookOpen,
  Braces,
};

// Returns the Lucide component for a given icon_name string
// Falls back to BookOpen if the name isn't in our map
export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? BookOpen;
}
