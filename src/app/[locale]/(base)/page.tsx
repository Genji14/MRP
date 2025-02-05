import Image from 'next/image'

import imgBg01 from '~/carousel-bg-01.png'
import img01 from '~/carousel-img-01.png'

export default function Home() {
  return (
    <>
      <div className="grid h-[calc(100vh-5rem)] w-full grid-cols-2 overflow-hidden">
        <div></div>
        <div className="relative flex w-full items-end justify-center">
          <Image
            src={img01}
            alt="carousel-image-01"
            className="z-10 h-full translate-y-20 object-contain"
          />
          <Image
            src={imgBg01}
            alt="carousel-bg-01"
            className="absolute inset-0 object-cover shadow-lg"
          />
        </div>
      </div>
      <div className="h-20 bg-gray-500"></div>
    </>
  )
}
