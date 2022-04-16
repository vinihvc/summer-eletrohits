import { Box } from '@chakra-ui/react'

import ReactPlayer from 'react-player/youtube'

import { useStore } from 'store'

import { BlurImage } from 'components/blur-image'

export const PlayerThumb = ({ ...props }) => {
  const { currentSong, $player, isPlaying, volume, onProgress, onEnded } =
    useStore()

  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      position="relative"
      overflow="auto"
      {...props}
    >
      <BlurImage
        src={`https://img.youtube.com/vi/${currentSong()?.youtubeId}/0.jpg`}
        alt={`${currentSong()?.name} album cover`}
        boxSize={10}
        borderRadius="full"
        objectFit="cover"
      />

      <ReactPlayer
        ref={$player}
        playing={isPlaying}
        {...(currentSong() && {
          url: `https://www.youtube.com/watch?v=${currentSong()?.youtubeId}`
        })}
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
