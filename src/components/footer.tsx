import { Box, chakra, Flex, Link } from '@chakra-ui/react'

export const Footer = chakra(({ ...props }) => {
  return (
    <Box as="footer" {...props}>
      <Flex justify="center" align="center" h={100} gap={1}>
        {'Created by '}
        <Link href="http://viniciusvicentini.com" color="blue.400" isExternal>
          Vinicius Vicentini
        </Link>
      </Flex>
    </Box>
  )
})
