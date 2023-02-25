'use client'

import { useStore } from '@/store'
import { Forward } from 'lucide-react'

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
      <Forward className="h-5 w-5" />
    </Button>
  )
}
