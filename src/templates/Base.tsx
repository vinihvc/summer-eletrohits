import { Container, Flex } from '@chakra-ui/react'

import Link from 'next/link'

import Logo from 'components/Logo'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <Container maxW="container.lg">
    <Flex justify="center" marginTop="20px" marginBottom="40px">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </Flex>

    {children}
  </Container>
)

export default BaseTemplate
