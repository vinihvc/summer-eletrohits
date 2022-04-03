import { Flex, Icon } from '@chakra-ui/react'

import { GiHeraldicSun } from 'react-icons/gi'

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
      <Icon as={GiHeraldicSun} color="blue.500" boxSize={30} />
      Eletrohits
    </Flex>
  )
}
