import { chakra, IconButton } from '@chakra-ui/react'

import { BsSkipEndFill } from 'react-icons/bs'

import { useStore } from 'store'

import { useDevice } from 'hooks/use-device'

export const NextButton = chakra(({ ...props }) => {
  const { playNext } = useStore()

  const { isMobile } = useDevice()

  const title = 'Next song'

  return (
    <IconButton
      icon={<BsSkipEndFill />}
      title={title}
      aria-label={title}
      size={isMobile ? 'sm' : 'md'}
      variant="ghost"
      onClick={playNext}
      {...props}
    />
  )
})
