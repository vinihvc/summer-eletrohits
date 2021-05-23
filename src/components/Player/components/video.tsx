import ReactPlayer from 'react-player'

import { chakra } from '@chakra-ui/system'

import { Box } from '@chakra-ui/layout'

import { usePlayer } from 'contexts/PlayerContext'

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

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext()
    }
  }

  return (
    <Box borderRadius="full" position="relative" overflow="auto" {...props}>
      <ReactPlayer
        ref={$player}
        playing={isPlaying}
        url={`http://youtu.be/${currentSong?.youtubeId}`}
        volume={volume}
        onProgress={onProgress}
        onEnded={handleEpisodeEnded}
        width="50px"
        height="50px"
      />

      <Box bottom="0" left="0" position="absolute" right="0" top="0" />
    </Box>
  )
}

export default chakra(Video)
