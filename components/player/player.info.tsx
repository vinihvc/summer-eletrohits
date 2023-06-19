'use client'

import { HTMLAttributes } from 'react'
import { useStore } from '@/store'

import { LikeButton } from '@/components/actions/like'
import { Image } from '@/components/ui/image'
import { cn } from '@/utils/cn'

type PlayerSongInfoProps = HTMLAttributes<HTMLDivElement>

export const PlayerSongInfo = (props: PlayerSongInfoProps) => {
  const { className, ...rest } = props

  const { currentSong } = useStore()

  return (
    <div
      className={cn('flex flex-1 items-center space-x-4', className)}
      {...rest}
    >
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          width={40}
          height={40}
          className="aspect-square scale-150"
          src={`https://img.youtube.com/vi/${currentSong()?.youtubeId}/0.jpg`}
          alt={`${currentSong()?.name} album cover`}
        />
      </div>

      <div className="flex max-w-[100px] flex-col sm:max-w-[250px] md:max-w-[170px] lg:max-w-full">
        <div className="truncate text-sm font-medium">
          {currentSong()?.name}
        </div>

        <div className="truncate text-xs">{currentSong()?.singer}</div>
      </div>

      <LikeButton song={currentSong()} />
    </div>
  )
}
