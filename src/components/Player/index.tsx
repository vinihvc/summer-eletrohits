import { RefObject, useRef, useState } from 'react'

import ReactPlayer from 'react-player/youtube'
import { ReactPlayerProps } from 'react-player'

import { Box, Container, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

import { MdPlayArrow, MdPause } from 'react-icons/md'

import { usePlayer } from 'contexts/PlayerContext'

const Player = () => {
  const $ref = useRef() as RefObject<ReactPlayer>
  const { song, isPlaying, togglePlay } = usePlayer()
  const [progress, setProgress] = useState(0)

  function handleProgress({ played }: ReactPlayerProps) {
    setProgress(played)
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    setProgress(parseFloat(e.target.value))

    $ref.current?.seekTo(progress)
  }

  return (
    <Box
      pos="sticky"
      w="100%"
      paddingY="14px"
      bottom="0"
      backgroundColor="gray.500"
      hidden={!song}
    >
      <Container maxW="container.lg">
        <Flex align="center">
          <Image
            src={song?.thumb}
            alt={song?.name}
            objectFit="cover"
            width="50px"
            borderRadius="xl"
          />

          <button onClick={togglePlay}>
            {isPlaying ? <MdPause size="50" /> : <MdPlayArrow size="50" />}
          </button>

          <Flex flex="1 1">
            <input
              type="range"
              value={progress}
              min={0}
              max={0.999999}
              step="any"
              onChange={handleSeek}
            />
          </Flex>

          <ReactPlayer
            ref={$ref}
            playing={isPlaying}
            url={song?.videoUrl}
            onProgress={handleProgress}
            width="0"
            height="0"
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Player
