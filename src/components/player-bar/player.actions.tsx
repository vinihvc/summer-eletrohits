import { chakra, HStack } from '@chakra-ui/react'

import { useStore } from 'store'

import { PlayButton } from 'components/action-button/play'
import { PrevButton } from 'components/action-button/prev'
import { NextButton } from 'components/action-button/next'

export const PlayerActions = chakra(({ ...props }) => {
  const { playlist, currentIndex } = useStore()

  return (
    <HStack
      w="full"
      align="center"
      justify={{ base: 'flex-end', md: 'center' }}
      {...props}
    >
      <PrevButton />

      <PlayButton songs={playlist} index={currentIndex} />

      <NextButton />
    </HStack>
  )
})
