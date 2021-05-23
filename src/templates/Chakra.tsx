import { GetServerSidePropsContext } from 'next'

import {
  ChakraProvider,
  CSSReset,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'

import theme from 'styles/theme'

export type ChakraTemplateProps = {
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

const ChakraTemplate = ({ cookies, children }: ChakraTemplateProps) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <CSSReset />

      {children}
    </ChakraProvider>
  )
}

export default ChakraTemplate
