import dynamic from 'next/dynamic'

import { ChakraProvider } from '@chakra-ui/react'

import { MotionConfig } from 'framer-motion'

import { BottomNavigation } from 'components/bottom-navigation'
import { Header } from 'components/header'

import { theme } from 'theme'
import { Footer } from 'components/footer'

const PlayerBar = dynamic(() => import('components/player-bar'))

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <Header />

        {children}

        {/* Margin bottom for <BottomNavigation */}
        <Footer mb={{ base: '50px', md: 0 }} />

        <BottomNavigation />

        <PlayerBar />
      </MotionConfig>
    </ChakraProvider>
  )
}
