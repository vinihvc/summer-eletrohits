import { chakra, IconButton } from '@chakra-ui/react'

import { BsSkipStartFill } from 'react-icons/bs'

import { useStore } from 'store'

import { useDevice } from 'hooks/use-device'

export const PrevButton = chakra(({ ...props }) => {
  const { playPrevious } = useStore()

  const { isMobile } = useDevice()

  return (
    <IconButton
      icon={<BsSkipStartFill />}
      size={isMobile ? 'sm' : 'md'}
      variant="ghost"
      aria-label="Previous song"
      onClick={playPrevious}
      {...props}
    />
  )
})
