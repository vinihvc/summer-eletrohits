import { Flex } from '@chakra-ui/react'

import { useStore } from 'store'

import { Slider } from 'components/slider'
import { VolumeButton } from 'components/action-button/volume'

export const PlayerVolume = ({ ...props }) => {
  const { volume, changeVolume } = useStore()

  return (
    <Flex {...props}>
      <VolumeButton />

      <Flex w="150px" ml={5}>
        <Slider value={volume} onChange={changeVolume} />
      </Flex>
    </Flex>
  )
}
