import { createClient } from '@supabase/supabase-js'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  const accessToken = req.cookies.get('access-token')?.value
  const refreshToken = req.cookies.get('refresh-token')?.value

  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  const { data, error } = await supabase.auth.getSession()

  if (!data.session || error) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
