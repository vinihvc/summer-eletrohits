import Link from 'next/link'

import { chakra, useColorModeValue } from '@chakra-ui/system'

import { FiHeart, FiHome } from 'react-icons/fi'

import { Button } from '@chakra-ui/button'
import { Box, Flex, Link as ChakraLink } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'

const Sidebar = ({ ...props }) => {
  return (
    <Flex
      as="nav"
      bg={useColorModeValue('playerLight', 'playerDark')}
      width="250px"
      flexDirection="column"
      zIndex="docked"
      pt={5}
      {...props}
    >
      <Flex justify="center" mb={5}>
        <Link href="/" passHref>
          <ChakraLink fontSize="xl" fontWeight="medium">
            Eletrohits
          </ChakraLink>
        </Link>
      </Flex>

      <Box
        px={5}
        sx={{
          '&>*': { mb: 3 }
        }}
      >
        <Link href="/" passHref>
          <Button as={ChakraLink} justifyContent="left" isFullWidth>
            <Icon as={FiHome} />

            <Box ml={4}>Home</Box>
          </Button>
        </Link>

        <Link href="/favorites" passHref>
          <Button as={ChakraLink} justifyContent="left" isFullWidth>
            <Icon as={FiHeart} />

            <Box ml={4}>Favorites</Box>
          </Button>
        </Link>
      </Box>
    </Flex>
  )
}

export default chakra(Sidebar)
