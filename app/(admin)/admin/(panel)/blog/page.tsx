import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { listAllPosts } from "@/lib/cms/blogAdmin";

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });

// All blog posts, newest edits first.
export default async function AdminBlogList() {
  const { supabase } = await requireAdmin();
  const posts = await listAllPosts(supabase);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-light md:text-4xl">Blog</h1>
          <p className="mt-2 text-stone">Published posts appear at lighthouselawapc.com/blog.</p>
        </div>
        <Link href="/admin/blog/new" className="rounded-[3px] bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy">
          Write a post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="mt-10 rounded-[4px] border border-dashed border-line bg-white p-10 text-center text-stone">
          No posts yet. Click “Write a post” to add your first one.
        </p>
      ) : (
        <ul className="mt-10 divide-y divide-line rounded-[4px] border border-line bg-white">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/admin/blog/${post.id}`} className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 transition-colors hover:bg-sand/60">
                <span>
                  <span className="block font-serif text-lg text-ink">{post.title}</span>
                  <span className="mt-1 block text-xs text-stone">Last edited {dateFormat.format(new Date(post.updated_at))}</span>
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    post.published ? "bg-emerald-50 text-emerald-800" : "bg-sand text-stone"
                  }`}
                >
                  {post.published ? "Published" : "Draft"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
