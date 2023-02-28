'use client'

import * as React from 'react'

import * as RLabel from '@radix-ui/react-label'

import { cn } from '@/utils/cn'

export const Label = React.forwardRef<
  React.ElementRef<typeof RLabel.Root>,
  React.ComponentPropsWithoutRef<typeof RLabel.Root>
>(({ className, ...props }, ref) => (
  <RLabel.Root
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    {...props}
  />
))
Label.displayName = RLabel.Root.displayName
