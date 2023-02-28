'use client'

import * as React from 'react'

import * as RDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from '@/utils/cn'

export const Dialog = RDialog.Root

export const DialogTrigger = RDialog.Trigger

export const DialogPortal = ({
  className,
  children,
  ...props
}: RDialog.DialogPortalProps) => (
  <RDialog.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {children}
    </div>
  </RDialog.Portal>
)

DialogPortal.displayName = RDialog.Portal.displayName

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof RDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof RDialog.Overlay>
>(({ className, ...props }, ref) => (
  <RDialog.Overlay
    className={cn(
      'data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100',
      className,
    )}
    {...props}
    ref={ref}
  />
))

DialogOverlay.displayName = RDialog.Overlay.displayName

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof RDialog.Content>,
  React.ComponentPropsWithoutRef<typeof RDialog.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <RDialog.Content
      ref={ref}
      className={cn(
        'animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 fixed z-50 grid w-full gap-4 rounded-b-lg bg-white p-6 sm:max-w-lg sm:rounded-lg',
        'dark:bg-neutral-900',
        className,
      )}
      {...props}
    >
      {children}
      <RDialog.Close className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </RDialog.Close>
    </RDialog.Content>
  </DialogPortal>
))

DialogContent.displayName = RDialog.Content.displayName

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)

DialogHeader.displayName = 'DialogHeader'

export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)

DialogFooter.displayName = 'DialogFooter'

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof RDialog.Title>,
  React.ComponentPropsWithoutRef<typeof RDialog.Title>
>(({ className, ...props }, ref) => (
  <RDialog.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold text-neutral-900',
      'dark:text-neutral-50',
      className,
    )}
    {...props}
  />
))

DialogTitle.displayName = RDialog.Title.displayName

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof RDialog.Description>,
  React.ComponentPropsWithoutRef<typeof RDialog.Description>
>(({ className, ...props }, ref) => (
  <RDialog.Description
    ref={ref}
    className={cn(
      'text-sm text-neutral-500',
      'dark:text-neutral-400',
      className,
    )}
    {...props}
  />
))

DialogDescription.displayName = RDialog.Description.displayName
