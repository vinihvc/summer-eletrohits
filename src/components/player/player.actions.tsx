import { HStack } from '@chakra-ui/react'

import { useStore } from 'store'

import { PlayButton } from 'components/action-button/play'
import { PrevButton } from 'components/action-button/prev'
import { NextButton } from 'components/action-button/next'

export const PlayerActions = () => {
  const { playlist, currentIndex } = useStore()

  return (
    <HStack
      align="center"
      w="full"
      justify={{ base: 'flex-end', md: 'center' }}
    >
      <PrevButton />

      <PlayButton songs={playlist} index={currentIndex} />

      <NextButton />
    </HStack>
  )
}
