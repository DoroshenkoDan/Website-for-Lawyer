import "server-only";
import { z } from "zod";
import { apiFetch } from "./client";

const PUBLICATIONS_PAGE_ID = 266;
const PUBLICATIONS_REVALIDATE_SECONDS = 300;

const wpPageSchema = z.object({
  content: z.object({ rendered: z.string() }),
});

export interface Publications {
  html: string;
  count: number;
}

function prepare(rendered: string): string {
  return rendered
    .replace(/<h\d[^>]*>[\s\S]*?<\/h\d>/i, "")
    .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ')
    .trim();
}

export async function getPublications(): Promise<Publications> {
  const data = await apiFetch(
    `/pages/${PUBLICATIONS_PAGE_ID}?_fields=content`,
    { next: { revalidate: PUBLICATIONS_REVALIDATE_SECONDS } },
  );

  const { content } = wpPageSchema.parse(data);
  return {
    html: prepare(content.rendered),
    count: (content.rendered.match(/<p[\s>]/g) ?? []).length,
  };
}
