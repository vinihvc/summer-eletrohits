import { useStore } from '@/store'
import { SkipBack } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const PrevButton = ({ ...props }) => {
  const { playPrevious } = useStore()

  return (
    <Button
      title="Previous song"
      className="h-9 w-9 p-0"
      variant="ghost"
      aria-label="Previous song"
      onClick={playPrevious}
      {...props}
    >
      <SkipBack size={20} />
    </Button>
  )
}
