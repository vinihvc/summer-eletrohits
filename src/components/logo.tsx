import { Flex, Icon } from '@chakra-ui/react'
import { GiStripedSun } from 'react-icons/gi'

export const Logo = () => {
  return (
    <Flex
      role="img"
      fontSize="xl"
      align="center"
      fontWeight="medium"
      userSelect="none"
      letterSpacing="wide"
      gap={4}
    >
      <Icon as={GiStripedSun} color="yellow.200" boxSize={30} />
      Eletrohits
    </Flex>
  )
}
