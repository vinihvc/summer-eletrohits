'use client'

import { BsSkipEndFill } from 'react-icons/bs'

import { useStore } from '@/store'

import { useDevice } from '@/hooks/use-device'
import { Button } from '../ui/button'

export const NextButton = ({ ...props }) => {
  const { playNext } = useStore()

  const { isMobile } = useDevice()

  const title = 'Next song'

  return (
    <Button
      title={title}
      aria-label={title}
      size={isMobile ? 'sm' : 'md'}
      variant="ghost"
      onClick={playNext}
      {...props}
    >
      <BsSkipEndFill />
    </Button>
  )
}
