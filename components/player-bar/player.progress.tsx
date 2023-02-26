'use client'

import { useStore } from '@/store'

import { Slider } from '../ui/slider'

export const PlayerProgress = () => {
  const { progress, handleProgress } = useStore()

  const handleOnProgress = (value: number[]) => {
    const [progress] = value

    handleProgress(progress)
  }

  return (
    <div className="absolute inset-x-0 -top-1 flex">
      <Slider value={[progress]} onValueChange={handleOnProgress} />
    </div>
  )
}
