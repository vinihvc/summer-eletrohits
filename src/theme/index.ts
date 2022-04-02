import { extendTheme, ThemeConfig } from '@chakra-ui/react'

import { foundations, semanticTokens } from './foundations'
import { globalStyles } from './global'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({
  config,
  styles: globalStyles,
  semanticTokens,
  ...foundations
})
