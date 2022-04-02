import {
  BsFillPlayFill,
  BsPauseFill,
  BsSkipEndFill,
  BsSkipStartFill
} from 'react-icons/bs'

import { IconButton, Flex } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { useDevice } from 'hooks/use-device'

export const Actions = () => {
  const { isPlaying, togglePlay, playPrevious, playNext } = usePlayer()

  const { isMobile } = useDevice()

  return (
    <Flex
      align="center"
      w={{ base: '100%', md: '40%' }}
      justify={{ base: 'flex-end', md: 'center' }}
    >
      <IconButton
        icon={<BsSkipStartFill />}
        size={isMobile ? 'sm' : 'md'}
        variant="ghost"
        borderRadius="full"
        aria-label="Previous song"
        onClick={playPrevious}
      />

      <IconButton
        icon={isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
        size={isMobile ? 'sm' : 'md'}
        borderRadius="full"
        aria-label="play"
        mx={3}
        onClick={togglePlay}
      />

      <IconButton
        icon={<BsSkipEndFill />}
        size={isMobile ? 'sm' : 'md'}
        variant="ghost"
        borderRadius="full"
        aria-label="Skip song"
        onClick={playNext}
      />
    </Flex>
  )
}
