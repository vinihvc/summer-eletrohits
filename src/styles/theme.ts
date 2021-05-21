import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.600', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props)
      }
    })
  }
})

export default theme
