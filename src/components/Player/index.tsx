import { RefObject, useRef, useState } from 'react'

import { useRouter } from 'next/dist/client/router'

import ReactPlayer from 'react-player/youtube'
import { ReactPlayerProps } from 'react-player'

import { Box, Container, Flex, Link } from '@chakra-ui/layout'

import {
  MdPlayArrow,
  MdPause,
  MdSkipPrevious,
  MdSkipNext,
  MdShuffle,
  MdRepeat,
  MdQueueMusic,
  MdVolumeOff,
  MdVolumeUp
} from 'react-icons/md'

import { usePlayer } from 'contexts/PlayerContext'

import Slider from 'components/Slider'
import { useColorModeValue } from '@chakra-ui/color-mode'

const Player = () => {
  const $ref = useRef() as RefObject<ReactPlayer>

  const router = useRouter()

  const {
    isPlaying,
    togglePlay,
    currentSong,
    playPrevious,
    playNext,
    toggleShuffle,
    toggleLoop,
    isLooping,
    isShuffling,
    hasNext
  } = usePlayer()

  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const [saveVolume, setSaveVolume] = useState(0)

  function handleProgress({ played }: ReactPlayerProps) {
    setProgress(played)
  }

  function handleSeek(value: number) {
    setProgress(value)

    $ref.current?.seekTo(value)
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext()
    }
  }

  function handleQueue() {
    if (router.pathname === '/queue') {
      router.back()
    } else {
      router.push('/queue')
    }
  }

  function handleVolume() {
    if (volume === 0) {
      setVolume(saveVolume)
    } else {
      setSaveVolume(volume)
      setVolume(0)
    }
  }

  return (
    <Flex
      bg={useColorModeValue('gray.50', 'gray.900')}
      hidden={!currentSong}
      pos="sticky"
      align="center"
      w="100%"
      h="70px"
      bottom="0"
    >
      <Container maxW="container.lg">
        <Flex align="center">
          <Box borderRadius="full" position="relative" overflow="auto">
            <ReactPlayer
              ref={$ref}
              playing={isPlaying}
              url={`http://youtu.be/${currentSong?.youtubeId}`}
              volume={volume}
              onProgress={handleProgress}
              onEnded={handleEpisodeEnded}
              width="50px"
              height="50px"
            />

            <Box bottom="0" left="0" position="absolute" right="0" top="0" />
          </Box>

          <Box
            onClick={toggleShuffle}
            color={isShuffling ? 'red.500' : 'current'}
            ml="20px"
            cursor="pointer"
          >
            <MdShuffle size="20" color="currentColor" />
          </Box>

          <Box onClick={playPrevious} cursor="pointer" ml="20px">
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
            ml="20px"
          >
            <MdRepeat size="20" color="currentColor" />
          </Box>

          <Flex flex="6 1" ml="20px">
            <Slider value={progress} onChange={handleSeek} />
          </Flex>

          <Link onClick={handleQueue} ml="20px" cursor="pointer">
            <MdQueueMusic size="20" color="currentColor" />
          </Link>

          <Box onClick={handleVolume} ml="20px" cursor="pointer">
            {volume === 0 ? (
              <MdVolumeOff size="20" color="currentColor" />
            ) : (
              <MdVolumeUp size="20" color="currentColor" />
            )}
          </Box>

          <Flex flex="1 1" ml="20px">
            <Slider value={volume} onChange={setVolume} />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Player
