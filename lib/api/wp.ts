import "server-only";
import { z } from "zod";
import type { NewsItem } from "@/types/news";

const wpRendered = z.object({ rendered: z.string() });
const wpMediaSize = z.object({ source_url: z.string() });

export const wpPostSchema = z.object({
  id: z.number(),
  slug: z.string(),
  date: z.string(),
  title: wpRendered,
  excerpt: wpRendered.optional(),
  content: wpRendered.optional(),
  _embedded: z
    .object({
      "wp:featuredmedia": z
        .array(
          z.object({
            source_url: z.string().optional(),
            media_details: z
              .object({
                sizes: z.record(z.string(), wpMediaSize).optional(),
              })
              .optional(),
          }),
        )
        .optional(),
    })
    .optional(),
});

export type WpPost = z.infer<typeof wpPostSchema>;
export const wpPostListSchema = z.array(wpPostSchema);

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  mdash: "—",
  ndash: "–",
  rsquo: "’",
  lsquo: "‘",
  rdquo: "”",
  ldquo: "“",
  laquo: "«",
  raquo: "»",
};

function decodeEntities(input: string): string {
  return input.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const num =
        code[1] === "x" || code[1] === "X"
          ? parseInt(code.slice(2), 16)
          : parseInt(code.slice(1), 10);
      return Number.isNaN(num) ? match : String.fromCodePoint(num);
    }
    return NAMED_ENTITIES[code.toLowerCase()] ?? match;
  });
}

function stripTags(input: string): string {
  return input.replace(/<[^>]*>/g, "");
}

export function toText(rendered: string): string {
  return decodeEntities(stripTags(rendered)).replace(/\s+/g, " ").trim();
}

function cleanExcerpt(rendered: string): string {
  return toText(rendered)
    .replace(/\s*(read more|continue reading|\[…\]|\[…\])\s*$/i, "")
    .replace(/\s*[……]$/, "")
    .trim();
}

function pickCover(embedded: WpPost["_embedded"]): string | undefined {
  const media = embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return undefined;
  const sizes = media.media_details?.sizes;
  return (
    sizes?.medium_large?.source_url ??
    sizes?.medium?.source_url ??
    media.source_url
  );
}

export function mapWpPost(post: WpPost): NewsItem {
  return {
    id: String(post.id),
    slug: post.slug,
    title: toText(post.title.rendered),
    excerpt: post.excerpt ? cleanExcerpt(post.excerpt.rendered) : "",
    body: post.content?.rendered,
    coverImage: pickCover(post._embedded),
    publishedAt: post.date,
  };
}
