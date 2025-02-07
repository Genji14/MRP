import { useQuery } from '@tanstack/react-query'

import { createSupaClient } from '@/core/supabase'

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const supabase = createSupaClient()
      const { data } = await supabase.auth.getSession()
      console.log(data)

      if (data.session?.user) {
        // Fetch user profile data
        const { data: user } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.session.user.id)
          .single()

        return user
      }

      return null
    },
  })
}
