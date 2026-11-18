"use client";

import { useActionState, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { practiceGroups } from "@/lib/content/practiceAreas";
import type { BlogPost } from "@/lib/cms/types";
import { slugify } from "@/lib/slug";
import Field, { inputClass } from "../../../_components/Field";
import FormNotice from "../../../_components/FormNotice";
import RichTextEditor from "../../../_components/RichTextEditor";
import SubmitButton from "../../../_components/SubmitButton";
import { savePostAction, type PostFormState } from "../actions";

// Write or edit a blog post.
export default function PostForm({ post, justCreated }: { post: BlogPost | null; justCreated?: boolean }) {
  const [state, action] = useActionState<PostFormState, FormData>(
    savePostAction,
    justCreated ? { success: post?.published ? "Saved. The post is live on the website." : "Saved as a draft." } : {},
  );
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(Boolean(post));

  return (
    <form action={action} className="space-y-8">
      <FormNotice error={state.error} success={state.success} />
      <input type="hidden" name="id" value={post?.id ?? ""} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-7">
          <Field label="Title" htmlFor="title">
            <input
              id="title"
              name="title"
              required
              maxLength={200}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (!slugEdited) setSlug(slugify(e.target.value));
              }}
              className={`${inputClass} font-serif text-xl`}
              placeholder="e.g. Can I Be Fired for Reporting Harassment in California?"
            />
          </Field>

          <Field label="Post" hint="Use the buttons to add headings, bold text, lists and links.">
            <RichTextEditor name="body" defaultValue={post?.body ?? ""} minHeight="min-h-[420px]" />
          </Field>

          <Field
            label="Short summary"
            htmlFor="summary"
            hint="One or two sentences shown on the blog page and in Google results. Leave empty to use the start of the post."
          >
            <textarea id="summary" name="summary" rows={3} maxLength={300} defaultValue={post?.summary ?? ""} className={inputClass} />
          </Field>
        </div>

        <aside className="space-y-7 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-[4px] border border-line bg-white p-5">
            <label className="flex items-start gap-3">
              <input type="checkbox" name="published" defaultChecked={post?.published ?? false} className="mt-1 size-4 accent-[#0b1d30]" />
              <span>
                <span className="block text-sm font-semibold text-ink">Published</span>
                <span className="block text-xs leading-5 text-stone">Untick to keep it as a private draft.</span>
              </span>
            </label>
            <div className="mt-5 flex flex-wrap gap-3">
              <SubmitButton>Save</SubmitButton>
              {post?.published && (
                <Link href={`/blog/${post.slug}`} target="_blank" className="self-center text-sm text-beacon-dark hover:text-ink">
                  View post ↗
                </Link>
              )}
            </div>
          </div>

          <Field label="Cover photo" htmlFor="cover" hint="JPG, PNG or WebP, under 5 MB. Wide photos look best.">
            {post?.cover_image && (
              <div className="mb-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] border border-line">
                  <Image src={post.cover_image} alt="" fill sizes="300px" className="object-cover" />
                </div>
                <label className="mt-2 flex items-center gap-2 text-xs text-stone">
                  <input type="checkbox" name="remove_cover" className="accent-[#0b1d30]" /> Remove this photo
                </label>
              </div>
            )}
            <input id="cover" name="cover" type="file" accept="image/jpeg,image/png,image/webp" className="block w-full text-sm text-stone file:mr-3 file:rounded-[3px] file:border-0 file:bg-sand file:px-3 file:py-2 file:text-sm file:font-semibold file:text-ink" />
          </Field>

          <Field label="Related practice area" htmlFor="practice_slug" hint="Adds a link to that practice page at the end of the post.">
            <select id="practice_slug" name="practice_slug" defaultValue={post?.practice_slug ?? ""} className={inputClass}>
              <option value="">None</option>
              {practiceGroups.map((group) => (
                <optgroup key={group.id} label={group.title}>
                  {group.areas.map((area) => (
                    <option key={area.slug} value={area.slug}>
                      {area.title}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </Field>

          <Field label="Web address" htmlFor="slug" hint={`lighthouselawapc.com/blog/${slug || "…"}`}>
            <input
              id="slug"
              name="slug"
              value={slug}
              onChange={(e) => {
                setSlugEdited(true);
                setSlug(e.target.value);
              }}
              onBlur={() => setSlug(slugify(slug))}
              className={inputClass}
            />
          </Field>
        </aside>
      </div>
    </form>
  );
}
