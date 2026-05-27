import { CoursesSkeleton } from "@/components/ui/CoursesSkeleton";

// This file activates Next.js's built-in loading UI
// shown while the dashboard page suspends during data fetching
export default function Loading() {
  return <CoursesSkeleton />;
}
