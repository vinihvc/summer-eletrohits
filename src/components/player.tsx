import YouTubePlayer from 'react-player/youtube'

import { Box, chakra } from '@chakra-ui/react'

import { useStore } from 'store'

type PlayerProps = {
  isHidden?: boolean
}

export const Player = chakra(({ isHidden = true, ...props }: PlayerProps) => {
  const { $player, currentSong, playlist, isPlaying, volume, onProgress } =
    useStore()

  const links = playlist.map((s) => `https://youtu.be/${s.youtubeId}`)

  return (
    <Box position="relative" {...props}>
      <Box bottom="0" left="0" position="absolute" right="0" top="0" />

      <YouTubePlayer
        ref={$player}
        {...(currentSong() && { url: links })}
        playing={isPlaying}
        volume={volume}
        onProgress={onProgress}
        {...(isHidden && { hidden: true })}
      />
    </Box>
  )
})
