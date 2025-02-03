import { NextIntlClientProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { BaseLayout } from '@/layouts'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextIntlClientProvider locale={router.locale} messages={pageProps.messages} timeZone="UTC">
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </NextIntlClientProvider>
  )
}
