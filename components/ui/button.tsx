import { type VariantProps, cva } from 'cva'
import React from 'react'

import { cn } from '@/lib/cn'

export const buttonVariants = cva({
  base: [
    'inline-flex items-center justify-center rounded-full',
    'transition-all',
    'font-medium',
    'outline-none focus-visible:ring-2 ring-offset-2 ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    variant: {
      solid: [
        'bg-primary text-primary-foreground',
        'hover:bg-primary/90',
        'focus-visible:ring-primary',
      ],
      outline: 'bg-transparent border hover:bg-primary/20',
      ghost: 'bg-transparent hover:bg-primary/70',
      link: 'bg-transparent underline-offset-4 hover:underline text-primary hover:bg-transparent',
    },
    size: {
      sm: 'h-9 px-2',
      md: 'h-10 py-2 px-4',
      lg: 'h-11 px-8',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { type = 'button', variant, size, className, ...rest } = props

    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...rest}
      />
    )
  },
)

Button.displayName = 'Button'
