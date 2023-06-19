import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

export const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center rounded-full',
    'transition-colors duration-200',
    'text-sm font-medium',
    ' data-[state=open]:bg-neutral-100',
    'dark:data-[state=open]:bg-neutral-900',
    'focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2',
    'dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900',
    'disabled:pointer-events-none disabled:opacity-50',
  ),

  {
    variants: {
      variant: {
        solid:
          'bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900 hover:brightness-125 dark:hover:brightness-75',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-transparent border border-neutral-200 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-neutral-100',
        subtle:
          'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-100',
        ghost:
          'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-neutral-900 dark:text-neutral-100 hover:bg-transparent dark:hover:bg-transparent',
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
  },
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
