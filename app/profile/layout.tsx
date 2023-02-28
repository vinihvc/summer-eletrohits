/* eslint-disable @next/next/no-img-element */

import { getUserInitials } from '@/libs/initials'
import { getCurrentUser } from '@/libs/user'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type ProfileLayoutProps = {
  children: React.ReactNode
}

const ProfileLayout = async ({ children }: ProfileLayoutProps) => {
  const user = await getCurrentUser()

  if (!user) return null

  return (
    <div className="flex flex-1 flex-col space-y-10">
      <div className="flex items-center space-x-5">
        <div>
          <Avatar className="h-20 w-20">
            <AvatarImage
              src={user.image || ''}
              alt="Profile picture, click to view profile"
            />
            <AvatarFallback>{getUserInitials(user)}</AvatarFallback>
          </Avatar>
        </div>

        <div>
          <p className="text-xl font-bold">{user.name}</p>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-4">
          <div className="text-xl font-semibold">Playlists</div>

          <div></div>
        </div>

        <div className="text-xl font-semibold">
          <div className="text-xl font-semibold">Musics</div>

          <div></div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default ProfileLayout
