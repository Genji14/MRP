import { LocaleChecker } from '@/components/global'

export default function LocaleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <LocaleChecker>{children}</LocaleChecker>
}
