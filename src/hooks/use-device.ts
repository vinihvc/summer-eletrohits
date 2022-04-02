import { useMediaQuery } from '@chakra-ui/react'

export const useDevice = () => {
  const [isMobile] = useMediaQuery(['(max-width: 48em)'])

  return { isMobile }
}
