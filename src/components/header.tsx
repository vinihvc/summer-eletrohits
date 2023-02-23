import { Container, Flex, Stack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import { FiHeart } from 'react-icons/fi'

import { Logo } from './logo'
import { ActiveLink } from './active-link'

export const Header = () => {
  return (
    <Flex
      as="header"
      display={{ base: 'none', md: 'flex' }}
      bg="gray.900"
      pos="sticky"
      top={0}
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
      zIndex="docked"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" h={14}>
          <Link
            href="/"
            aria-label="Eletrohits, Back to homepage"
            _hover={{ textDecor: 'none' }}
          >
            <Logo />
          </Link>

          <Stack as="nav">
            <ActiveLink
              href="/likes"
              color="gray.400"
              display="flex"
              alignItems="center"
              _hover={{ textDecor: 'none' }}
              gap={2}
              sx={{
                '&.active': {
                  color: 'white',
                  svg: {
                    fill: 'white'
                  }
                }
              }}
            >
              Your Likes
              <FiHeart />
            </ActiveLink>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  )
}
