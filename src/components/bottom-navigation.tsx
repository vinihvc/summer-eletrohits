import { Flex, VisuallyHidden } from '@chakra-ui/react'

import React from 'react'
import { ActiveLink } from './active-link'
import { BOTTOM_NAVIGATION } from 'constants/menu'

export const BottomNavigation = () => {
  return (
    <Flex
      pos="fixed"
      display={{ base: 'flex', md: 'none' }}
      h="50px"
      bg="bg"
      bottom="0"
      left="0"
      right="0"
      align="center"
      justify="space-between"
    >
      {BOTTOM_NAVIGATION.map(({ label, href, icon }) => (
        <Flex key={href} justify="center" flex={1}>
          <ActiveLink
            href={href}
            color="gray.400"
            sx={{
              '&.active': {
                color: 'white'
              }
            }}
          >
            {React.createElement(icon, { size: 20, 'aria-hidden': true })}

            <VisuallyHidden>{label}</VisuallyHidden>
          </ActiveLink>
        </Flex>
      ))}
    </Flex>
  )
}
