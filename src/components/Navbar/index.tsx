import NextLink from 'next/link'

import { FiChevronDown, FiGithub, FiTwitter } from 'react-icons/fi'

import {
  chakra,
  Container,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

import ColorMode from 'components/ColorMode'

const Navbar = ({ ...props }) => {
  return (
    <Flex
      as="header"
      bg={useColorModeValue('navbarLight', 'navbarDark')}
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
              <NextLink href="https://github.com/viniciushvc" passHref>
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

              <NextLink href="https://twitter.com/ViniciusHVC" passHref>
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

export default chakra(Navbar)
