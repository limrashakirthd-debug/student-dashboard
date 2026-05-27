import { Suspense } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { CoursesSkeleton } from "@/components/ui/CoursesSkeleton";

// This is a Server Component — layout and static shell render immediately.
// The Supabase fetch is isolated inside BentoGrid with a Suspense boundary
// so the page doesn't block on data.
export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative z-10">
        <Suspense fallback={<CoursesSkeleton />}>
          <BentoGrid />
        </Suspense>
      </main>
    </div>
  );
}
