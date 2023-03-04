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
      className={cn(
        'text-sm font-semibold',
        'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200',
        'aria-[current=page]:text-neutral-900 dark:aria-[current=page]:text-neutral-200',
        className,
      )}
      aria-current={pathname === href ? 'page' : undefined}
      {...rest}
    >
      {children}
    </Link>
  )
}
