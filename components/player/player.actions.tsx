'use client'

import { NextButton } from '@/components/player/actions/next'
import { PlayButton } from '@/components/player/actions/play'
import { PrevButton } from '@/components/player/actions/prev'
import { useMusicState } from '@/store/app.store'

export const PlayerActions = () => {
  const { playlist, currentIndex } = useMusicState()

  return (
    <>
      <PrevButton />

      <PlayButton songs={playlist} index={currentIndex} />

      <NextButton />
    </>
  )
}
