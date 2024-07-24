'use client'

import { Slider } from '@/components/ui/slider'
import { usePlayerActions, usePlayerState } from '@/store'

export const PlayerProgress = () => {
  const { progress } = usePlayerState()
  const { handleProgress } = usePlayerActions()

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
