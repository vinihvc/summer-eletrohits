'use client'

import { useStore } from '@/store'
import { SkipForward } from 'lucide-react'

import { Button } from '../ui/button'

export const NextButton = ({ ...props }) => {
  const { playNext } = useStore()

  const title = 'Next song'

  return (
    <Button
      title={title}
      aria-label={title}
      className="h-9 w-9 p-0"
      variant="ghost"
      onClick={playNext}
      {...props}
    >
      <SkipForward size={20} />
    </Button>
  )
}
