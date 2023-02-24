'use client'

import { useCallback, useMemo } from 'react'

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { useStore } from '@/store'
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
      className="bg-white/20 hover:bg-white/40"
      onClick={handleClick}
      {...props}
    >
      {isSameSong && isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
    </Button>
  )
}
