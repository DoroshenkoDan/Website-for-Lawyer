import { z } from "zod";

/**
 * Response/request shapes for the backend.
 * TODO: align these with the real API once the contract is known —
 * this is the single place to adjust when the backend type is confirmed.
 */

export const newsItemSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  body: z.string().optional(),
  coverImage: z.url().optional(),
  publishedAt: z.string(),
});
export const newsListSchema = z.array(newsItemSchema);

export const mediaItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum(["tv", "radio", "print", "seminars"]),
  url: z.url(),
  source: z.string().optional(),
  thumbnail: z.url().optional(),
  publishedAt: z.string(),
});
export const mediaListSchema = z.array(mediaItemSchema);

export const contactRequestSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string().optional(),
  message: z.string().min(1),
  locale: z.string().optional(),
});
export type ContactRequestInput = z.infer<typeof contactRequestSchema>;
