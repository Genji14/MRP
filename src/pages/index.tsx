import { GetStaticPropsContext } from 'next'
import Image from 'next/image'

import imgBg01 from '@/public/carousel-bg-01.png'
import img01 from '@/public/carousel-img-01.png'

export default function Home() {
  return (
    <>
      <div className="grid h-[calc(100vh-5rem)] w-full grid-cols-2 overflow-hidden">
        <div></div>
        <div className="relative flex items-end justify-center">
          <Image
            src={img01}
            alt="carousel-image-01"
            className="z-10 h-full translate-y-20 scale-90 object-contain"
          />
          <Image
            src={imgBg01}
            alt="carousel-bg-01"
            className="absolute inset-0 h-full object-cover shadow-lg"
          />
        </div>
      </div>
      <div className="h-20 bg-gray-500"></div>
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
