'use client'

import {
  useMusicActions,
  usePlayerActions,
  usePlayerState,
} from '@/store/app.store'
import type React from 'react'
import RPlayer from 'react-player/youtube'

interface ReactPlayerProps extends React.ComponentProps<typeof RPlayer> {}

export const ReactPlayer = (props: ReactPlayerProps) => {
  const { $player, isPlaying, volume } = usePlayerState()

  const { nextSong, onProgress } = usePlayerActions()

  const { currentSong } = useMusicActions()

  return (
    <RPlayer
      ref={$player}
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      }}
      {...(currentSong() && {
        url: `https://youtu.be/${currentSong()?.youtubeId}`,
      })}
      playing={isPlaying}
      volume={volume}
      onEnded={nextSong}
      onProgress={onProgress}
      {...props}
    />
  )
}
