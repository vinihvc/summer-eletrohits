'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'cva'

export const Dialog = DialogPrimitive.Root

export const DialogTrigger = DialogPrimitive.Trigger

export const DialogPortal = DialogPrimitive.Portal

export const DialogClose = DialogPrimitive.Close

export const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const dialogVariants = cva({
  base: [
    'fixed z-40 grid w-full max-h-dvh',
    'gap-4 border bg-background p-6 shadow-lg',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=open]:duration-500 data-[state=closed]:duration-300',
  ],
  variants: {
    side: {
      bottom: [
        'inset-x-0 bottom-0',
        'border-t',
        'data-[state=open]:slide-in-from-bottom',
        'data-[state=closed]:slide-out-to-bottom',
      ],
    },
  },
  defaultVariants: {
    side: 'bottom',
  },
})

interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogVariants> {}

export const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>((props, ref) => {
  const { side, className, children, ...rest } = props

  return (
    <DialogPortal>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(dialogVariants({ side }), className)}
        {...rest}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})

DialogContent.displayName = DialogPrimitive.Content.displayName

export const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
))

DialogTitle.displayName = DialogPrimitive.Title.displayName

export const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))

DialogDescription.displayName = DialogPrimitive.Description.displayName
