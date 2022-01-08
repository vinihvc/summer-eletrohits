import Link from 'next/link'

import { FiHeart, FiHome } from 'react-icons/fi'

import {
  chakra,
  useColorModeValue,
  Button,
  Box,
  Flex,
  Link as ChakraLink,
  Icon
} from '@chakra-ui/react'

const Sidebar = ({ ...props }) => {
  return (
    <Flex
      as="nav"
      bg={useColorModeValue('playerLight', 'playerDark')}
      width="250px"
      flexDirection="column"
      zIndex="docked"
      borderRight="1px solid"
      borderColor="gray.700"
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
