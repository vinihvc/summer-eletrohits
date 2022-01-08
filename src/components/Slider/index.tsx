import { useState } from 'react'

import {
  chakra,
  Slider as SliderBase,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/react'

export type SliderProps = {
  value?: number
  onChange?: (value: number) => void
}

const Slider = ({ value, onChange, ...props }: SliderProps) => {
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
      colorScheme="primary"
      {...props}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb opacity={hover ? '1' : '0'} transition="opacity .2s" />
    </SliderBase>
  )
}

export default chakra(Slider)
