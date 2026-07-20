
export interface ExpertiseLecture {
  id: string;
  href: string;
}

export interface ExpertiseVideo {
  id: string;
  youtubeId: string;
}

export const expertiseLectures = [
  { id: "nazk", href: "#" },
  { id: "judges-school", href: "#" },
  { id: "odesa-council", href: "#" },
  { id: "ministry-justice", href: "#" },
  { id: "national-academy", href: "#" },
] as const satisfies readonly ExpertiseLecture[];

export const expertiseVideos = [
  { id: "tv-comment", youtubeId: "dQw4w9WgXcQ" },
  { id: "interview", youtubeId: "dQw4w9WgXcQ" },
  { id: "forum", youtubeId: "dQw4w9WgXcQ" },
] as const satisfies readonly ExpertiseVideo[];
