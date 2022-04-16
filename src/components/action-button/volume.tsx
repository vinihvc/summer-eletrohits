import { chakra, IconButton } from '@chakra-ui/react'

import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

import { useStore } from 'store'

export const VolumeButton = chakra(({ ...props }) => {
  const { volume, toggleVolume } = useStore()

  return (
    <IconButton
      icon={volume ? <MdVolumeUp /> : <MdVolumeOff />}
      title={volume ? 'Mute' : 'Unmute'}
      variant={volume ? 'ghost' : 'solid'}
      aria-label="Toggle volume"
      onClick={toggleVolume}
      {...props}
    />
  )
})
