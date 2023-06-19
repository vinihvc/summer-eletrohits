'use client'

import { useCallback, useMemo } from 'react'
import { useStore } from '@/store'
import { Pause, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

type PlayButtonProps = {
  songs: SongType[]
  index: number
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const PlayButton = (props: PlayButtonProps) => {
  const { songs, index, className, ...rest } = props

  const { isPlaying, togglePlay, currentSong, play } = useStore()

  const song = useMemo(() => songs[index], [songs, index])

  const isSameSong = currentSong()?.id === song.id

  const handleClick = useCallback(() => {
    if (isPlaying && isSameSong) {
      togglePlay()
    } else {
      play(songs, index)
    }
  }, [isPlaying, isSameSong, togglePlay, play, songs, index])

  return (
    <Button
      variant="solid"
      className={cn('h-8 w-8 p-0 [&>svg]:fill-current', className)}
      onClick={handleClick}
      {...rest}
    >
      {isSameSong && isPlaying ? <Pause size={16} /> : <Play size={16} />}

      <span className="sr-only">
        {isSameSong && isPlaying ? 'Pause' : 'Play'}
      </span>
    </Button>
  )
}
