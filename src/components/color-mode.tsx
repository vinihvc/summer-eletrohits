import { FiMoon, FiSun } from 'react-icons/fi'

import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

export const ColorMode = ({ ...props }) => {
  const { toggleColorMode } = useColorMode()

  const themeIcon = useColorModeValue(<FiMoon />, <FiSun />)
  const themeLabel = useColorModeValue('dark', 'light')

  return (
    <IconButton
      icon={themeIcon}
      onClick={toggleColorMode}
      aria-label={`Change to ${themeLabel} mode`}
      {...props}
    />
  )
}
