import { Container } from '@chakra-ui/react'

import { useDevice } from 'hooks/use-device'

import { BottomNavigation } from 'components/bottom-navigation'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { isMobile } = useDevice()

  return (
    <>
      {!isMobile && <Header />}

      <Container as="main" maxW="container.xl" pt={10} pb={40}>
        {children}
      </Container>

      <Footer />

      {isMobile && <BottomNavigation />}
    </>
  )
}
