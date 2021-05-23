import { useRouter } from 'next/dist/client/router'

import { chakra, useColorModeValue } from '@chakra-ui/system'

import { Flex } from '@chakra-ui/layout'

import { FiHome, FiMusic, FiSearch, FiUser } from 'react-icons/fi'

const BottomNavigation = () => {
  const { push, pathname } = useRouter()

  const color = useColorModeValue('red.500', 'blue.500')

  const paths = [
    {
      href: '/',
      icon: <FiHome size="20" />
    },
    {
      href: '/search',
      icon: <FiSearch size="20" />
    },
    {
      href: '/queue',
      icon: <FiMusic size="20" />
    },
    {
      href: '/about',
      icon: <FiUser size="20" />
    }
  ]

  return (
    <Flex
      pos="fixed"
      h="50px"
      bg={useColorModeValue('gray.50', 'gray.900')}
      bottom="0"
      left="0"
      right="0"
      align="center"
      justify="space-between"
    >
      {paths.map((path) => (
        <Flex
          key={path.href}
          onClick={() => push(path.href)}
          justify="center"
          align="center"
          flex="1 1 0%"
          h="full"
          sx={{ '&>svg': { ...(pathname.includes(path.href) && { color }) } }}
        >
          {path.icon}
        </Flex>
      ))}
    </Flex>
  )
}

export default chakra(BottomNavigation)
