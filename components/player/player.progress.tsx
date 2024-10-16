'use client'

import { Slider } from '@/components/ui/slider'
import { usePlayerActions, usePlayerState } from '@/store/app.store'

export const PlayerProgress = () => {
  const { progress } = usePlayerState()
  const { handleProgress } = usePlayerActions()

  const handleOnProgress = (value: number[]) => {
    const [progress] = value

    handleProgress(progress)
  }

  return (
    <div className="absolute inset-x-0 -top-2.5 flex">
      <Slider
        className="py-2"
        value={[progress]}
        onValueChange={handleOnProgress}
      />
    </div>
  )
}
