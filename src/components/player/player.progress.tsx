import { Flex } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { Slider } from 'components/slider'

export const Progress = ({ ...props }) => {
  const { progress, handleProgress } = usePlayer()

  return (
    <Flex {...props}>
      <Slider value={progress} onChange={handleProgress} />
    </Flex>
  )
}
