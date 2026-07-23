
export interface ExpertiseLecture {
  id: string;
  href: string;
}

export interface ExpertiseVideo {
  id: string;
  youtubeId: string;
}

export const expertiseLectures = [
  { id: "judges-quals", href: "/media/seminar_regina_guseinova" },
  { id: "e-declaration", href: "/media/e_deklaruvannya_seminar_nktspfr" },
  { id: "warsaw-2023", href: "/media/regina_guseinova_rozluchennya_za_kordonom" },
  {
    id: "declaration-civil-servants",
    href: "/media/osoblyvosti_e_deklaruvannya_dohodiv_derzhsluzhbovtsiv",
  },
  { id: "lectures-for-judges", href: "/media/advokaty_chytaut_lekcii_suddyam" },
  { id: "professional-development", href: "/media/pidvyschennya_kvalifikacii" },
  { id: "attorney-ethics", href: "/media/dystsplinarna_vidpovidalnist" },
  { id: "client-lies", href: "/media/klient_zavzhdy_breshe-2" },
] as const satisfies readonly ExpertiseLecture[];

export const expertiseVideos = [
  { id: "morning-show", youtubeId: "8iOGpPUPFdY" },
  { id: "tv-comment", youtubeId: "_fJwZSCJbtE" },
  { id: "radio-declaration", youtubeId: "QT7d3vWk8nk" },
] as const satisfies readonly ExpertiseVideo[];
