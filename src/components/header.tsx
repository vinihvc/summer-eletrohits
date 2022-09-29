import NextLink from 'next/link'

import { Container, Flex, Link, Stack } from '@chakra-ui/react'

import { FiHeart } from 'react-icons/fi'

import { Logo } from './logo'

export const Header = () => {
  return (
    <Flex
      as="header"
      display={{ base: 'none', md: 'flex' }}
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
            <Link
              aria-label="Eletrohits, Back to homepage"
              _hover={{ textDecor: 'none' }}
            >
              <Logo />
            </Link>
          </NextLink>

          <Stack as="nav">
            <NextLink href="/likes" passHref>
              <Link
                display="flex"
                alignItems="center"
                _hover={{ textDecor: 'none' }}
                gap={2}
              >
                Your Likes
                <FiHeart />
              </Link>
            </NextLink>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  )
}
