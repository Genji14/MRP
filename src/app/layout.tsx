import { Roboto, Roboto_Condensed } from 'next/font/google'

import './globals.css'
import Providers from '@/providers'

const font = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const sub_font = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className={`antialiased ${font.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
