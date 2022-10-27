import Link from 'next/link'

import { Button, Flex, Stack, Heading } from '@chakra-ui/react'

const NotFoundPage = () => {
  return (
    <Flex align="center" justify="center" h="calc(100vh - 300px)">
      <Stack textAlign="center" spacing={8}>
        <Stack spacing={0}>
          <Heading fontSize="3xl" fontWeight="bold">
            Page Not Found
          </Heading>
        </Stack>

        <Link href="/" passHref>
          <Button as="a">Back to Home</Button>
        </Link>
      </Stack>
    </Flex>
  )
}

export default NotFoundPage
