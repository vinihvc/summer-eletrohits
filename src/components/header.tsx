import NextLink from 'next/link'

import { Container, Flex, Link, Stack } from '@chakra-ui/react'

import { FiHeart } from 'react-icons/fi'

import { Logo } from './logo'

export const Header = () => {
  return (
    <Flex
      as="header"
      d={{ base: 'none', md: 'flex' }}
      bg="player"
      boxShadow="dark-lg"
      pos="sticky"
      top={0}
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
      zIndex="docked"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" h={14}>
          <NextLink href="/" passHref>
            <Link>
              <Logo />
            </Link>
          </NextLink>

          <Stack as="nav">
            <NextLink href="/favorites" passHref>
              <Link d="flex" alignItems="center" gap={2}>
                Favorites
                <FiHeart />
              </Link>
            </NextLink>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  )
}
