import { extendTheme, ThemeConfig } from '@chakra-ui/react'

import { globalStyles } from './global'
import { foundations, semanticTokens } from './foundations'
import { components } from './components'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({
  config,
  styles: globalStyles,
  semanticTokens,
  ...foundations,
  components
})
