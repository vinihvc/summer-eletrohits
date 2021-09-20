import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global: (props: any) => ({
      body: {
        color: mode('gray.600', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        overflow: 'hidden'
      }
    })
  },
  colors: {
    primary: {
      200: '#d49b08'
    },
    secondary: {
      200: '#ff5201'
    },
    playerLight: 'rgba(247, 250, 252, 0.90)',
    playerDark: 'rgba(23, 25, 35, 0.90)',
    navbarLight: 'rgba(247, 250, 252, 0.9030)',
    navbarDark: 'rgba(23, 25, 35, 0.30)'
  }
})

export default theme
