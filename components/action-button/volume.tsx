import { useMemo } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useStore } from 'store'

import { Button } from '../ui/button'

export const VolumeButton = ({ ...props }) => {
  const { volume, toggleVolume } = useStore()

  const title = useMemo(() => (volume ? 'Mute' : 'Unmute'), [volume])

  return (
    <Button
      title={title}
      aria-label={title}
      variant={volume ? 'ghost' : 'solid'}
      onClick={toggleVolume}
      {...props}
    >
      {volume ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </Button>
  )
}
