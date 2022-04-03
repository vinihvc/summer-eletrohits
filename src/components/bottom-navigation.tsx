import NextLink from 'next/link'

import { Flex } from '@chakra-ui/react'

import { FiHeart } from 'react-icons/fi'
import { RiPlayList2Fill } from 'react-icons/ri'
import { BsHouseDoor } from 'react-icons/bs'

export const BottomNavigation = () => {
  const paths = [
    {
      label: 'Home',
      href: '/',
      icon: <BsHouseDoor />
    },
    {
      label: 'Favorites',
      href: '/favorites',
      icon: <FiHeart />
    },
    {
      label: 'Queue',
      href: '/queue',
      icon: <RiPlayList2Fill />
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
      {paths.map(({ label, href, icon }) => (
        <NextLink key={href} href={href} passHref>
          <Flex
            as="a"
            justify="center"
            align="center"
            flex="1"
            h="full"
            aria-label={`Go to ${label}`}
          >
            {icon}
          </Flex>
        </NextLink>
      ))}
    </Flex>
  )
}
