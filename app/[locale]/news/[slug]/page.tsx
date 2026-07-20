import { setRequestLocale } from "next-intl/server"
import { Container } from "@/components/layout/Container"

type Props = { params: Promise<{ locale: string; slug: string }> }

export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Loc)

  return (
    <>
      <Container className="py-16">
        <article className="max-w-3xl text-graphite/80" />
      </Container>
    </>
  )
}
