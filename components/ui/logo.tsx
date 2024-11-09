import type React from 'react'

import { cn } from '@/lib/utils'
import { Music } from '../icons/music'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = (props: LogoProps) => {
  const { className, ...rest } = props

  return (
    <div
      role="img"
      className={cn(
        'flex items-center gap-2 text-lg font-semibold tracking-wide select-none',
        className,
      )}
      {...rest}
      aria-hidden
    >
      <Music className="size-6 text-primary" />

      <span>Eletrohits</span>
    </div>
  )
}
