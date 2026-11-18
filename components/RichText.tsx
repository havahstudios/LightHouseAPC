import { cleanHtml } from "@/lib/richText";

// Shows formatted text written in the admin editor (paragraphs, headings, lists, links).
export default function RichText({ html, className = "" }: { html: string; className?: string }) {
  return <div className={`rich-text ${className}`} dangerouslySetInnerHTML={{ __html: cleanHtml(html) }} />;
}
