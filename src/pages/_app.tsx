import { AppProps } from 'next/app'

import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { PlayerProvider } from 'contexts/player'

import { DefaultLayout } from 'layouts/default'

import { theme } from 'theme'

const App = ({ Component, pageProps }: AppProps) => {
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
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ChakraProvider>
      </PlayerProvider>
    </>
  )
}

export default App
