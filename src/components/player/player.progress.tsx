import { Flex } from '@chakra-ui/react'

import { useStore } from 'store'

import { Slider } from 'components/slider'

export const PlayerProgress = ({ ...props }) => {
  const { progress, handleProgress } = useStore()

  return (
    <Flex {...props}>
      <Slider value={progress} onChange={handleProgress} />
    </Flex>
  )
}
