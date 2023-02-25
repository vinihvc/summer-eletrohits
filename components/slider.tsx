import { cn } from '@/utils/cn'

type SliderProps = {
  value?: number
  onChange?: (value: number) => void
} & Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>

export const Slider = (props: SliderProps) => {
  const { value, onChange, className, ...rest } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(e.target.value))
  }

  return (
    <input
      type="range"
      className={cn('w-full', className)}
      min={0}
      max={0.999999}
      value={value}
      onChange={handleChange}
      step={0.001}
      {...rest}
    />
  )
}
