import { useColorMode } from '@chakra-ui/color-mode'

import { Button } from '@chakra-ui/button'
import { FiMoon, FiSun } from 'react-icons/fi'

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <FiMoon /> : <FiSun />}
    </Button>
  )
}

export default ColorMode
