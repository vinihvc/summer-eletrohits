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
  return (
    <SliderBase
      pb="0!important"
      min={0}
      max={0.999999}
      value={value}
      onChange={onChange}
      step={0.001}
      focusThumbOnChange={false}
      {...props}
    >
      <SliderTrack borderRadius="none" h="4px">
        <SliderFilledTrack bg="blue.500" />
      </SliderTrack>

      <SliderThumb boxSize={2} bg="blue.500" />
    </SliderBase>
  )
})
