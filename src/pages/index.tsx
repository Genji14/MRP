import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const t = useTranslations('home')

  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)

  return (
    <>
      <Link href={route} locale={otherLocale}>
        {t('switchLocale', { locale: otherLocale })}
      </Link>
      <div>This is {t('hello')} page</div>
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../shared/messages/${locale}.json`)).default,
    },
  }
}
