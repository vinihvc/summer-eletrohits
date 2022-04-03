import { Box } from '@chakra-ui/react'

import ReactPlayer from 'react-player/lazy'

import { usePlayer } from 'contexts/player'

import { BlurImage } from 'components/blur-image'

export const Video = ({ ...props }) => {
  const { $player, isPlaying, currentSong, onEnded, volume, onProgress } =
    usePlayer()

  return (
    <Box position="relative" overflow="auto" {...props}>
      <BlurImage
        src={`https://img.youtube.com/vi/${currentSong?.youtubeId}/0.jpg`}
        alt={`${currentSong?.name} album cover`}
        boxSize={10}
        borderRadius="full"
        objectFit="cover"
      />

      <ReactPlayer
        ref={$player}
        playing={isPlaying}
        url={`http://youtu.be/${currentSong?.youtubeId}`}
        volume={volume}
        onProgress={onProgress}
        onEnded={onEnded}
        width={0}
        height={0}
      />

      <Box bottom="0" left="0" position="absolute" right="0" top="0" />
    </Box>
  )
}
