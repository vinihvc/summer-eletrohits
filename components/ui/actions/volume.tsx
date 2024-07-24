import { Volume2, VolumeX } from 'lucide-react'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { usePlayerActions, usePlayerState } from '@/store'

export const VolumeButton = ({ ...props }) => {
  const { volume } = usePlayerState()
  const { toggleVolume } = usePlayerActions()

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
