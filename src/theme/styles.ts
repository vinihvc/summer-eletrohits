import { mode } from '@chakra-ui/theme-tools'

import { SystemStyleObject } from '@chakra-ui/react'

export const globalStyles = {
  global: (props: SystemStyleObject) => ({
    'html, body': {
      color: mode('gray.600', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.900')(props),
      overflow: 'hidden'
    }
  })
}
