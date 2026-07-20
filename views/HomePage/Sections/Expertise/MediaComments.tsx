import { useTranslations } from "next-intl"
import { expertiseVideos } from "@/config/expertise"
import { VideoEmbed } from "./VideoEmbed"

export function MediaComments() {
  const t = useTranslations("home.expertise.media")
  const tv = useTranslations("home.expertise.videos")
  const common = useTranslations("common")
  const playLabel = common("playVideo")

  const [featured, ...rest] = expertiseVideos

  return (
    <div>
      <h3 className="font-heading text-lg font-medium text-firefly">{t("title")}</h3>
      <hr className="mt-4 border-graphite/10" />
      <p className="mt-3 text-xs text-graphite/70">{t("subtitle")}</p>

      <figure className="mt-4">
        <VideoEmbed youtubeId={featured.youtubeId} title={tv(featured.id)} playLabel={playLabel} />
        <figcaption className="mt-2 text-xs text-graphite/70">{tv(featured.id)}</figcaption>
      </figure>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {rest.map((video) => (
          <figure key={video.id}>
            <VideoEmbed youtubeId={video.youtubeId} title={tv(video.id)} playLabel={playLabel} />
            <figcaption className="mt-2 text-xs text-graphite/70">{tv(video.id)}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
