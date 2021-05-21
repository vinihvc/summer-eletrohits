import {
  Slider as SliderBase,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/slider'

export type SliderProps = {
  value?: number
  onChange?: (value: number) => void
}

const Slider = ({ value, onChange }: SliderProps) => {
  return (
    <SliderBase
      min={0}
      max={0.999999}
      value={value}
      onChange={onChange}
      step={0.001}
      focusThumbOnChange={false}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </SliderBase>
  )
}

export default Slider
