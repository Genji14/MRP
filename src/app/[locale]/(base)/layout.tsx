import { Header } from '@/components/global'

export default function BaseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="relative z-0 mt-20">{children}</main>
    </>
  )
}
