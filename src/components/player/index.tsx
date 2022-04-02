import { useEffect } from 'react'

import { Container, Flex } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { useDevice } from 'hooks/use-device'

import { Video } from './player.video'
import { SongInfo } from './player.info'
import { Actions } from './player.actions'
import { Progress } from './player.progress'
import { Queue } from './player.queue'
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
      e.code === 'Space' && togglePlay()

      e.code === 'ArrowRight' && playNext()

      e.code === 'ArrowLeft' && playPrevious()

      e.code === 'ArrowLeft' && playPrevious()

      e.code === 'ArrowUp' && volumeUp()

      e.code === 'ArrowDown' && volumeDown()
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
      bg="player"
      backdropFilter="blur(10px)"
      align="center"
      w="100%"
      h={{ base: '60px', md: '80px' }}
      pos="fixed"
      bottom={{ base: '50px', md: '0px' }}
      borderBottom="1px solid "
      borderColor="gray.700"
      zIndex="sticky"
      {...props}
    >
      <Progress pos="absolute" top="-16px" left="0" right="0" />

      <Container maxW="full" px={{ base: 5, md: 10 }} pos="relative">
        <Flex justify="space-between" align="center">
          <Flex w={{ md: '30%' }}>
            <Video display={{ base: 'none', md: 'block' }} mr={5} />

            <SongInfo />
          </Flex>

          <Actions />

          <Flex w={{ md: '30%' }}>
            {!isMobile && <Repeat mr={3} />}

            {!isMobile && <Shuffle mr={3} />}

            {!isMobile && <Queue mr={3} />}

            {!isMobile && <Volume maxW="150px" />}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
