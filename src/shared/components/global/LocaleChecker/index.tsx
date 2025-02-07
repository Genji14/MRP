'use client'

import { notFound, usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { locales } from '@/constants'

export const LocaleChecker = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  const pathname = usePathname()  
  const locale = pathname.split('/')[1]

  useEffect(() => {
    !locales.includes(locale) && notFound()
  }, [])

  return children
}
