import { AppProps } from 'next/app'

import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { PlayerProvider } from 'contexts/PlayerContext'

import ChakraTemplate from 'templates/Chakra'
import BaseTemplate from 'templates/Base'

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
        <ChakraTemplate cookies={pageProps.cookies}>
          <BaseTemplate>
            <Component {...pageProps} />
          </BaseTemplate>
        </ChakraTemplate>
      </PlayerProvider>
    </>
  )
}

export { getServerSideProps } from 'templates/Chakra'

export default App
