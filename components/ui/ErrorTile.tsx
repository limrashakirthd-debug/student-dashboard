import { AlertTriangle } from "lucide-react";

interface ErrorTileProps {
  message: string;
  className?: string;
}

export function ErrorTile({ message, className = "" }: ErrorTileProps) {
  return (
    <article
      className={`rounded-2xl bg-bg-card border border-red-900/40 p-5 ${className}`}
    >
      <div className="flex items-start gap-3">
        <AlertTriangle
          size={18}
          className="text-red-400 flex-shrink-0 mt-0.5"
        />
        <div>
          <p className="text-sm font-semibold text-red-400 mb-1">
            Failed to load courses
          </p>
          <p className="text-xs text-zinc-500 font-mono">{message}</p>
          <p className="text-xs text-zinc-600 mt-2">
            Check that your Supabase env variables are set correctly and the
            courses table exists.
          </p>
        </div>
      </div>
    </article>
  );
}
