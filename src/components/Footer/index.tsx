import { chakra } from '@chakra-ui/system'

import { Box, Flex, Link, Text } from '@chakra-ui/layout'

const Footer = () => {
  return (
    <Box as="footer">
      <Flex h="80px" justify="center" align="center">
        <Text>
          Create with
          <Box as="span" color="red.500">
            {` ♥ `}
          </Box>
          {`and `}
          <Link href="https://chakra-ui.com/" color="blue.500" isExternal>
            Chakra
          </Link>
          {` by `}
          <Link
            href="https://github.com/viniciushvc"
            color="blue.500"
            isExternal
          >
            Vinicius Vicentini
          </Link>
        </Text>
      </Flex>
    </Box>
  )
}

export default chakra(Footer)
