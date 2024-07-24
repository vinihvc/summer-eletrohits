'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import React from 'react'

import { cn } from '@/lib/cn'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ min = 0, max = 1, step = 0.01, className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    min={min}
    max={max}
    step={step}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow cursor-pointer overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
      <SliderPrimitive.Range className="absolute h-full bg-neutral-900  dark:bg-neutral-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-3 w-3 rounded-full bg-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
