import { LikeButton } from '@/components/player/actions/like'
import { PlayButton } from '@/components/player/actions/play'
import { useLongPress } from '@/hooks/use-long-press'
import { cn } from '@/lib/utils'
import { useMusicState } from '@/store/app.store'
import type { SongType } from '@/types/song'
import React from 'react'
import { BlurImage } from '../blur-image'
import { useSong } from './songs.store'

const SongsContextMenu = React.lazy(() => import('./songs.context-menu'))

const SongsDropdown = React.lazy(() => import('./songs.dropdown'))

interface SongsItemProps extends React.HTMLAttributes<HTMLDivElement> {
  songs: SongType[]
  index: number
}

export const SongsItem = (props: SongsItemProps) => {
  const { index, songs, className, ...rest } = props

  const { playlist, currentIndex } = useMusicState()

  const song = songs[index]

  const currentSong = playlist?.[currentIndex]

  const isCurrentSong = currentSong?.id === song?.id

  const { onChangeContext } = useSong()

  const longPress = useLongPress(() => onChangeContext(true))

  return (
    <SongsContextMenu data={song}>
      <div
        className={cn(
          'transition even:bg-background/10 odd:bg-background/30 hover:bg-foreground/5',
          className,
        )}
        {...rest}
        {...longPress}
      >
        <div
          className={cn(
            'group flex items-center gap-3 p-2.5 md:gap-5 px-2 sm:px-5 text-sm',
            isCurrentSong && 'bg-background/40',
            className,
          )}
          {...rest}
        >
          <div className="w-10 flex items-center justify-center shrink-0 max-sm:hidden">
            <div
              className={cn('group-hover:hidden text-muted-foreground', {
                hidden: isCurrentSong,
              })}
            >
              {index}
            </div>

            <div
              className={cn('hidden sm:group-hover:block', {
                block: isCurrentSong,
              })}
            >
              <PlayButton songs={songs} index={index} />
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shrink-0">
            <BlurImage
              width={40}
              height={40}
              className="size-10 aspect-square scale-125 object-cover select-none"
              src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
              alt={song?.name}
            />
          </div>

          <div className="flex flex-col sm:flex-row flex-1">
            <div
              className={cn('flex-1 line-clamp-1 font-medium', {
                'text-primary': isCurrentSong,
              })}
            >
              {song?.name}
            </div>

            <div className="w-full max-sm:text-muted-foreground sm:max-w-[35%] line-clamp-1 text-xs text-muted-foreground">
              {song?.singer}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LikeButton className="max-sm:hidden" data={song} />

            <SongsDropdown data={song} />
          </div>
        </div>
      </div>
    </SongsContextMenu>
  )
}
