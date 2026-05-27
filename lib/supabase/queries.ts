import { createClient } from "./server";
import type { Course } from "@/types";

// Fetch all active courses from Supabase
// Returns empty array on error so the UI can degrade gracefully
export async function getCourses(): Promise<{
  data: Course[] | null;
  error: string | null;
}> {
  try {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("[getCourses] Supabase error:", error.message);
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[getCourses] Unexpected error:", msg);
    return { data: null, error: msg };
  }
}
