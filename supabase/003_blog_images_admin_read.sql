-- Lets admins "see" blog photos through the storage API, which Supabase needs before it
-- can delete or replace them. (Visitors still view photos through their public links.)
-- Run once in Supabase: SQL Editor -> New query -> paste -> Run.

drop policy if exists "Admins list blog images" on storage.objects;
create policy "Admins list blog images" on storage.objects
  for select to authenticated using (bucket_id = 'blog-images' and public.is_admin());
