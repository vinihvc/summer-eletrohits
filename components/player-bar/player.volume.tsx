'use client'

import { useStore } from '@/store'

import { Slider } from '@/components/slider'
import { VolumeButton } from '@/components/action-button/volume'

export const PlayerVolume = ({ ...props }) => {
  const { volume, changeVolume } = useStore()

  return (
    <div className="flex w-full space-x-4" {...props}>
      <VolumeButton />

      <Slider className="w-[100px]" value={volume} onChange={changeVolume} />
    </div>
  )
}
