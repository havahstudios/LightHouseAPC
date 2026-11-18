import Link from "next/link";
import PostForm from "../_components/PostForm";

export default function NewPostPage() {
  return (
    <>
      <Link href="/admin/blog" className="text-sm text-beacon-dark hover:text-ink">← All posts</Link>
      <h1 className="mt-3 mb-8 text-3xl font-light md:text-4xl">Write a post</h1>
      <PostForm post={null} />
    </>
  );
}
