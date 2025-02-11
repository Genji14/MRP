import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import { OAuthBtns } from '#/auth/login/components'
import logoImg from '~/logo.png'

export const LoginPageContent = () => {
  const t = useTranslations('pages.auth.login')

  return (
    <div className="grid h-screen grid-cols-3 p-6">
      <div className="col-start-2 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-6">
          <Link href="/">
            <Image src={logoImg} alt="Logo" sizes="fixed" className="h-20 w-20 object-contain" />
          </Link>
          <div className="space-y-2 text-center">
            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
              {t('texts.title', { app: 'MRP' })}
            </h1>
            <h3 className="text-nowrap text-muted-foreground">{t('texts.content')}</h3>
          </div>
          <OAuthBtns />
        </div>
        <div className="flex justify-center gap-4 text-sm font-medium text-gray-500">
          <span>About MRP</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  )
}
