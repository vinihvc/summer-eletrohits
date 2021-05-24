import { chakra } from '@chakra-ui/system'

import { Container, Flex } from '@chakra-ui/layout'

import { useColorModeValue } from '@chakra-ui/color-mode'

import useDevice from 'hooks/useDevice'

import Video from './components/video'
import Actions from './components/actions'
import Progress from './components/progress'
import Queue from './components/queue'
import Volume from './components/volume'

const Player = ({ ...props }) => {
  const { isMobile } = useDevice()

  return (
    <Flex
      bg={useColorModeValue('playerLight', 'playerDark')}
      backdropFilter="blur(10px)"
      align="center"
      w="100%"
      h={{ base: '50px', md: '70px' }}
      pos="fixed"
      bottom={{ base: '50px', md: '0px' }}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      borderBottomStyle="solid"
      {...props}
    >
      <Container maxW="container.lg">
        <Flex justify="center" align="center">
          <Video display={{ base: 'none', md: 'block' }} />

          <Actions />

          {!isMobile && <Progress />}

          {!isMobile && <Queue />}

          {!isMobile && <Volume />}
        </Flex>
      </Container>
    </Flex>
  )
}

export default chakra(Player)
