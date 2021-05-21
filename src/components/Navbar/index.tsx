import Link from 'next/link'

import { Container, Flex, Link as ChakraLink } from '@chakra-ui/layout'

import Searchbar from 'components/Searchbar'
import ColorMode from 'components/ColorMode'
import { useColorModeValue } from '@chakra-ui/color-mode'

const Navbar = () => {
  return (
    <Flex
      bg={useColorModeValue('gray.50', 'gray.900')}
      minH="70px"
      align="center"
    >
      <Container maxW="container.xl">
        <Flex align="center">
          <Flex flex={{ base: 1 }}>
            <Link href="/" passHref>
              <ChakraLink fontSize="xl" fontWeight="medium" role="heading">
                Summer Eletrohits
              </ChakraLink>
            </Link>
          </Flex>

          <Flex flex={{ base: 1 }}>
            <Searchbar />
          </Flex>

          <Flex flex={{ base: 1 }} justify="flex-end">
            <ColorMode />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Navbar
