import { AppProps } from 'next/app'

import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'

import { AnimatePresence, motion } from 'framer-motion'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { PlayerProvider } from 'contexts/player'

import { DefaultLayout } from 'layouts/default'

import { theme } from 'theme'
import { Player } from 'components/player'

const App = ({ Component, pageProps, router }: AppProps) => {
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

      <PlayerProvider>
        <ChakraProvider theme={theme}>
          <AnimatePresence>
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </motion.div>
          </AnimatePresence>

          <Player />
        </ChakraProvider>
      </PlayerProvider>
    </>
  )
}

export default App
