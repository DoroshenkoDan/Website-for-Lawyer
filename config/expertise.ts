/**
 * Content for the homepage "Expertise" section (`Expertise`).
 *
 * Only structural / asset data lives here — the display copy
 * (section labels, lecture titles, video captions) comes from `messages`
 * under `home.expertise`, keyed by the `id` of each entry below.
 */

/** A seminar / lecture shown in the left column, linking out to its source. */
export interface ExpertiseLecture {
  /** Stable id; matches `home.expertise.lectures.<id>` in messages. */
  id: string;
  /** External URL for the lecture; `"#"` is a placeholder until provided. */
  href: string;
}

/** A media appearance shown in the right column as a lazy YouTube embed. */
export interface ExpertiseVideo {
  /** Stable id; matches `home.expertise.videos.<id>` in messages. */
  id: string;
  /** YouTube video id (the `v=` value); placeholder until real clips exist. */
  youtubeId: string;
}

export const expertiseLectures = [
  { id: "nazk", href: "#" },
  { id: "judges-school", href: "#" },
  { id: "odesa-council", href: "#" },
  { id: "ministry-justice", href: "#" },
  { id: "national-academy", href: "#" },
] as const satisfies readonly ExpertiseLecture[];

/**
 * Array order defines layout: the first entry is the large featured embed,
 * the rest render as the smaller two-up row beneath it.
 */
export const expertiseVideos = [
  { id: "tv-comment", youtubeId: "dQw4w9WgXcQ" },
  { id: "interview", youtubeId: "dQw4w9WgXcQ" },
  { id: "forum", youtubeId: "dQw4w9WgXcQ" },
] as const satisfies readonly ExpertiseVideo[];
