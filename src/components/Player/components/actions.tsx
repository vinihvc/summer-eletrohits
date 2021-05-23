import { Box } from '@chakra-ui/layout'

import {
  MdPause,
  MdPlayArrow,
  MdRepeat,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious
} from 'react-icons/md'

import { usePlayer } from 'contexts/PlayerContext'

const Actions = () => {
  const {
    isPlaying,
    togglePlay,
    playPrevious,
    playNext,
    toggleShuffle,
    toggleLoop,
    isLooping,
    isShuffling
  } = usePlayer()

  return (
    <>
      <Box
        onClick={toggleShuffle}
        color={isShuffling ? 'red.500' : 'current'}
        ml={5}
        cursor="pointer"
      >
        <MdShuffle size="20" color="currentColor" />
      </Box>

      <Box onClick={playPrevious} cursor="pointer" ml={5}>
        <MdSkipPrevious size="30" />
      </Box>

      <Box onClick={togglePlay} cursor="pointer">
        {isPlaying ? <MdPause size="50" /> : <MdPlayArrow size="50" />}
      </Box>

      <Box cursor="pointer" onClick={playNext}>
        <MdSkipNext size="30" />
      </Box>

      <Box
        onClick={toggleLoop}
        color={isLooping ? 'red.500' : 'current'}
        cursor="pointer"
        ml={5}
      >
        <MdRepeat size="20" color="currentColor" />
      </Box>
    </>
  )
}

export default Actions
