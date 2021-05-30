import { usePlayer } from 'contexts/PlayerContext'

import { chakra } from '@chakra-ui/system'
import { Box } from '@chakra-ui/layout'

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
