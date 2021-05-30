import { usePlayer } from 'contexts/PlayerContext'
import useDevice from 'hooks/use-device'

import {
  BsFillPlayFill,
  BsPauseFill,
  BsSkipEndFill,
  BsSkipStartFill
} from 'react-icons/bs'

import { chakra } from '@chakra-ui/system'
import { IconButton } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'

const Actions = () => {
  const { isPlaying, togglePlay, playPrevious, playNext } = usePlayer()

  const { isMobile } = useDevice()

  return (
    <Flex align="center" w="100%" justify={{ base: 'flex-end', md: 'center' }}>
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
        onClick={togglePlay}
        mx={3}
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

export default chakra(Actions)
