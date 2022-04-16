import { useEffect } from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { ChakraProvider, Container } from '@chakra-ui/react'

import { AnimatePresence, motion, MotionConfig } from 'framer-motion'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { useStore } from 'store'

import { BottomNavigation } from 'components/bottom-navigation'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

import { theme } from 'theme'

const Player = dynamic(() => import('components/player'))

const App = ({ Component, pageProps, router }: AppProps) => {
  const { initiateLikes } = useStore()

  useEffect(() => {
    initiateLikes()
  }, [initiateLikes])

  return (
    <>
      <Head>
        <title>Summer Eletrohits</title>
        <link rel="shortcut icon" href="/img/logo.jpg" />
        <link rel="apple-touch-icon" href="/img/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1A202C" />
        <meta name="description" content="Summer Eletrohits" />
      </Head>

      <DefaultSeo {...SEO} />

      <ChakraProvider theme={theme}>
        <MotionConfig reducedMotion="user">
          <Header />

          <AnimatePresence>
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Container as="main" maxW="container.xl" minH="100vh" pt={10}>
                <Component {...pageProps} />
              </Container>

              {/* Margin bottom for <BottomNavigation */}
              <Footer mb={{ base: '50px', md: 0 }} />
            </motion.div>
          </AnimatePresence>

          <BottomNavigation />

          <Player />
        </MotionConfig>
      </ChakraProvider>
    </>
  )
}

export default App
