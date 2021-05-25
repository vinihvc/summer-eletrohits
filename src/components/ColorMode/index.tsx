import { useColorMode } from '@chakra-ui/color-mode'

import { IconButton } from '@chakra-ui/button'
import { FiMoon, FiSun } from 'react-icons/fi'

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
      onClick={toggleColorMode}
      aria-label={`Change to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
    />
  )
}

export default ColorMode
