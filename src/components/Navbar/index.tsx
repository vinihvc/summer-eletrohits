import Link from 'next/link'

import { useColorModeValue } from '@chakra-ui/color-mode'

import { Container, Flex, Link as ChakraLink } from '@chakra-ui/layout'

import Searchbar from 'components/Searchbar'
import ColorMode from 'components/ColorMode'

import useDevice from 'hooks/useDevice'

const Navbar = () => {
  const { isMobile } = useDevice()

  return (
    <Flex
      as="header"
      bg={useColorModeValue('gray.50', 'gray.900')}
      minH="70px"
      align="center"
    >
      <Container as="nav" maxW="container.xl" aria-label="Main navigation">
        <Flex justify="space-between" align="center">
          <Flex flex="1 0 auto">
            <Link href="/" passHref>
              <ChakraLink
                fontSize="xl"
                fontWeight="medium"
                role="heading"
                aria-label="Summer Eletrohits"
              >
                Summer Eletrohits
              </ChakraLink>
            </Link>
          </Flex>

          {!isMobile && (
            <Flex flex="1 0 auto">
              <Searchbar />
            </Flex>
          )}

          <Flex flex="1 0 auto" justify="flex-end">
            <ColorMode />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Navbar
