'use client'

import { useStore } from '@/store'

import { LikeButton } from '@/components/action-button/like'
import { Image } from '@/components/image'

export const PlayerSongInfo = ({ ...props }) => {
  const { currentSong } = useStore()

  return (
    <div className="flex flex-1 items-center space-x-4" {...props}>
      <Image
        src={`https://img.youtube.com/vi/${currentSong()?.youtubeId}/0.jpg`}
        alt={`${currentSong()?.name} album cover`}
        className="hidden h-10 min-h-[40px] w-10 min-w-[40px] rounded-full sm:block"
      />

      <div className="flex max-w-[150px] sm:max-w-[250px] md:max-w-[170px] lg:max-w-full">
        <span className="text-ellipsis text-sm font-medium">
          {currentSong()?.name}
        </span>

        <span className="text-ellipsis text-xs">{currentSong()?.singer}</span>
      </div>

      <LikeButton song={currentSong()} />
    </div>
  )
}
