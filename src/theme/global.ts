import { SystemStyleObject } from '@chakra-ui/system'

export const globalStyles: SystemStyleObject = {
  ':root': {
    colorScheme: 'dark'
  },
  html: {
    overflowY: 'scroll'
  },
  'html, body': {
    minH: 'full',
    color: 'white',

    '&:after': {
      bg: 'linear(to-b, bg, black',
      right: '0',
      left: '0',
      top: '0',
      bottom: '0',
      pos: 'fixed',
      content: '""',
      zIndex: -2
    }
  }
}
