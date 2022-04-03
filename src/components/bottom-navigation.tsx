import { useRouter } from 'next/router'

import { FiHeart } from 'react-icons/fi'
import { RiPlayList2Fill } from 'react-icons/ri'
import { BsHouseDoor } from 'react-icons/bs'

import { Flex, Icon } from '@chakra-ui/react'

export const BottomNavigation = () => {
  const { push, pathname } = useRouter()

  const paths = [
    {
      href: '/',
      icon: BsHouseDoor
    },
    {
      href: '/favorites',
      icon: FiHeart
    },
    {
      href: '/queue',
      icon: RiPlayList2Fill
    }
  ]

  return (
    <Flex
      pos="fixed"
      d={{ base: 'flex', md: 'none' }}
      h="50px"
      bg="bg"
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
