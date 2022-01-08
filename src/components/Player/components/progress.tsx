import { chakra, Box } from '@chakra-ui/react'

import { usePlayer } from 'contexts/PlayerContext'

import Slider from 'components/Slider'

const Progress = ({ ...props }) => {
  const { progress, handleProgress } = usePlayer()

  return (
    <Box {...props}>
      <Slider value={progress} onChange={handleProgress} />
    </Box>
  )
}

export default chakra(Progress)
