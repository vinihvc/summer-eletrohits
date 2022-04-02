import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

import { Flex, IconButton } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { Slider } from 'components/slider'

export const Volume = ({ ...props }) => {
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

      <Flex w="150px" ml={5}>
        <Slider value={volume} onChange={setVolume} />
      </Flex>
    </Flex>
  )
}
