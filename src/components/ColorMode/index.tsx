import { useColorMode } from '@chakra-ui/color-mode'

import { Button } from '@chakra-ui/button'
import { FiMoon, FiSun } from 'react-icons/fi'
import VisuallyHidden from '@chakra-ui/visually-hidden'

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      <VisuallyHidden>{`Change to ${colorMode} mode`}</VisuallyHidden>
      {colorMode === 'light' ? <FiMoon /> : <FiSun />}
    </Button>
  )
}

export default ColorMode
