-- Lighthouse Law: content the firm edits from /admin (blog posts, recent results, About page text).
-- Run once in Supabase: SQL Editor -> New query -> paste this file -> Run.
--
-- Who can do what (enforced by Row Level Security):
--   * Website visitors can read published posts/results and the About page text. Nothing else.
--   * Logged-in users listed in `admins` can add, edit and delete content and upload blog photos.
--   * Nobody can add themselves to `admins` from the website; that's done by hand (see the bottom).

-- ---------------------------------------------------------------------------
-- Admins
-- ---------------------------------------------------------------------------
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);
alter table public.admins enable row level security;

-- True when the logged-in user is on the admin list. "security definer" lets it read
-- the admins table without exposing that table to visitors.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

drop policy if exists "Admins can see the admin list" on public.admins;
create policy "Admins can see the admin list" on public.admins
  for select to authenticated using (public.is_admin());

grant select on public.admins to authenticated;

-- Keeps `updated_at` current on every edit.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Blog posts
-- ---------------------------------------------------------------------------
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null check (char_length(title) between 1 and 200),
  summary text not null default '' check (char_length(summary) <= 400),
  body text not null default '',
  cover_image text,
  practice_slug text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.blog_posts enable row level security;

drop trigger if exists blog_posts_updated_at on public.blog_posts;
create trigger blog_posts_updated_at before update on public.blog_posts
  for each row execute function public.set_updated_at();

drop policy if exists "Visitors read published posts" on public.blog_posts;
create policy "Visitors read published posts" on public.blog_posts
  for select to anon, authenticated using (published or public.is_admin());
drop policy if exists "Admins add posts" on public.blog_posts;
create policy "Admins add posts" on public.blog_posts
  for insert to authenticated with check (public.is_admin());
drop policy if exists "Admins edit posts" on public.blog_posts;
create policy "Admins edit posts" on public.blog_posts
  for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "Admins delete posts" on public.blog_posts;
create policy "Admins delete posts" on public.blog_posts
  for delete to authenticated using (public.is_admin());

grant select on public.blog_posts to anon, authenticated;
grant insert, update, delete on public.blog_posts to authenticated;

-- ---------------------------------------------------------------------------
-- Recent results
-- ---------------------------------------------------------------------------
create table if not exists public.case_results (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  amount text not null check (char_length(amount) between 1 and 40),
  case_type text not null check (char_length(case_type) between 1 and 120),
  summary text not null default '' check (char_length(summary) <= 300),
  body text not null default '',
  sort_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.case_results enable row level security;

drop trigger if exists case_results_updated_at on public.case_results;
create trigger case_results_updated_at before update on public.case_results
  for each row execute function public.set_updated_at();

drop policy if exists "Visitors read published results" on public.case_results;
create policy "Visitors read published results" on public.case_results
  for select to anon, authenticated using (published or public.is_admin());
drop policy if exists "Admins add results" on public.case_results;
create policy "Admins add results" on public.case_results
  for insert to authenticated with check (public.is_admin());
drop policy if exists "Admins edit results" on public.case_results;
create policy "Admins edit results" on public.case_results
  for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "Admins delete results" on public.case_results;
create policy "Admins delete results" on public.case_results
  for delete to authenticated using (public.is_admin());

grant select on public.case_results to anon, authenticated;
grant insert, update, delete on public.case_results to authenticated;

-- ---------------------------------------------------------------------------
-- Editable page text (the About page). One row per section, e.g. ('about', 'who-we-are').
-- Sections without a row show the website's built-in text.
-- ---------------------------------------------------------------------------
create table if not exists public.page_sections (
  page text not null,
  key text not null,
  heading text not null default '',
  body text not null default '',
  updated_at timestamptz not null default now(),
  primary key (page, key)
);
alter table public.page_sections enable row level security;

drop trigger if exists page_sections_updated_at on public.page_sections;
create trigger page_sections_updated_at before update on public.page_sections
  for each row execute function public.set_updated_at();

drop policy if exists "Visitors read page text" on public.page_sections;
create policy "Visitors read page text" on public.page_sections
  for select to anon, authenticated using (true);
drop policy if exists "Admins add page text" on public.page_sections;
create policy "Admins add page text" on public.page_sections
  for insert to authenticated with check (public.is_admin());
drop policy if exists "Admins edit page text" on public.page_sections;
create policy "Admins edit page text" on public.page_sections
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

grant select on public.page_sections to anon, authenticated;
grant insert, update on public.page_sections to authenticated;

-- ---------------------------------------------------------------------------
-- Blog photos. Public to view (they appear on public blog pages); only admins can upload.
-- Max 5 MB, JPG/PNG/WebP only.
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('blog-images', 'blog-images', true, 5242880, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Admins list blog images" on storage.objects;
create policy "Admins list blog images" on storage.objects
  for select to authenticated using (bucket_id = 'blog-images' and public.is_admin());
drop policy if exists "Admins upload blog images" on storage.objects;
create policy "Admins upload blog images" on storage.objects
  for insert to authenticated with check (bucket_id = 'blog-images' and public.is_admin());
drop policy if exists "Admins replace blog images" on storage.objects;
create policy "Admins replace blog images" on storage.objects
  for update to authenticated using (bucket_id = 'blog-images' and public.is_admin());
drop policy if exists "Admins delete blog images" on storage.objects;
create policy "Admins delete blog images" on storage.objects
  for delete to authenticated using (bucket_id = 'blog-images' and public.is_admin());

-- ---------------------------------------------------------------------------
-- Making someone an admin (run separately, after creating their login in
-- Authentication -> Users -> Add user). Replace the email address:
--
--   insert into public.admins (user_id, email)
--   select id, email from auth.users where email = 'person@example.com';
-- ---------------------------------------------------------------------------
