import { HStack } from '@chakra-ui/react'

import { useStore } from 'store'

import { Slider } from 'components/slider'
import { VolumeButton } from 'components/action-button/volume'

export const PlayerVolume = ({ ...props }) => {
  const { volume, changeVolume } = useStore()

  return (
    <HStack w="full" spacing={4} {...props}>
      <VolumeButton />

      <Slider w="100px" value={volume} onChange={changeVolume} />
    </HStack>
  )
}
