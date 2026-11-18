"use client";

import { useState } from "react";
import { EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  name: string; // form field the HTML is saved under
  defaultValue: string;
  minHeight?: string;
};

// Word-processor style text box for the admin: headings, bold, lists, quotes and links.
// The formatted text is sent with the form as HTML (cleaned again on the server).
export default function RichTextEditor({ name, defaultValue, minHeight = "min-h-[320px]" }: Props) {
  const [html, setHtml] = useState(defaultValue);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        code: false,
        codeBlock: false,
        horizontalRule: false,
        link: { openOnClick: false, autolink: true, defaultProtocol: "https" },
      }),
    ],
    content: defaultValue,
    immediatelyRender: false,
    editorProps: { attributes: { class: `rich-text ${minHeight} px-5 py-4 outline-none` } },
    onUpdate: ({ editor }) => setHtml(editor.getHTML()),
  });

  const state = useEditorState({
    editor,
    selector: ({ editor }) =>
      editor && {
        h2: editor.isActive("heading", { level: 2 }),
        h3: editor.isActive("heading", { level: 3 }),
        bold: editor.isActive("bold"),
        italic: editor.isActive("italic"),
        bullet: editor.isActive("bulletList"),
        ordered: editor.isActive("orderedList"),
        quote: editor.isActive("blockquote"),
        link: editor.isActive("link"),
      },
  });

  function toggleLink() {
    if (!editor) return;
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    const url = window.prompt("Paste the web address for this link (e.g. https://… or /contact)");
    if (url) editor.chain().focus().extendMarkRange("link").setLink({ href: url.trim() }).run();
  }

  const buttons: { label: string; title: string; active?: boolean; run: () => void }[] = editor
    ? [
        { label: "H2", title: "Large heading", active: state?.h2, run: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
        { label: "H3", title: "Small heading", active: state?.h3, run: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
        { label: "B", title: "Bold", active: state?.bold, run: () => editor.chain().focus().toggleBold().run() },
        { label: "I", title: "Italic", active: state?.italic, run: () => editor.chain().focus().toggleItalic().run() },
        { label: "• List", title: "Bulleted list", active: state?.bullet, run: () => editor.chain().focus().toggleBulletList().run() },
        { label: "1. List", title: "Numbered list", active: state?.ordered, run: () => editor.chain().focus().toggleOrderedList().run() },
        { label: "Quote", title: "Quote", active: state?.quote, run: () => editor.chain().focus().toggleBlockquote().run() },
        { label: state?.link ? "Unlink" : "Link", title: "Add or remove a link", active: state?.link, run: toggleLink },
        { label: "Undo", title: "Undo", run: () => editor.chain().focus().undo().run() },
        { label: "Redo", title: "Redo", run: () => editor.chain().focus().redo().run() },
      ]
    : [];

  return (
    <div className="rounded-[4px] border border-line bg-white focus-within:border-beacon focus-within:ring-2 focus-within:ring-beacon/20">
      <div className="flex flex-wrap gap-1 border-b border-line bg-shell px-2 py-2" role="toolbar" aria-label="Text formatting">
        {buttons.map((b) => (
          <button
            key={b.title}
            type="button"
            title={b.title}
            onClick={b.run}
            className={`rounded-[3px] px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              b.active ? "bg-ink text-white" : "text-ink hover:bg-sand"
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>
      <EditorContent editor={editor} />
      <input type="hidden" name={name} value={html} />
    </div>
  );
}
