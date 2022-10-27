import { useEffect } from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { useStore } from 'store'

import { DefaultLayout } from 'layouts/default'
import { TransitionLayout } from 'layouts/transition'

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

      <DefaultLayout>
        <TransitionLayout router={router}>
          <Component {...pageProps} />
        </TransitionLayout>
      </DefaultLayout>
    </>
  )
}

export default App
