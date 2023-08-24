import { HomePage } from '@/views/home/home-page'

export default function Home({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  return <HomePage locale={locale} />
}
