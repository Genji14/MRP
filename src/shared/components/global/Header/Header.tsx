import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { LangSelect } from '@/components/global/Header/LangSelect'
import { Button } from '@/components/ui/button'

import LogoImage from '@/public/logo.png'

const routesMap = [
  {
    title: 'begin',
    href: '#',
    type: 'link',
  },
  {
    title: 'about',
    href: '#',
    type: 'scroll',
  },
  {
    title: 'solution',
    href: '#',
    type: 'scroll',
  },
  {
    title: 'process',
    href: '#',
    type: 'scroll',
  },
  {
    title: 'insights',
    href: '#',
    type: 'scroll',
  },
  {
    title: 'contact',
    href: '#',
    type: 'scroll',
  },
]

export const Header = () => {
  const t = useTranslations('components.common.header')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  return (
    <header className="fixed top-0 z-40 w-full bg-background">
      <div className="flex h-20 w-full items-center justify-between space-x-4 border-b px-6 shadow sm:space-x-0">
        <Link href="/">
          <Image src={LogoImage} alt="Logo" sizes="fixed" className="h-20 w-20 object-contain" />
        </Link>
        <nav className="flex items-center gap-2">
          {routesMap.map((item) => (
            <Link
              href={item.href}
              className="relative px-3 py-1.5 after:absolute after:bottom-0 after:left-[20%] after:h-[2px] after:w-0 after:bg-black after:transition-all after:hover:w-3/5"
            >
              <span>{t(`nav.${item.title}` as any)}</span>
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          {isMounted && <LangSelect />}
          <Button>{t('login')}</Button>
        </div>
      </div>
    </header>
  )
}
