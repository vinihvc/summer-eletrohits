import { SkipBack } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { usePlayerActions } from '@/store'

export const PrevButton = ({ ...props }) => {
  const { playPrevious } = usePlayerActions()

  return (
    <Button size="icon" variant="ghost" onClick={playPrevious} {...props}>
      <SkipBack className="size-4" />
      <span className="sr-only">Previous song</span>
    </Button>
  )
}
