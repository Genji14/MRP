import { createServerClient, serializeCookieHeader } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'

export function createSupaServer({ req, res }: { req: NextRequest; res: NextResponse }) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll().map(({ name, value }) => ({ name, value }))
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
          })
        },
      },
    },
  )

  return supabase
}
