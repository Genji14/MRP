import { PropsWithChildren } from 'react'

import { Header } from '@/components/global'

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="relative z-0 mt-20">{children}</main>
    </>
  )
}
