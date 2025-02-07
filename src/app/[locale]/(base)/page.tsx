import { sub_font } from '../../layout'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'

import { Button } from '@/components/ui/button'

import imgBg01 from '~/carousel-bg-01.png'
import img01 from '~/carousel-img-01.png'

export default function Home() {
  return (
    <>
      <div className="grid h-[calc(100vh-5rem)] w-full grid-cols-2 overflow-hidden">
        <div className="flex h-[calc(100vh-5rem)] w-full flex-col items-center justify-between gap-8 pb-8 pl-36 pr-8 pt-20">
          <div className="w-full">
            <h1 className="text-[2.5rem]">
              <span className={`${sub_font.className} font-light text-gray-500`}>
                Đồng Hành Cùng Doanh Nghiệp
              </span>
              <br />
              <strong className="font-semibold"> Vượt Thử Thách Và Phát Triển Bền Vững</strong>
            </h1>
          </div>
          <div className="flex w-full flex-col gap-8">
            <p className="leading-loose text-gray-500">
              Khi doanh nghiệp đối mặt với khó khăn – từ quản lý tài chính đến tối ưu quy trình và
              định hướng chiến lược – Viêm Thạnh Chước là đối tác vững chắc, giúp bạn xây dựng nền
              tảng phát triển dài hạn.
            </p>
            <div className="w-full">
              <Button className="flex gap-4 px-8 py-6">
                <span className="">Đặt lịch tư vấn miễn phí</span>
                <FaArrowRightLong className="stroke-1" />
              </Button>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brown size-6" />
                <h4 className="font-medium">Tư vấn cùng chuyên gia</h4>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brown size-6" />
                <h4 className="font-medium">Hiệu quả dài hạn</h4>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-brown size-6" />
                <h4 className="font-medium">Đồng hành lâu dài</h4>
              </div>
            </div>
          </div>
        </div>
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
