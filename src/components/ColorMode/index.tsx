import { chakra } from '@chakra-ui/system'

import { FiMoon, FiSun } from 'react-icons/fi'

import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'

import { IconButton } from '@chakra-ui/button'

const ColorMode = ({ ...props }) => {
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

export default chakra(ColorMode)
