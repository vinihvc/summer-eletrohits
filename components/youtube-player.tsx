'use client'

import { useStore } from '@/store'
import YouTubePlayer from 'react-player/youtube'

type PlayerProps = {
  isHidden?: boolean
}

export const YoutubePlayer = ({ isHidden = true, ...props }: PlayerProps) => {
  const { $player, currentSong, isPlaying, volume, onProgress, playNext } =
    useStore()

  return (
    <div className="relative" {...props}>
      <div className="absolute inset-0" />

      <YouTubePlayer
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
