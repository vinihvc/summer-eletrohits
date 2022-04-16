import { Flex } from '@chakra-ui/react'

import { useStore } from 'store'

import { Slider } from 'components/slider'

export const PlayerProgress = () => {
  const { progress, handleProgress } = useStore()

  return (
    <Flex pos="absolute" top="-4px" left="0" right="0">
      <Slider value={progress} onChange={handleProgress} />
    </Flex>
  )
}
