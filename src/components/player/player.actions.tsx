import { BsSkipEndFill, BsSkipStartFill } from 'react-icons/bs'

import { IconButton, HStack } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { useDevice } from 'hooks/use-device'
import { PlayButton } from 'components/action-button/play'

export const Actions = () => {
  const { currentSong, playPrevious, playNext } = usePlayer()

  const { isMobile } = useDevice()

  return (
    <HStack
      align="center"
      w="full"
      justify={{ base: 'flex-end', md: 'center' }}
    >
      <IconButton
        icon={<BsSkipStartFill />}
        size={isMobile ? 'sm' : 'md'}
        variant="ghost"
        aria-label="Previous song"
        onClick={playPrevious}
      />

      <PlayButton song={currentSong} />

      <IconButton
        icon={<BsSkipEndFill />}
        size={isMobile ? 'sm' : 'md'}
        variant="ghost"
        aria-label="Skip song"
        onClick={playNext}
      />
    </HStack>
  )
}
