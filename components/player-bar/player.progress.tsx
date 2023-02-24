'use client'

import { useStore } from '@/store'

import { Slider } from '@/components/slider'

export const PlayerProgress = () => {
  const { progress, handleProgress } = useStore()

  return (
    <div className="flex absolute -top-1 inset-x-0">
      <Slider value={progress} onChange={handleProgress} />
    </div>
  )
}
