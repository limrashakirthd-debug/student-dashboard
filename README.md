# Learning Dashboard

A student dashboard built with Next.js 14 (App Router), Supabase, Tailwind CSS, and Framer Motion.

## Getting Started

### 1. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Open the SQL editor and paste + run the contents of `supabase-seed.sql`
3. Copy your project URL and anon key from **Settings → API**

### 2. Configure environment variables

```bash
cp .env.example .env.local
# Fill in your Supabase URL and anon key
```

### 3. Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/dashboard`.

---

## Architecture Notes

### Server / Client Component Split

The course data is fetched in `BentoGrid` (a Server Component), so it runs on the server with zero JS bundle cost on the client. The only reason a component needs `"use client"` is if it uses:
- Framer Motion (`motion.*`) — requires the DOM/browser
- React state (`useState`) — sidebar collapse, active nav item
- Event handlers — hover, click interactions

Everything else (data fetching, error handling, layout) stays server-side.

### Supabase SSR

I used `@supabase/ssr` instead of `@supabase/supabase-js` directly because it correctly handles cookie-based auth in the Next.js App Router. The client in `lib/supabase/server.ts` reads from `next/headers`, so it only runs server-side — the anon key never ships to the browser unnecessarily.

### Animations

- **Page entrance**: `containerVariants` + `tileVariants` with `staggerChildren: 0.08` on the grid wrapper — tiles fade in and translate up one by one.
- **Hover**: `whileHover={{ scale: 1.02 }}` with spring physics (`stiffness: 300, damping: 20`) on every card — feels bouncy rather than linear.
- **Sidebar active state**: `layoutId="sidebar-highlight"` animates the background pill between nav items rather than abruptly swapping classes.
- **Progress bar**: Animated from `0%` → fetched value with a custom spring-ish cubic-bezier, triggered after a 400ms delay so it plays after the card entrance.

All animations use `transform` and `opacity` only — no `width` transitions that could cause layout shifts, except the intentional progress bar which is isolated inside an `overflow-hidden` container.

### Challenges

The main tricky bit was keeping the stagger animation working when children come from a Server Component. The solution was `BentoGridClient`, a thin wrapper that uses `Children.toArray()` to wrap each child in its own `motion.div` with the tile variant — the server-rendered children slot in cleanly without needing to be client components themselves.

---

## Deployment

Push to GitHub and import into [Vercel](https://vercel.com). Add your two env variables in **Project Settings → Environment Variables**.
