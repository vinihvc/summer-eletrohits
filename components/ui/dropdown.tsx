'use client'

import * as React from 'react'
import * as RDropdown from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'

import { cn } from '@/utils/cn'

const Dropdown = RDropdown.Root

const DropdownTrigger = RDropdown.Trigger

const DropdownGroup = RDropdown.Group

const DropdownPortal = RDropdown.Portal

const DropdownSub = RDropdown.Sub

const DropdownRadioGroup = RDropdown.RadioGroup

const DropdownSubTrigger = React.forwardRef<
  React.ElementRef<typeof RDropdown.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RDropdown.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <RDropdown.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded px-2 py-1.5 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </RDropdown.SubTrigger>
))
DropdownSubTrigger.displayName = RDropdown.SubTrigger.displayName

const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof RDropdown.SubContent>,
  React.ComponentPropsWithoutRef<typeof RDropdown.SubContent>
>(({ className, ...props }, ref) => (
  <RDropdown.SubContent
    ref={ref}
    className={cn(
      'animate-in slide-in-from-left-1 z-50 min-w-[8rem] overflow-hidden rounded border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400',
      className,
    )}
    {...props}
  />
))
DropdownSubContent.displayName = RDropdown.SubContent.displayName

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof RDropdown.Content>,
  React.ComponentPropsWithoutRef<typeof RDropdown.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <RDropdown.Portal>
    <RDropdown.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400',
        className,
      )}
      {...props}
    />
  </RDropdown.Portal>
))
DropdownContent.displayName = RDropdown.Content.displayName

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof RDropdown.Item>,
  React.ComponentPropsWithoutRef<typeof RDropdown.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RDropdown.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded px-2 py-3 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
DropdownItem.displayName = RDropdown.Item.displayName

const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RDropdown.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RDropdown.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <RDropdown.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RDropdown.ItemIndicator>
        <Check className="h-4 w-4" />
      </RDropdown.ItemIndicator>
    </span>
    {children}
  </RDropdown.CheckboxItem>
))
DropdownCheckboxItem.displayName = RDropdown.CheckboxItem.displayName

const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof RDropdown.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RDropdown.RadioItem>
>(({ className, children, ...props }, ref) => (
  <RDropdown.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RDropdown.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </RDropdown.ItemIndicator>
    </span>
    {children}
  </RDropdown.RadioItem>
))
DropdownRadioItem.displayName = RDropdown.RadioItem.displayName

const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof RDropdown.Label>,
  React.ComponentPropsWithoutRef<typeof RDropdown.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RDropdown.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-300',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
DropdownLabel.displayName = RDropdown.Label.displayName

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof RDropdown.Separator>,
  React.ComponentPropsWithoutRef<typeof RDropdown.Separator>
>(({ className, ...props }, ref) => (
  <RDropdown.Separator
    ref={ref}
    className={cn(
      '-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700',
      className,
    )}
    {...props}
  />
))
DropdownSeparator.displayName = RDropdown.Separator.displayName

const DropdownShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-neutral-500',
        className,
      )}
      {...props}
    />
  )
}
DropdownShortcut.displayName = 'DropdownShortcut'

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownShortcut,
  DropdownGroup,
  DropdownPortal,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownRadioGroup,
}
