import { Container } from '@chakra-ui/react'

import { Footer } from 'components/footer'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Container as="main" maxW="container.xl" minH="100vh" pt={10}>
        {children}
      </Container>

      <Footer mb={{ base: '50px', md: 0 }} />
    </>
  )
}
