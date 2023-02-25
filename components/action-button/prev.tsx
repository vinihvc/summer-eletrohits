import { useStore } from '@/store'
import { SkipBack } from 'lucide-react'

import { useDevice } from '@/hooks/use-device'
import { Button } from '../ui/button'

export const PrevButton = ({ ...props }) => {
  const { playPrevious } = useStore()

  const { isMobile } = useDevice()

  return (
    <Button
      title="Previous song"
      size={isMobile ? 'sm' : 'md'}
      variant="ghost"
      aria-label="Previous song"
      onClick={playPrevious}
      {...props}
    >
      <SkipBack className="h-5 w-5" />
    </Button>
  )
}
