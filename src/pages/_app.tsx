import { AppProps } from 'next/app'

import Head from 'next/head'

import { PlayerProvider } from 'contexts/PlayerContext'

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

      <PlayerProvider>
        <BaseTemplate cookies={pageProps.cookies}>
          <Component {...pageProps} />
        </BaseTemplate>
      </PlayerProvider>
    </>
  )
}

export { getServerSideProps } from 'templates/Base'

export default App
