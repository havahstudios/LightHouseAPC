import Link from "next/link";
import { requireAdmin } from "@/lib/auth";

// Admin home: a card for each thing the firm can edit, with quick counts.
export default async function AdminDashboard() {
  const { supabase } = await requireAdmin();
  const [posts, results] = await Promise.all([
    supabase.from("blog_posts").select("published"),
    supabase.from("case_results").select("published"),
  ]);
  const count = (rows: { published: boolean }[] | null) => ({
    total: rows?.length ?? 0,
    live: rows?.filter((r) => r.published).length ?? 0,
  });
  const p = count(posts.data);
  const r = count(results.data);

  const cards = [
    { title: "Blog", text: `${p.live} published · ${p.total - p.live} draft`, href: "/admin/blog", action: "Write a post", actionHref: "/admin/blog/new" },
    { title: "Recent Results", text: `${r.live} published · ${r.total - r.live} draft`, href: "/admin/results", action: "Add a result", actionHref: "/admin/results/new" },
    { title: "About Page", text: "Edit the About page text", href: "/admin/about", action: "Edit text", actionHref: "/admin/about" },
  ];

  return (
    <>
      <h1 className="text-3xl font-light md:text-4xl">Welcome back</h1>
      <p className="mt-2 text-stone">What would you like to update today?</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="flex flex-col rounded-[4px] border border-line border-t-2 border-t-beacon bg-white p-7">
            <h2 className="font-serif text-2xl font-light">{card.title}</h2>
            <p className="mt-2 flex-1 text-sm text-stone">{card.text}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm">
              <Link href={card.actionHref} className="rounded-[3px] bg-ink px-4 py-2.5 font-semibold text-white transition-colors hover:bg-navy">
                {card.action}
              </Link>
              {card.href !== card.actionHref && (
                <Link href={card.href} className="text-beacon-dark transition-colors hover:text-ink">
                  See all
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
