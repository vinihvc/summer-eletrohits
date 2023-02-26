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
      {volume ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </Button>
  )
}
