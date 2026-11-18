import sanitizeHtml from "sanitize-html";

// Text written in the admin editor is stored as HTML. Only these simple tags are allowed,
// so pasted content can't add scripts, styles or anything that breaks the page.
export function cleanHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: ["p", "h2", "h3", "strong", "em", "u", "s", "ul", "ol", "li", "a", "blockquote", "br"],
    allowedAttributes: { a: ["href", "target", "rel"] },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      // Links to other websites open in a new tab.
      a: (tagName, attribs) => {
        const href = attribs.href ?? "";
        const external = /^https?:\/\//.test(href) && !href.includes("lighthouselawapc.com");
        const linkAttribs: Record<string, string> = external
          ? { href, target: "_blank", rel: "noopener noreferrer" }
          : { href };
        return { tagName, attribs: linkAttribs };
      },
    },
  }).trim();
}

// Plain text version (for previews and Google descriptions).
export function plainText(html: string) {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} }).replace(/\s+/g, " ").trim();
}

// True when the editor is effectively empty (e.g. just "<p></p>").
export function isBlank(html: string) {
  return plainText(html) === "";
}
