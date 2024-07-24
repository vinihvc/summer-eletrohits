import type React from 'react'

import { cn } from '@/lib/cn'
import { Music } from './icons/music'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = (props: LogoProps) => {
  const { className, ...rest } = props

  return (
    <div
      className={cn(
        'flex items-center gap-2 text-lg font-semibold tracking-wide select-none',
        className,
      )}
      {...rest}
    >
      <Music className="size-6 text-primary" />

      <span>Eletrohits</span>
    </div>
  )
}
