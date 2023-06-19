'use client'

import * as React from 'react'
import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from './ui/dropdown'

export const ModeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="ghost" size="sm">
          <Sun
            className="rotate-0 scale-100 transition-all hover:text-neutral-900 dark:-rotate-90 dark:scale-0 dark:hover:text-neutral-100"
            size={20}
          />
          <Moon
            className="absolute rotate-90 scale-0 transition-all hover:text-neutral-900 dark:rotate-0 dark:scale-100 dark:hover:text-neutral-100"
            size={20}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownItem>
        <DropdownItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownItem>
        <DropdownItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
