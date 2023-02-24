'use client'

import { memo, useMemo } from 'react'

import { useStore } from '@/store'

import { LikeButton } from '@/components/action-button/like'
import { PlayButton } from '@/components/action-button/play'
import { cn } from '@/utils/cn'

type SongItemProps = {
  songs: SongType[]
  index: number
} & React.HtmlHTMLAttributes<HTMLDivElement>

const SongItemComponent = (props: SongItemProps) => {
  const { songs, index, className, ...rest } = props

  const { currentSong } = useStore()

  const song = songs[index]

  const isCurrentSong = useMemo(() => {
    return currentSong()?.id === song.id
  }, [currentSong, song])

  return (
    <div
      className={cn(
        'flex items-center border-b border-b-white/30 p-4 gap-4 hover:bg-white/50',
        isCurrentSong && 'bg-white/50',
        className
      )}
      {...rest}
    >
      <PlayButton songs={songs} index={index} />

      <div className="max-w-[140px] sm:max-w-[250px] md:max-w-full text-sm sm:text-md">
        <div className="font-bold text-ellipsis">{song.name}</div>

        <div>{song.singer}</div>
      </div>

      <div className="flex-grow" />

      <div className="flex">
        <LikeButton song={song} className="mr-3" />
      </div>
    </div>
  )
}

export const SongItem = memo(SongItemComponent)
