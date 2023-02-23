'use client'

import { Link, LinkProps } from '@chakra-ui/next-js'

import { usePathname } from 'next/navigation'

export const ActiveLink = (props: LinkProps) => {
  const { href, children, ...rest } = props

  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={pathname === href ? 'active' : ''}
      aria-current={pathname === href ? 'page' : undefined}
      {...rest}
      __css={{
        '&:hover': {
          textDecoration: 'none'
        }
      }}
    >
      {children}
    </Link>
  )
}
