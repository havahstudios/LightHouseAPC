import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import Icon from "@/components/Icon";
import PageBanner from "@/components/PageBanner";
import { formatPostDate } from "@/components/PostCard";
import RichText from "@/components/RichText";
import JsonLd from "@/app/practice-areas/_components/JsonLd";
import { getPublishedPost, listPublishedPosts } from "@/lib/cms/blog";
import { findArea } from "@/lib/content/services";
import { absoluteUrl, articleSchema, breadcrumbSchema, pageTitle } from "@/lib/seo";
import { photos, site } from "@/lib/site";

export const revalidate = 300;

// Pre-build the published posts; new ones are built the first time someone opens them.
export async function generateStaticParams() {
  const posts = await listPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return {};
  return {
    title: pageTitle(post.title),
    description: post.summary.slice(0, 155),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.summary, images: post.cover_image ? [post.cover_image] : undefined },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: path },
  ];
  const related = post.practice_slug ? findArea(post.practice_slug) : undefined;

  return (
    <>
      <JsonLd
        data={articleSchema({
          path,
          title: post.title,
          description: post.summary,
          image: post.cover_image ?? absoluteUrl("/email-logo.png"),
          published: post.published_at ?? post.updated_at,
          modified: post.updated_at,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageBanner crumbs={crumbs} eyebrow={formatPostDate(post)} title={post.title} image={post.cover_image ?? photos.signing} />

      <section className="bg-shell py-14 md:py-20">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          {post.cover_image && (
            <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-[4px]">
              <Image src={post.cover_image} alt="" fill priority sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
            </div>
          )}
          <RichText html={post.body} className="text-[1.02rem]" />

          {related && (
            <Link
              href={`/practice-areas/${related.slug}`}
              className="group mt-14 flex items-center justify-between gap-5 border-y border-line py-6"
            >
              <span>
                <span className="block text-xs font-semibold tracking-[0.18em] text-stone uppercase">Related practice area</span>
                <span className="mt-1 block font-serif text-xl text-ink transition-colors group-hover:text-beacon-dark">
                  {related.title}
                </span>
              </span>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-beacon-dark transition-colors group-hover:border-beacon group-hover:bg-beacon group-hover:text-ink">
                <Icon name="arrowRight" className="size-4" />
              </span>
            </Link>
          )}

          <div className="mt-14 rounded-[4px] bg-navy p-8 text-white md:p-10">
            <h2 className="text-2xl font-light md:text-3xl">Have a question about your situation?</h2>
            <p className="mt-3 leading-7 text-white/70">
              Every case is different. Talk to {site.name} for a free, confidential consultation.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <ButtonLink href="/contact">Get a Free Consultation</ButtonLink>
              <a href={site.phoneHref} className="font-serif text-xl text-white transition hover:text-beacon-light">
                {site.phone}
              </a>
            </div>
          </div>
          <p className="mt-8 text-xs leading-5 text-stone">
            This article is for general information only and is not legal advice. Reading it does not create an
            attorney-client relationship.
          </p>
        </article>
      </section>
    </>
  );
}
