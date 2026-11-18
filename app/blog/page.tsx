import type { Metadata } from "next";
import EmptyContent from "@/components/EmptyContent";
import PageBanner from "@/components/PageBanner";
import PostCard from "@/components/PostCard";
import JsonLd from "@/app/practice-areas/_components/JsonLd";
import { listPublishedPosts } from "@/lib/cms/blog";
import { breadcrumbSchema, pageTitle } from "@/lib/seo";
import { photos } from "@/lib/site";

// Posts are written in /admin -> Blog. Saving there refreshes this page right away.
export const revalidate = 300;

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

export const metadata: Metadata = {
  title: pageTitle("California Employment & Injury Law Blog"),
  description:
    "Plain-English articles on California employment law and personal injury: your rights at work, wage claims, accidents and what to do next.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await listPublishedPosts();

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageBanner
        crumbs={crumbs}
        eyebrow="Blog"
        title="Know Your Rights in California"
        lead="Practical, plain-English guides to employment law and personal injury from our trial attorneys."
        image={photos.signing}
      />
      <section className="bg-shell py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {posts.length === 0 ? (
            <EmptyContent
              title="Our first articles are on the way"
              text="We're writing guides on California workers' rights and injury claims. In the meantime, if you have a question about your situation, we're happy to talk it through for free."
            />
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.id}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
