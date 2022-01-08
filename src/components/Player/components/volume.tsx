import { usePlayer } from 'contexts/PlayerContext'

import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

import { chakra, Flex, IconButton } from '@chakra-ui/react'

import Slider from 'components/Slider'

const Volume = ({ ...props }) => {
  const { volume, setVolume, toggleVolume } = usePlayer()

  return (
    <Flex {...props}>
      <IconButton
        icon={volume ? <MdVolumeUp /> : <MdVolumeOff />}
        borderRadius="full"
        variant={volume ? 'ghost' : 'solid'}
        aria-label="Toggle volume"
        onClick={toggleVolume}
      />

      <Flex width="150px" ml={5}>
        <Slider value={volume} onChange={setVolume} />
      </Flex>
    </Flex>
  )
}

export default chakra(Volume)
