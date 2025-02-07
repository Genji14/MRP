import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import React from 'react'

import QueryProvider from './QueryProvider'

export default async function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const messages = await getMessages()

  return (
    <QueryProvider>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </QueryProvider>
  )
}
