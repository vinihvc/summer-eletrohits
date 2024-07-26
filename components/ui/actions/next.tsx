'use client'

import { SkipForward } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { usePlayerActions } from '@/contexts/app.context'

export const NextButton = ({ ...props }) => {
  const { playNext } = usePlayerActions()

  return (
    <Button variant="ghost" size="icon" onClick={playNext} {...props}>
      <SkipForward className="size-4" />
      <span className="sr-only">Next song</span>
    </Button>
  )
}
