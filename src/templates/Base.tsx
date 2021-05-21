import { GetServerSidePropsContext } from 'next'

import {
  ChakraProvider,
  CSSReset,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'

import { Container } from '@chakra-ui/react'

import Player from 'components/Player'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import theme from 'styles/theme'

export type BaseTemplateProps = {
  cookies: string
  children: React.ReactNode
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

const BaseTemplate = ({ cookies, children }: BaseTemplateProps) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <CSSReset />

      <Navbar />

      <Container as="main" maxW="container.xl">
        {children}
      </Container>

      <Footer />

      <Player />
    </ChakraProvider>
  )
}

export default BaseTemplate
