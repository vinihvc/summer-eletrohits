import { usePlayer } from 'contexts/PlayerContext'

import { MdShuffle } from 'react-icons/md'

import { chakra } from '@chakra-ui/system'
import { IconButton } from '@chakra-ui/button'

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
