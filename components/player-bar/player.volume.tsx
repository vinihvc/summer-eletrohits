'use client'

import { useStore } from '@/store'

import { VolumeButton } from '@/components/actions/volume'

import { Slider } from '../ui/slider'

export const PlayerVolume = ({ ...props }) => {
  const { volume, changeVolume } = useStore()

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
