'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import React from 'react'

import { cn } from '@/lib/cn'

export const Slider = React.forwardRef<
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
    <SliderPrimitive.Track className="relative h-1 w-full grow cursor-pointer overflow-hidden rounded-full bg-primary/10">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>

    <SliderPrimitive.Thumb className="block h-3 w-3 rounded-full bg-primary transition-colors outline-none focus:ring-2 ring-primary ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName
