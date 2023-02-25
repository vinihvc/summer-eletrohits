import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/utils/cn'

type FooterProps = React.HTMLAttributes<HTMLDivElement>

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props

  return (
    <footer className={cn(className)} {...rest}>
      <div className="flex h-[100px] items-center justify-center gap-1">
        {'Created by '}
        <Link
          className="text-blue-500"
          href="http://viniciusvicentini.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vinicius Vicentini
        </Link>
      </div>
    </footer>
  )
}
