import { useMemo } from 'react'

import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

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
        <SpeakerWaveIcon className="w-5 h-5" />
      ) : (
        <SpeakerXMarkIcon className="w-5 h-5" />
      )}
    </Button>
  )
}
