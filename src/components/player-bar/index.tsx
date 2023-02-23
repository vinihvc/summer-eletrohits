import { Container, Flex, HStack } from '@chakra-ui/react'

import { useStore } from 'store'

import { useDevice } from 'hooks/use-device'
import { useMediaKeyPress } from 'hooks/media-keypress'

import { YoutubePlayer } from 'components/youtube-player'

import { PlayerSongInfo } from './player.info'
import { PlayerActions } from './player.actions'
import { PlayerProgress } from './player.progress'
import { PlayerPlaylist } from './player.playlist'
import { PlayerVolume } from './player.volume'

const PlayerBar = ({ ...props }) => {
  const { currentSong } = useStore()

  const { isMobile } = useDevice()

  useMediaKeyPress()

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
        bg="gray.900"
        borderTop="4px solid"
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

      <YoutubePlayer isHidden />
    </>
  )
}

export default PlayerBar
