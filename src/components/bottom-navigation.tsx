import { useRouter } from 'next/router'

import { FiHeart, FiHome, FiUser } from 'react-icons/fi'

import { Flex, Icon } from '@chakra-ui/react'

export const BottomNavigation = () => {
  const { push, pathname } = useRouter()

  const paths = [
    {
      href: '/',
      icon: FiHome
    },
    {
      href: '/queue',
      icon: FiHeart
    },
    {
      href: '/about',
      icon: FiUser
    }
  ]

  return (
    <Flex
      pos="fixed"
      h="50px"
      bg="navigation"
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
          sx={{
            '&>svg': {
              ...(pathname.includes(path.href) && { color: 'primary' })
            }
          }}
        >
          <Icon as={path.icon} boxSize="20px" />
        </Flex>
      ))}
    </Flex>
  )
}
