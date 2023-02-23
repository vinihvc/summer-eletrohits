'use client'

import { Josefin_Sans as FontSans } from '@next/font/google'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Container } from '@chakra-ui/react'

import { theme } from '@/theme'

import { BottomNavigation } from '@/components/bottom-navigation'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import PlayerBar from '@/components/player-bar'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body style={fontSans.style}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Header />

            <Container as="main" maxW="container.xl" minH="100vh" pt={10}>
              {children}
            </Container>

            {/* Margin bottom for <BottomNavigation */}
            <Footer mb={{ base: '50px', md: 0 }} />

            <BottomNavigation />

            <PlayerBar />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
