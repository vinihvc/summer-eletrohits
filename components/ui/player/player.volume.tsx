'use client'

import { VolumeButton } from '@/components/ui/actions/volume'
import { Slider } from '@/components/ui/slider'
import { usePlayerActions, usePlayerState } from '@/store/player.store'

export const PlayerVolume = ({ ...props }) => {
  const { volume } = usePlayerState()
  const { changeVolume } = usePlayerActions()

  const handleOnProgress = (value: number[]) => {
    const [progress] = value

    changeVolume(progress)
  }

  return (
    <div className="flex w-full space-x-4" {...props}>
      <VolumeButton />

      <Slider
        className="w-[100px]"
        value={[volume]}
        onValueChange={handleOnProgress}
      />
    </div>
  )
}
