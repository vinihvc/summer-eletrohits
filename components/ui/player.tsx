'use client'

import { useMusicActions } from '@/contexts/music'
import { usePlayerActions, usePlayerState } from '@/store/player.store'
import ReactPlayer from 'react-player/youtube'

interface PlayerProps {
  /**
   * Whether the player is hidden
   */
  isHidden?: boolean
}

export const Player = ({ isHidden = true, ...props }: PlayerProps) => {
  const { $player, isPlaying, volume } = usePlayerState()

  const { playNext, onProgress } = usePlayerActions()

  const { currentSong } = useMusicActions()

  return (
    <div className="relative" {...props}>
      <div className="absolute inset-0" />

      <ReactPlayer
        ref={$player}
        {...(currentSong() && {
          url: `https://youtu.be/${currentSong().youtubeId}`,
        })}
        playing={isPlaying}
        volume={volume}
        onEnded={playNext}
        onProgress={onProgress}
        {...(isHidden && { hidden: true })}
      />
    </div>
  )
}
