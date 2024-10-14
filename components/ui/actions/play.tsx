'use client'

import { Pause, Play } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  useMusicActions,
  usePlayerActions,
  usePlayerState,
} from '@/store/app.store'

interface PlayButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * List of songs
   */
  songs: SongType[]
  /**
   * Index of the song
   */
  index: number
}

export const PlayButton = (props: PlayButtonProps) => {
  const { songs, index, className, ...rest } = props

  const { isPlaying } = usePlayerState()
  const { togglePlay, play } = usePlayerActions()
  const { currentSong } = useMusicActions()

  const song = songs?.[index]

  const isSameSong = currentSong()?.id === song?.id

  const handleClick = () => {
    if (isPlaying && isSameSong) {
      togglePlay()
    } else {
      play?.(songs, index)
    }
  }

  return (
    <Button
      size="icon"
      className={cn('[&>svg]:fill-current', className)}
      onClick={handleClick}
      {...rest}
    >
      {React.cloneElement(isSameSong && isPlaying ? <Pause /> : <Play />, {
        className: 'size-3 fill-current',
      })}

      <span className="sr-only">
        {isSameSong && isPlaying ? 'Pause' : 'Play'}
      </span>
    </Button>
  )
}
