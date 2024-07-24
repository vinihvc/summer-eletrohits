'use client'

import { LikeButton } from '@/components/ui/actions/like'

import { cn } from '@/lib/cn'
import { useMusicActions } from '@/store'
import { BlurImage } from '../blur-image'

interface PlayerSongInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PlayerSongInfo = (props: PlayerSongInfoProps) => {
  const { className, ...rest } = props

  const { currentSong } = useMusicActions()

  return (
    <div className={cn('flex flex-1 items-center gap-4', className)} {...rest}>
      <div className="relative size-10 overflow-hidden rounded-full">
        <BlurImage
          width={40}
          height={40}
          className="aspect-square scale-150"
          src={`https://img.youtube.com/vi/${currentSong?.()?.youtubeId}/0.jpg`}
          alt={`${currentSong?.()?.name} album cover`}
        />
      </div>

      <div className="flex max-w-[100px] flex-col sm:max-w-[250px] md:max-w-[170px] lg:max-w-full">
        <div className="truncate text-sm font-medium">
          {currentSong?.()?.name}
        </div>

        <div className="truncate text-xs">{currentSong?.()?.singer}</div>
      </div>

      <LikeButton song={currentSong?.()} />
    </div>
  )
}
