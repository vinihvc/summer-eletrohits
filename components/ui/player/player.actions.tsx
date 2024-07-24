'use client'

import { NextButton } from '@/components/ui/actions/next'
import { PlayButton } from '@/components/ui/actions/play'
import { PrevButton } from '@/components/ui/actions/prev'
import { useMusicState } from '@/store'

export const PlayerActions = ({ ...props }) => {
  const { playlist, currentIndex } = useMusicState()

  return (
    <div
      className="flex flex-1 items-center justify-end gap-2 sm:justify-center"
      {...props}
    >
      <PrevButton />

      <PlayButton songs={playlist} index={currentIndex} />

      <NextButton />
    </div>
  )
}
