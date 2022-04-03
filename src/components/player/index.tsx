import { useEffect } from 'react'

import { Container, Flex, HStack } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { useDevice } from 'hooks/use-device'

import { Video } from './player.video'
import { SongInfo } from './player.info'
import { Actions } from './player.actions'
import { Progress } from './player.progress'
import { Playlist } from './player.playlist'
import { Volume } from './player.volume'
import { Shuffle } from './player.shuffle'
import { Repeat } from './player.repeat'

export const Player = ({ ...props }) => {
  const { isMobile } = useDevice()

  const {
    currentSong,
    togglePlay,
    playNext,
    playPrevious,
    volumeUp,
    volumeDown
  } = usePlayer()

  useEffect(() => {
    const keyboardControl = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        togglePlay()
      }

      if (e.code === 'ArrowRight') {
        e.preventDefault()
        playNext()
      }

      if (e.code === 'ArrowLeft') {
        e.preventDefault()
        playPrevious()
      }

      if (e.code === 'ArrowLeft') {
        e.preventDefault()
        playPrevious()
      }

      if (e.code === 'ArrowUp') {
        e.preventDefault()
        volumeUp()
      }

      if (e.code === 'ArrowDown') {
        e.preventDefault()
        volumeDown()
      }
    }

    document.addEventListener('keydown', keyboardControl)

    return () => {
      document.removeEventListener('keydown', keyboardControl)
    }
  }, [togglePlay, playNext, playPrevious, volumeUp, volumeDown])

  if (!currentSong) {
    return null
  }

  return (
    <Flex
      pos="sticky"
      bottom={{ base: '50px', md: '0px' }}
      left="0"
      right="0"
      bg="player"
      borderTop="3px solid"
      borderColor="blue.100"
      {...props}
    >
      <Container maxW="container.xl" pos="relative">
        <Progress pos="absolute" top="-4px" left="0" right="0" />

        <HStack w="full" align="center" h={{ base: '60px', md: '80px' }}>
          <HStack spacing={4}>
            <Video />

            <SongInfo />
          </HStack>

          <Actions />

          <HStack>
            {!isMobile && <Repeat />}

            {!isMobile && <Shuffle />}

            {!isMobile && <Playlist />}

            {!isMobile && <Volume maxW="150px" />}
          </HStack>
        </HStack>
      </Container>
    </Flex>
  )
}
