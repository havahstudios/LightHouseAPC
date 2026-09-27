-- Creates the table that stores "free consultation" form submissions.
-- Run this once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run.

create table if not exists public.consultation_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null default '',
  message text not null,
  source text not null,
  created_at timestamptz not null default now()
);

-- Row Level Security ON with no policies = nobody can read or write this table from the
-- browser. Only the website's server (using the secret key) can add rows.
alter table public.consultation_requests enable row level security;
