'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/cn'

interface ActiveLinkProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {}

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
