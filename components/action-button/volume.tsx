import { useMemo } from 'react'

import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

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
      {volume ? <MdVolumeUp /> : <MdVolumeOff />}
    </Button>
  )
}
