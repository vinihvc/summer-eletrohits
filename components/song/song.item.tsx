'use client'

import { memo, useMemo } from 'react'

import { useStore } from '@/store'
import { Plus } from 'lucide-react'

import { LikeButton } from '@/components/actions/like'
import { PlayButton } from '@/components/actions/play'
import { Button } from '@/components/ui/button'

import { cn } from '@/utils/cn'

import { Image } from '../ui/image'

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
        'group flex items-center space-x-5 rounded-xl p-2.5 transition-colors duration-200 hover:bg-black/10 dark:hover:bg-white/10',
        isCurrentSong && 'bg-white/20',
        className,
      )}
      {...rest}
    >
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          className="aspect-square h-full w-full scale-150"
          src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
          alt={song?.name}
        />

        <div className="absolute inset-0 hidden  items-center justify-center group-hover:flex">
          <PlayButton songs={songs} index={index} />
        </div>
      </div>

      <div className="w-full max-w-[140px] text-sm sm:max-w-[400px]">
        <div className="truncate text-sm">{song.name}</div>
      </div>

      <div className="truncate text-sm">{song.singer}</div>

      <div className="grow" />

      <div className="flex space-x-1">
        <Button variant="ghost" className="h-8 w-8 p-0">
          <Plus size={16} />
        </Button>

        <LikeButton song={song} />
      </div>
    </div>
  )
}

export const SongItem = memo(SongItemComponent)
