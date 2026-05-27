// Types for the Supabase tables

export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export interface UserProfile {
  name: string;
  streak: number;
  avatar_url?: string;
}

// Framer Motion variant helpers
export interface StaggerConfig {
  delay?: number;
  duration?: number;
}
