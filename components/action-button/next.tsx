'use client'

import { ForwardIcon } from '@heroicons/react/24/solid'

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
      <ForwardIcon className="w-5 h-5" />
    </Button>
  )
}
