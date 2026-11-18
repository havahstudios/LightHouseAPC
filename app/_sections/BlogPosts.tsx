"use client";

import PostCard from "@/components/PostCard";
import SliderArrows from "@/components/SliderArrows";
import type { BlogPost } from "@/lib/cms/types";
import { useCarousel } from "@/lib/useCarousel";

// Light section with a slider of recent articles (see LatestPosts for where they come from).
export default function BlogPosts({ posts }: { posts: BlogPost[] }) {
  const { trackRef, next, prev, slideStyle, progress } = useCarousel(posts.length);

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <h2 className="text-4xl font-light md:text-[2.75rem]">Latest Blog Posts</h2>
        </div>

        <div className="mt-14 overflow-hidden">
          <div ref={trackRef} className="-mx-3 flex">
            {posts.map((post) => (
              <article key={post.id} className="shrink-0 basis-full px-3 md:basis-1/2 lg:basis-1/3" style={slideStyle}>
                <PostCard post={post} />
              </article>
            ))}
          </div>
        </div>

        {posts.length > 3 && (
          <div className="mt-12">
            <SliderArrows onPrev={prev} onNext={next} progress={progress} />
          </div>
        )}
      </div>
    </section>
  );
}
