'use client'

import Image from 'next/image'

import { cn } from '@/lib/cn'
import { useMusicActions } from '@/store'
import { LikeButton } from './actions/like'
import { PlayButton } from './actions/play'

interface SongsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * List of songs
   */
  songs: SongType[]
}

export const Songs = (props: SongsProps) => {
  const { songs, className, ...rest } = props

  const { currentSong } = useMusicActions()

  return (
    <div className={cn(className)} {...rest}>
      {songs?.map((song, index) => (
        <div
          key={song.id}
          className="overflow-hidden rounded-sm transition-colors odd:bg-black/10 hover:bg-black/5"
        >
          <div
            className={cn(
              'group flex items-center gap-3 p-2.5 transition-colors hover:bg-foreground/10 md:gap-5 px-5',
              currentSong?.()?.id === song.id && 'bg-white/20',
              className,
            )}
            {...rest}
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                width={40}
                height={40}
                className="aspect-square scale-150"
                src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
                alt={song?.name}
              />

              <div className="absolute inset-0 flex items-center justify-center group-hover:flex md:hidden">
                <PlayButton songs={songs} index={index} />
              </div>
            </div>

            <div className="w-full max-w-[100px] text-sm sm:max-w-[200px] md:max-w-[300px]">
              <div className="truncate text-sm">{song.name}</div>
            </div>

            <div className="w-full max-w-[100px] text-sm sm:max-w-[200px] md:max-w-[300px]">
              <div className="truncate text-sm">{song.singer}</div>
            </div>

            <div className="grow" />

            <LikeButton song={song} />
          </div>
        </div>
      ))}
    </div>
  )
}
