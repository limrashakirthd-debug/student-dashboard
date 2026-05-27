-- Run this in your Supabase SQL editor to create and seed the courses table

create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null default 'BookOpen',
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security (good practice even on public data)
alter table courses enable row level security;

-- Allow anonymous reads (matches the anon key used in the app)
create policy "Public read access"
  on courses for select
  to anon
  using (true);

-- Seed data
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Code2'),
  ('PostgreSQL & Supabase', 42, 'Database'),
  ('Next.js App Router', 60, 'Layers'),
  ('TypeScript Deep Dive', 88, 'Braces');
