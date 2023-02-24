import { BsSkipStartFill } from 'react-icons/bs'

import { useStore } from 'store'

import { useDevice } from 'hooks/use-device'
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
      <BsSkipStartFill />
    </Button>
  )
}
