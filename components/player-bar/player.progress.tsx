'use client'

import { useStore } from '@/store'

import { Slider } from '@/components/slider'

export const PlayerProgress = () => {
  const { progress, handleProgress } = useStore()

  return (
    <div className="absolute inset-x-0 -top-1 flex">
      <Slider value={progress} onChange={handleProgress} />
    </div>
  )
}
