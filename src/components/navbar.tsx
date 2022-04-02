import NextLink from 'next/link'

import { FiChevronDown, FiGithub, FiTwitter } from 'react-icons/fi'

import {
  Container,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button
} from '@chakra-ui/react'

import { ColorMode } from 'components/color-mode'

export const Navbar = ({ ...props }) => {
  return (
    <Flex
      as="header"
      bg="navbar"
      minH="60px"
      position="sticky"
      top="0"
      align="center"
      zIndex="sticky"
      {...props}
    >
      <Container as="nav" maxW="full" aria-label="Main navigation">
        <Flex flex={{ md: '1 0 auto' }} justify="flex-end">
          <ColorMode mr={3} />

          <Menu>
            <MenuButton as={Button} rightIcon={<FiChevronDown />}>
              Author
            </MenuButton>

            <MenuList>
              <NextLink href="https://viniciusvicentini.com/github" passHref>
                <MenuItem
                  as={Link}
                  icon={<FiGithub />}
                  isExternal
                  _hover={{
                    textDecor: 'none'
                  }}
                >
                  Github
                </MenuItem>
              </NextLink>

              <NextLink href="https://viniciusvicentini.com/twitter" passHref>
                <MenuItem
                  as={Link}
                  icon={<FiTwitter />}
                  isExternal
                  _hover={{
                    textDecor: 'none'
                  }}
                >
                  Twitter
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Flex>
  )
}
