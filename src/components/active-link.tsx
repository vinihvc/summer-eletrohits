import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

type ActiveLinkProps = LinkProps & ChakraLinkProps

export const ActiveLink = (props: ActiveLinkProps) => {
  const { href, children, ...rest } = props

  const { pathname } = useRouter()

  return (
    <ChakraLink
      as={Link}
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
    </ChakraLink>
  )
}
