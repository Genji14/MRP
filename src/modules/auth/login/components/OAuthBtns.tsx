'use client'

import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/button'

import { createSupaClient } from '@/core/supabase'

export const OAuthBtns = () => {
  const handleLoginWithOAuth = (provider: 'google' | 'facebook') => {
    const supabase = createSupaClient()
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + '/auth/callback',
      },
    })
  }

  return (
    <div className="flex w-full flex-col gap-2 px-4">
      <Button variant="outline" onClick={() => handleLoginWithOAuth('google')}>
        <FcGoogle />
        <span>Sign In With Google</span>
      </Button>
      <Button variant="outline" onClick={() => handleLoginWithOAuth('facebook')}>
        <FaFacebook />
        <span>Sign In With Facebook</span>
      </Button>
    </div>
  )
}
