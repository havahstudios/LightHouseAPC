import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/cms/types";
import { photos } from "@/lib/site";

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Los_Angeles" });

export function formatPostDate(post: BlogPost) {
  return dateFormat.format(new Date(post.published_at ?? post.updated_at));
}

// Blog post preview: cover photo, date, title and summary.
export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col border border-line bg-white p-5 transition-colors hover:border-beacon">
      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
        <Image
          src={post.cover_image ?? photos.justice}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-6 text-xs tracking-[0.08em] text-stone">{formatPostDate(post)}</p>
      <h3 className="mt-2 text-xl leading-snug font-normal transition-colors group-hover:text-beacon-dark">{post.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7">{post.summary}</p>
      <span className="mt-6 text-xs font-semibold tracking-[0.18em] text-beacon-dark uppercase">Read More</span>
    </Link>
  );
}
