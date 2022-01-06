import { useEffect } from 'react'

import { chakra } from '@chakra-ui/system'

import { Container, Flex } from '@chakra-ui/layout'

import { useColorModeValue } from '@chakra-ui/color-mode'

import useDevice from 'hooks/use-device'

import Video from './components/video'
import SongInfo from './components/song-info'
import Actions from './components/actions'
import Progress from './components/progress'
import Queue from './components/queue'
import Volume from './components/volume'
import Shuffle from './components/shuffle'
import Repeat from './components/repeat'
import { usePlayer } from 'contexts/PlayerContext'

const Player = ({ ...props }) => {
  const { isMobile } = useDevice()

  const { togglePlay, playNext, playPrevious, volumeUp, volumeDown } =
    usePlayer()

  useEffect(() => {
    const keyboardControl = (e: KeyboardEvent) => {
      e.code === 'Space' && togglePlay()

      e.code === 'ArrowRight' && playNext()

      e.code === 'ArrowLeft' && playPrevious()

      e.code === 'ArrowLeft' && playPrevious()

      e.code === 'ArrowUp' && volumeUp()

      e.code === 'ArrowDown' && volumeDown()

      e.preventDefault()
    }

    document.addEventListener('keydown', keyboardControl)

    return () => {
      document.removeEventListener('keydown', keyboardControl)
    }
  }, [togglePlay, playNext, playPrevious, volumeUp, volumeDown])

  return (
    <Flex
      id="player"
      bg={useColorModeValue('playerLight', 'playerDark')}
      backdropFilter="blur(10px)"
      align="center"
      w="100%"
      h={{ base: '60px', md: '80px' }}
      pos="fixed"
      bottom={{ base: '50px', md: '0px' }}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      borderBottomStyle="solid"
      {...props}
    >
      <Progress position="absolute" top="-16px" left="0" right="0" />

      <Container maxW="full" px={{ base: 5, md: 10 }} position="relative">
        <Flex justify="space-between" align="center">
          <Flex w={{ md: '30%' }}>
            <Video display={{ base: 'none', md: 'block' }} mr={5} />

            <SongInfo />
          </Flex>

          <Actions w={{ md: '40%' }} />

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

export default chakra(Player)
