'use client'
import { cn } from '@/lib/cn'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface LinkProps
  extends NextLinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
}

export const NavLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { href, isExternal, className, children, ...rest } = props

    const pathname = usePathname()

    return (
      <NextLink
        href={href}
        className={cn(className)}
        aria-current={href === pathname || undefined}
        ref={ref}
        {...(isExternal && {
          href,
          target: '_blank',
          rel: 'noopener noreferrer nofollow',
          prefetch: false,
        })}
        {...rest}
      >
        {children}
      </NextLink>
    )
  },
)

NavLink.displayName = 'Link'
