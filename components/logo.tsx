import React from 'react'

import { Music } from 'lucide-react'

import { cn } from '@/utils/cn'

type LogoProps = React.HTMLAttributes<HTMLDivElement>

export const Logo = (props: LogoProps) => {
  const { className, ...rest } = props

  return (
    <div
      className={cn(
        'flex select-none items-center space-x-2 text-lg font-bold tracking-wide',
        className,
      )}
      {...rest}
    >
      <Music className="h-6 w-6 text-blue-500" />

      <span className="text-sm">Eletrohits</span>
    </div>
  )
}
