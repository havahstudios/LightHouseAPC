"use client";

import Image from "next/image";
import Link from "next/link";
import SliderArrows from "@/components/SliderArrows";
import { blogPosts } from "@/lib/content/home";
import { useCarousel } from "@/lib/useCarousel";

// Navy section with a slider of recent articles.
export default function BlogPosts() {
  const { trackRef, next, prev, slideStyle, progress } = useCarousel(blogPosts.length);

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div>
          <h2 className="text-4xl font-light text-white md:text-[2.75rem]">Latest Blog Posts</h2>
        </div>

        <div className="mt-14 overflow-hidden">
          <div ref={trackRef} className="-mx-3 flex">
            {blogPosts.map((post) => (
              <article key={post.title} className="shrink-0 basis-full px-3 md:basis-1/2 lg:basis-1/3" style={slideStyle}>
                <Link href={post.href} className="group flex h-full flex-col bg-white p-5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-xl leading-snug font-normal transition-colors group-hover:text-beacon-dark">
                    {post.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7">{post.excerpt}</p>
                  <span className="mt-6 text-xs font-semibold tracking-[0.18em] text-beacon-dark uppercase">
                    Read More
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SliderArrows onPrev={prev} onNext={next} progress={progress} tone="light" />
        </div>
      </div>
    </section>
  );
}
