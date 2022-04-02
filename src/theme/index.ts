import { extendTheme, ThemeConfig } from '@chakra-ui/react'

import { foundations, semanticTokens } from './foundations'
import { globalStyles } from './styles'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export const theme = extendTheme({
  config,
  styles: globalStyles,
  semanticTokens,
  ...foundations
})
