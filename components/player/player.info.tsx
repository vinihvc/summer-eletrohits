'use client'

import { useStore } from '@/store'

import { LikeButton } from '@/components/actions/like'
import { Image } from '@/components/ui/image'

export const PlayerSongInfo = ({ ...props }) => {
  const { currentSong } = useStore()

  return (
    <div className="flex flex-1 items-center space-x-4" {...props}>
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          width={40}
          height={40}
          className="aspect-square scale-150"
          src={`https://img.youtube.com/vi/${currentSong()?.youtubeId}/0.jpg`}
          alt={`${currentSong()?.name} album cover`}
        />
      </div>

      <div className="flex max-w-[150px] flex-col sm:max-w-[250px] md:max-w-[170px] lg:max-w-full">
        <div className="text-ellipsis text-sm font-medium">
          {currentSong()?.name}
        </div>

        <div className="text-ellipsis text-xs">{currentSong()?.singer}</div>
      </div>

      <LikeButton song={currentSong()} />
    </div>
  )
}
