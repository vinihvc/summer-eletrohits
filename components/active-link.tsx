'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/cn'

type ActiveLinkProps = {
  children: React.ReactNode
  className?: string
} & LinkProps

export const ActiveLink = (props: ActiveLinkProps) => {
  const { href, className, children, ...rest } = props

  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(className)}
      aria-current={pathname === href ? 'page' : undefined}
      {...rest}
    >
      {children}
    </Link>
  )
}
