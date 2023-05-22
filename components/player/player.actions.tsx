'use client'

import { useStore } from '@/store'

import { NextButton } from '@/components/actions/next'
import { PlayButton } from '@/components/actions/play'
import { PrevButton } from '@/components/actions/prev'

export const PlayerActions = ({ ...props }) => {
  const { playlist, currentIndex } = useStore()

  return (
    <div
      className="flex flex-1 items-center justify-end space-x-2 sm:justify-center"
      {...props}
    >
      <PrevButton />

      <PlayButton songs={playlist} index={currentIndex} />

      <NextButton />
    </div>
  )
}
