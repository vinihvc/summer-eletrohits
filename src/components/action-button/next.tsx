import { chakra, IconButton } from '@chakra-ui/react'

import { BsSkipEndFill } from 'react-icons/bs'

import { useStore } from 'store'

import { useDevice } from 'hooks/use-device'

export const NextButton = chakra(({ ...props }) => {
  const { playNext } = useStore()

  const { isMobile } = useDevice()

  return (
    <IconButton
      icon={<BsSkipEndFill />}
      size={isMobile ? 'sm' : 'md'}
      variant="ghost"
      aria-label="Skip song"
      onClick={playNext}
      {...props}
    />
  )
})
