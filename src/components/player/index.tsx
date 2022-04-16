import { useEffect } from 'react'

import { Container, Flex, HStack } from '@chakra-ui/react'

import { useStore } from 'store'

import { useDevice } from 'hooks/use-device'

import { PlayerThumb } from './player.thumb'
import { PlayerSongInfo } from './player.info'
import { PlayerActions } from './player.actions'
import { PlayerProgress } from './player.progress'
import { PlayerPlaylist } from './player.playlist'
import { PlayerVolume } from './player.volume'

const Player = ({ ...props }) => {
  const {
    currentSong,
    playNext,
    togglePlay,
    playPrevious,
    volumeUp,
    volumeDown
  } = useStore()

  const { isMobile } = useDevice()

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

  if (!currentSong()) {
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
        <PlayerProgress pos="absolute" top="-4px" left="0" right="0" />

        <HStack w="full" align="center" h={{ base: '60px', md: '80px' }}>
          <HStack spacing={4}>
            <PlayerThumb />

            <PlayerSongInfo />
          </HStack>

          <PlayerActions />

          <HStack>
            {!isMobile && <PlayerPlaylist />}

            {!isMobile && <PlayerVolume maxW="150px" />}
          </HStack>
        </HStack>
      </Container>
    </Flex>
  )
}

export default Player
