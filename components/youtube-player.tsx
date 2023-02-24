'use client'

import YouTubePlayer from 'react-player/youtube'

import { useStore } from '@/store'

type PlayerProps = {
  isHidden?: boolean
}

export const YoutubePlayer = ({ isHidden = true, ...props }: PlayerProps) => {
  const { $player, currentSong, isPlaying, volume, onProgress, playNext } =
    useStore()

  return (
    <div className="relative" {...props}>
      <div className="inset-0 absolute" />

      <YouTubePlayer
        ref={$player}
        {...(currentSong() && {
          url: `https://youtu.be/${currentSong().youtubeId}`
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
