import { usePlayer } from 'contexts/PlayerContext'

import { MdRepeat } from 'react-icons/md'

import { chakra, IconButton } from '@chakra-ui/react'

const Repeat = ({ ...props }) => {
  const { isLooping, toggleLoop } = usePlayer()

  return (
    <IconButton
      icon={<MdRepeat />}
      variant={isLooping ? 'solid' : 'ghost'}
      color={isLooping ? 'primary' : 'current'}
      borderRadius="full"
      aria-label="Repeat song"
      onClick={toggleLoop}
      {...props}
    />
  )
}

export default chakra(Repeat)
