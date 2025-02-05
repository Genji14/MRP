'use client'

import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { CircleFlag } from 'react-circle-flags'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export const LangSelect = () => {
  const t = useTranslations('layout.base.header.langSelect')
  const { replace } = useRouter()

  const pathname = usePathname()
  const locale = pathname.split('/')[1]

  const changeLocale = (lang: string) => {
    if (lang !== locale) {
      const newPathname = `/${lang}${pathname.substring(locale.length + 1)}`
      replace(newPathname)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <div className="mr-1 flex items-center gap-1.5">
            <CircleFlag countryCode={locale === 'vi' ? 'vn' : 'us'} height="20" width="20" />
            <span className="h-full font-medium uppercase">{locale}</span>
          </div>
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-fit w-fit p-0">
        <Command className="md:min-w-[200px]">
          <CommandList>
            <CommandGroup heading={t('language')}>
              <CommandItem
                className={cn(
                  locale === 'en' ? 'bg-accent font-medium' : 'text-muted-foreground',
                  'cursor-pointer',
                )}
                onSelect={() => changeLocale('en')}
              >
                <CircleFlag countryCode="us" height="20" width="20" />
                <span>English</span>
              </CommandItem>
              <CommandItem
                className={cn(
                  locale === 'vi' ? 'bg-accent font-medium' : 'text-muted-foreground',
                  'cursor-pointer',
                )}
                onSelect={() => changeLocale('vi')}
              >
                <CircleFlag countryCode="vn" height="20" width="20" />
                <span>Tiếng Việt</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
