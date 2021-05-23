import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

import { Box, Flex } from '@chakra-ui/layout'

import Slider from 'components/Slider'

import { usePlayer } from 'contexts/PlayerContext'

const Volume = () => {
  const { volume, setVolume, toggleVolume } = usePlayer()

  return (
    <>
      <Box onClick={toggleVolume} ml={5} cursor="pointer">
        {volume === 0 ? (
          <MdVolumeOff size="20" color="currentColor" />
        ) : (
          <MdVolumeUp size="20" color="currentColor" />
        )}
      </Box>

      <Flex flex="1 1" ml={5}>
        <Slider value={volume} onChange={setVolume} />
      </Flex>
    </>
  )
}

export default Volume
