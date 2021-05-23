import { useMediaQuery } from '@chakra-ui/media-query'

const useDevice = () => {
  const [isMobile] = useMediaQuery(['(max-width: 48em)'])

  return { isMobile }
}

export default useDevice
