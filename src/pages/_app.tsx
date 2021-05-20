import { AppProps } from 'next/app'

import Head from 'next/head'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'

import { globalStyles } from 'styles/global'

import theme from 'styles/theme'

import { PlayerProvider } from 'contexts/PlayerContext'

import Player from 'components/Player'

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
      <ChakraProvider theme={theme}>
        <CSSReset />
        <PlayerProvider>
          <Component {...pageProps} />

          <Player />
        </PlayerProvider>

        {globalStyles}
      </ChakraProvider>
    </>
  )
}

export default App
