import { getCourses } from "@/lib/supabase/queries";
import { HeroTile } from "./HeroTile";
import { CourseCard } from "./CourseCard";
import { ActivityTile } from "./ActivityTile";
import { ErrorTile } from "../ui/ErrorTile";
import { BentoGridClient } from "./BentoGridClient";

// This is a Server Component — data is fetched here on the server.
// The client wrapper handles entrance animations.
export async function BentoGrid() {
  const { data: courses, error } = await getCourses();

  return (
    <BentoGridClient>
      {/* Hero tile — spans full width on mobile, 2 cols on desktop */}
      <HeroTile
        name="Alex"
        streak={12}
        className="col-span-1 md:col-span-2 lg:col-span-2"
      />

      {/* Activity tile */}
      <ActivityTile className="col-span-1 md:col-span-1 lg:col-span-1" />

      {/* Error state if Supabase is unreachable */}
      {error && (
        <ErrorTile
          message={error}
          className="col-span-1 md:col-span-3"
        />
      )}

      {/* Dynamic course tiles from Supabase */}
      {courses?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}

      {/* Empty state if no courses are seeded yet */}
      {!error && courses?.length === 0 && (
        <div className="col-span-1 md:col-span-3 text-center py-12 text-zinc-600 text-sm">
          No courses found. Add some rows to your Supabase{" "}
          <code className="font-mono text-zinc-500">courses</code> table.
        </div>
      )}
    </BentoGridClient>
  );
}
