'use client'

import { useStore } from '@/store'

import { LikeButton } from '@/components/action-button/like'
import { Image } from '@/components/image'

export const PlayerSongInfo = ({ ...props }) => {
  const { currentSong } = useStore()

  return (
    <div className="flex items-center flex-1 space-x-4" {...props}>
      <Image
        src={`https://img.youtube.com/vi/${currentSong()?.youtubeId}/0.jpg`}
        alt={`${currentSong()?.name} album cover`}
        className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full hidden md:block"
      />

      <div className="flex max-w-[150px] sm:max-w-[250px] md:max-w-[170px] lg:max-w-full">
        <span className="text-sm font-medium text-ellipsis">
          {currentSong()?.name}
        </span>

        <span className="text-xs text-ellipsis">{currentSong()?.singer}</span>
      </div>

      <LikeButton song={currentSong()} />
    </div>
  )
}
