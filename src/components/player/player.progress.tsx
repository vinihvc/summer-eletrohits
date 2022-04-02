import { Box } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { Slider } from 'components/slider'

export const Progress = ({ ...props }) => {
  const { progress, handleProgress } = usePlayer()

  return (
    <Box {...props}>
      <Slider value={progress} onChange={handleProgress} />
    </Box>
  )
}
