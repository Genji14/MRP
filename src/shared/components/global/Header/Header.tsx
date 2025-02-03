import Image from 'next/image'

import LogoImage from '@/public/logo.png'

export const Header = () => {
  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="flex items-center space-x-4 sm:justify-between sm:space-x-0">
        <Image src={LogoImage} alt="Logo" sizes="fixed" className="object-contain w-16 h-16" />
        <nav className="flex items-center text-background gap-4"></nav>
      </div>
    </header>
  )
}
