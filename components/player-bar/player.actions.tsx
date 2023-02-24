'use client'

import { useStore } from '@/store'

import { PlayButton } from '@/components/action-button/play'
import { PrevButton } from '@/components/action-button/prev'
import { NextButton } from '@/components/action-button/next'

export const PlayerActions = ({ ...props }) => {
  const { playlist, currentIndex } = useStore()

  return (
    <div
      className="flex-1 items-center flex justify-end md:justify-center"
      {...props}
    >
      <PrevButton />

      <PlayButton songs={playlist} index={currentIndex} />

      <NextButton />
    </div>
  )
}
