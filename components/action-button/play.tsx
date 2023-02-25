'use client'

import { useCallback, useMemo } from 'react'
import { useStore } from '@/store'
import { Pause, Play } from 'lucide-react'

import { Button } from '../ui/button'

type PlayButtonProps = {
  songs: SongType[]
  index: number
}

export const PlayButton = ({ songs, index, ...props }: PlayButtonProps) => {
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

  const title = useMemo(() => (isPlaying ? 'Pause' : 'Play'), [isPlaying])

  return (
    <Button
      variant={isSameSong ? 'solid' : 'ghost'}
      title={title}
      aria-label={title}
      className="rounded-full bg-white/20 text-black hover:bg-white/40"
      onClick={handleClick}
      {...props}
    >
      {isSameSong && isPlaying ? (
        <Pause className="h-5 w-5" />
      ) : (
        <Play className="h-5 w-5" />
      )}
    </Button>
  )
}
