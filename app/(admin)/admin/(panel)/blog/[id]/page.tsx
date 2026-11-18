import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { getPost } from "@/lib/cms/blogAdmin";
import DeletePostButton from "../_components/DeletePostButton";
import PostForm from "../_components/PostForm";

export default async function EditPostPage({ params, searchParams }: PageProps<"/admin/blog/[id]">) {
  const { id } = await params;
  const { saved } = await searchParams;
  const { supabase } = await requireAdmin();
  const post = await getPost(supabase, id);
  if (!post) notFound();

  return (
    <>
      <Link href="/admin/blog" className="text-sm text-beacon-dark hover:text-ink">← All posts</Link>
      <h1 className="mt-3 mb-8 text-3xl font-light md:text-4xl">Edit post</h1>
      <PostForm post={post} justCreated={saved === "1"} />
      <div className="mt-14 border-t border-line pt-8">
        <DeletePostButton id={post.id} />
      </div>
    </>
  );
}
