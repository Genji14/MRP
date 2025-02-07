import { useQueryClient } from '@tanstack/react-query'
import { LogOutIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { createSupaClient } from '@/core/supabase'
import { convertAvatarAlt } from '@/utils'

export const Profile = ({
  data,
}: {
  data: {
    created_at: string
    display_name: string | null
    email: string
    id: string
    image_url: string | null
  }
}) => {
  
  const queryClient = useQueryClient()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createSupaClient()

    await supabase.auth.signOut()
    queryClient.clear()
    router.refresh()
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="cursor-pointer ring-0 ring-gray-300 ring-offset-2 transition-all hover:ring-2">
          <AvatarImage src={data.image_url ?? undefined} alt={data.display_name ?? 'Avatar'} />
          <AvatarFallback>{convertAvatarAlt(data.display_name ?? '')}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="mt-2 flex w-[200px] flex-col gap-4 p-1" align="end">
        <div
          onClick={handleLogout}
          className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-gray-200"
        >
          <LogOutIcon className="size-5" />
          <span className="text-sm font-medium">Đăng xuất</span>
        </div>
      </PopoverContent>
    </Popover>
  )
}
