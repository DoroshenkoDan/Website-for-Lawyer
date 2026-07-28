import { writeFile } from "node:fs/promises";

const WP_URL = process.env.WP_URL ?? "https://rglawyer.com.ua/wp-json/wp/v2";
const NEWS_CATEGORY_ID = 21;
const OUT = new URL("../lib/redirects/legacy-posts.ts", import.meta.url);

const RESERVED = new Set([
  "about",
  "news",
  "media",
  "practices",
  "contacts",
  "uk",
  "en",
  "pl",
  "api",
]);

async function fetchAllPosts() {
  const posts = [];
  for (let page = 1; ; page++) {
    const query = new URLSearchParams({
      per_page: "100",
      page: String(page),
      orderby: "id",
      order: "asc",
      _fields: "slug,categories",
    });
    const res = await fetch(`${WP_URL}/posts?${query}`);
    if (!res.ok) throw new Error(`WP responded ${res.status} on page ${page}`);
    const batch = await res.json();
    posts.push(...batch);
    const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "1");
    if (page >= totalPages || batch.length === 0) break;
  }
  return posts;
}

function toEntries(posts) {
  const seen = new Set();
  const entries = [];
  for (const post of posts) {
    const slug = decodeURIComponent(post.slug).toLowerCase();
    if (!slug || RESERVED.has(slug) || seen.has(slug)) continue;
    seen.add(slug);
    const section = post.categories?.includes(NEWS_CATEGORY_ID)
      ? "news"
      : "media";
    entries.push([`/${slug}`, `/${section}/${slug}`]);
  }
  return entries;
}

function render(entries) {
  const rows = entries
    .map(([from, to]) => `  [${JSON.stringify(from)}, ${JSON.stringify(to)}],`)
    .join("\n");
  return `// generated\nexport const LEGACY_POST_REDIRECTS = new Map<string, string>([\n${rows}\n]);\n`;
}

const posts = await fetchAllPosts();
const entries = toEntries(posts);
await writeFile(OUT, render(entries), "utf8");
console.log(`posts fetched: ${posts.length}`);
console.log(`entries written: ${entries.length}`);
console.log(`news: ${entries.filter(([, to]) => to.startsWith("/news/")).length}`);
console.log(`media: ${entries.filter(([, to]) => to.startsWith("/media/")).length}`);
