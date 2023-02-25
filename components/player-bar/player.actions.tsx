'use client'

import { useStore } from '@/store'

import { NextButton } from '@/components/action-button/next'
import { PlayButton } from '@/components/action-button/play'
import { PrevButton } from '@/components/action-button/prev'

export const PlayerActions = ({ ...props }) => {
  const { playlist, currentIndex } = useStore()

  return (
    <div
      className="flex flex-1 items-center justify-end sm:justify-center"
      {...props}
    >
      <PrevButton />

      <PlayButton songs={playlist} index={currentIndex} />

      <NextButton />
    </div>
  )
}
