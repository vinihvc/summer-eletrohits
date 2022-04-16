import { useMemo } from 'react'

import { chakra, IconButton } from '@chakra-ui/react'

import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

import { useStore } from 'store'

export const VolumeButton = chakra(({ ...props }) => {
  const { volume, toggleVolume } = useStore()

  const title = useMemo(() => (volume ? 'Mute' : 'Unmute'), [volume])

  return (
    <IconButton
      icon={volume ? <MdVolumeUp /> : <MdVolumeOff />}
      title={title}
      aria-label={title}
      variant={volume ? 'ghost' : 'solid'}
      onClick={toggleVolume}
      {...props}
    />
  )
})
