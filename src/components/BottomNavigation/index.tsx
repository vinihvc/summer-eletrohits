import { Button } from '@chakra-ui/button'

import { Flex } from '@chakra-ui/layout'

const BottomNavigation = () => {
  return (
    <Flex pos="sticky" align="center" w="100%" h="70px" bottom="0">
      <Button>Home</Button>
      <Button>Search</Button>
      <Button>Queue</Button>
      <Button>Account</Button>
    </Flex>
  )
}

export default BottomNavigation
