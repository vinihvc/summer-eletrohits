import { FiMoon, FiSun } from 'react-icons/fi'

import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'

import { IconButton } from '@chakra-ui/button'

const ColorMode = () => {
  const { toggleColorMode } = useColorMode()

  const themeIcon = useColorModeValue(<FiMoon />, <FiSun />)
  const themeLabel = useColorModeValue('dark', 'light')

  return (
    <IconButton
      icon={themeIcon}
      onClick={toggleColorMode}
      aria-label={`Change to ${themeLabel} mode`}
    />
  )
}

export default ColorMode
