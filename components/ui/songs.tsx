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
      {songs?.map((song, index) => {
        const currentIndex = index + 1

        return (
          <div
            key={song.id}
            className="overflow-hidden transition-colors odd:bg-black/10 hover:bg-black/5"
          >
            <div
              className={cn(
                'group flex items-center gap-3 p-2.5 transition-colors hover:bg-foreground/10 md:gap-5 px-2 sm:px-5 rounded-lg text-sm',
                currentSong?.()?.id === song.id && 'bg-white/20',
                className,
              )}
              {...rest}
            >
              <div className="w-10 flex items-center justify-center shrink-0">
                <div className="max-sm:!hidden group-hover:hidden text-muted-foreground">
                  {currentIndex}
                </div>

                <div className="max-sm:!block hidden group-hover:block">
                  <PlayButton songs={songs} index={index} />
                </div>
              </div>

              <div className="max-sm:hidden overflow-hidden rounded-lg shrink-0">
                <Image
                  width={40}
                  height={40}
                  className="size-10 aspect-square scale-150"
                  src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
                  alt={song?.name}
                />
              </div>

              <div className="flex-1 line-clamp-1">{song.name}</div>

              <div className="w-full max-w-[100px] sm:max-w-[30%] line-clamp-1">
                {song.singer}
              </div>

              <div>
                <LikeButton song={song} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
