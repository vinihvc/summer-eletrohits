import { useState } from 'react'

import {
  chakra,
  Slider as SliderBase,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/react'

type SliderProps = {
  value?: number
  onChange?: (value: number) => void
}

export const Slider = chakra(({ value, onChange, ...props }: SliderProps) => {
  const [hover, setHover] = useState(false)

  return (
    <SliderBase
      min={0}
      max={0.999999}
      value={value}
      onChange={onChange}
      step={0.001}
      focusThumbOnChange={false}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      colorScheme="blue"
      {...props}
    >
      <SliderTrack borderRadius="none" h="2px">
        <SliderFilledTrack />
      </SliderTrack>

      <SliderThumb
        opacity={hover ? '1' : '0'}
        transition="opacity .2s"
        boxSize={3}
        bg="blue.300"
      />
    </SliderBase>
  )
})
