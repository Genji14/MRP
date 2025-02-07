import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

import { updateSession } from '@/core/supabase'

const i18nMiddleware = createMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'vi',
})

export async function middleware(request: NextRequest) {
  let response = i18nMiddleware(request)

  response = await updateSession(request, response)
  return response
}

export const config = {
  matcher: [
    '/',
    '/(vi|en)/:path*',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
