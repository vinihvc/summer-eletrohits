import { useEffect } from 'react'

import { Container, Flex, HStack } from '@chakra-ui/react'

import { useStore } from 'store'

import { useDevice } from 'hooks/use-device'

import { Player } from 'components/player'

import { PlayerSongInfo } from './player.info'
import { PlayerActions } from './player.actions'
import { PlayerProgress } from './player.progress'
import { PlayerPlaylist } from './player.playlist'
import { PlayerVolume } from './player.volume'

const PlayerBar = ({ ...props }) => {
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
    <>
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
          <PlayerProgress />

          <HStack flex={1} align="center" h={20}>
            <PlayerSongInfo w={{ lg: '20%' }} />

            <PlayerActions flex={1} />

            <HStack w={{ lg: '20%' }}>
              {!isMobile && <PlayerPlaylist />}

              {!isMobile && <PlayerVolume />}
            </HStack>
          </HStack>
        </Container>
      </Flex>

      <Player isHidden />
    </>
  )
}

export default PlayerBar
