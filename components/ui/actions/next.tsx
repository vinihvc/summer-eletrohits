'use client'

import { SkipForward } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { usePlayerActions } from '@/store'

export const NextButton = ({ ...props }) => {
  const { playNext } = usePlayerActions()

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
