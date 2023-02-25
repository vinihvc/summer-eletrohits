'use client'

import { useStore } from '@/store'

import { VolumeButton } from '@/components/action-button/volume'
import { Slider } from '@/components/slider'

export const PlayerVolume = ({ ...props }) => {
  const { volume, changeVolume } = useStore()

  return (
    <div className="flex w-full space-x-4" {...props}>
      <VolumeButton />

      <Slider className="w-[100px]" value={volume} onChange={changeVolume} />
    </div>
  )
}
