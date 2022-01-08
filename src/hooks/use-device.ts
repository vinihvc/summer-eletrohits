import { useMediaQuery } from '@chakra-ui/react'

const useDevice = () => {
  const [isMobile] = useMediaQuery(['(max-width: 48em)'])

  return { isMobile }
}

export default useDevice
