
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
  { id: "morning-show", youtubeId: "8iOGpPUPFdY" },
  { id: "tv-comment", youtubeId: "_fJwZSCJbtE" },
  { id: "radio-declaration", youtubeId: "QT7d3vWk8nk" },
] as const satisfies readonly ExpertiseVideo[];
