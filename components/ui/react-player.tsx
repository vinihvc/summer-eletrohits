'use client'

import {
  useMusicActions,
  usePlayerActions,
  usePlayerState,
} from '@/contexts/app.context'
import RPlayer from 'react-player/youtube'

interface ReactPlayerProps {
  /**
   * Whether the player is hidden
   */
  isHidden?: boolean
}

export const ReactPlayer = ({
  isHidden = true,
  ...props
}: ReactPlayerProps) => {
  const { $player, isPlaying, volume } = usePlayerState()

  const { playNext, onProgress } = usePlayerActions()

  const { currentSong } = useMusicActions()

  return (
    <div className="relative" {...props}>
      <div className="absolute inset-0" />

      <RPlayer
        ref={$player}
        {...(currentSong?.() && {
          url: `https://youtu.be/${currentSong?.().youtubeId}`,
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
