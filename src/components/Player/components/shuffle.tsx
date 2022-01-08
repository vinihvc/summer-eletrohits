import { usePlayer } from 'contexts/PlayerContext'

import { MdShuffle } from 'react-icons/md'

import { chakra, IconButton } from '@chakra-ui/react'

const Shuffle = ({ ...props }) => {
  const { isShuffling, toggleShuffle } = usePlayer()

  return (
    <IconButton
      icon={<MdShuffle />}
      variant={isShuffling ? 'solid' : 'ghost'}
      color={isShuffling ? 'primary' : 'current'}
      borderRadius="full"
      aria-label="Shuffle songs"
      onClick={toggleShuffle}
      {...props}
    />
  )
}

export default chakra(Shuffle)
