import ReactPlayer from 'react-player'

import { usePlayer } from 'contexts/PlayerContext'

import { chakra } from '@chakra-ui/system'
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const Video = ({ ...props }) => {
  const {
    $player,
    isPlaying,
    currentSong,
    playNext,
    hasNext,
    volume,
    onProgress
  } = usePlayer()

  const handleEpisodeEnded = () => {
    if (hasNext) {
      playNext()
    }
  }

  return (
    <Box position="relative" overflow="auto" {...props}>
      <Image
        src={`https://img.youtube.com/vi/${currentSong?.youtubeId}/0.jpg`}
        width="40px"
        height="40px"
        borderRadius="full"
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/150/000?text="
      />

      <ReactPlayer
        ref={$player}
        playing={isPlaying}
        url={`http://youtu.be/${currentSong?.youtubeId}`}
        volume={volume}
        onProgress={onProgress}
        onEnded={handleEpisodeEnded}
        width={0}
        height={0}
      />

      <Box bottom="0" left="0" position="absolute" right="0" top="0" />
    </Box>
  )
}

export default chakra(Video)
