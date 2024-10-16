'use client'

import { LikeButton } from '@/components/player/actions/like'

import { useMusicActions } from '@/store/app.store'
import { BlurImage } from '../ui/blur-image'

export const PlayerSongInfo = () => {
  const { getCurrentSong } = useMusicActions()

  const song = getCurrentSong()

  return (
    <>
      <div className="relative size-10 overflow-hidden rounded-full">
        <BlurImage
          width={40}
          height={40}
          className="aspect-square scale-150"
          src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
          alt={`${song?.name} album cover`}
        />
      </div>

      <div className="flex max-w-[100px] flex-col sm:max-w-[250px] md:max-w-[170px] lg:max-w-full">
        <div className="truncate text-sm font-medium">{song?.name}</div>

        <div className="truncate text-xs">{song?.singer}</div>
      </div>

      {song && <LikeButton data={song} />}
    </>
  )
}
