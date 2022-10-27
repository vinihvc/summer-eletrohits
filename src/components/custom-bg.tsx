import { Box, ColorProps } from '@chakra-ui/react'
import Image from 'next/image'

type CustomBgProps = {
  image?: string
  gradient?: ColorProps['color'][] | string[]
}

export const CustomBg = ({ image, gradient }: CustomBgProps) => {
  return (
    <Box h="full" minH="100vh" inset="0" pos="absolute" zIndex="-1">
      {gradient && (
        <Box
          transition="0.3s cubic-bezier(.4, 0, .2, 1)"
          pos="fixed"
          w="full"
          h="100vh"
          top="0"
          filter="blur(100px)"
          bgGradient={`linear(to-b, ${gradient})`}
        />
      )}

      {image && (
        <Box
          position="fixed"
          width="full"
          height="full"
          transition="0.3s cubic-bezier(.4, 0, .2, 1)"
          filter="blur(100px)"
        >
          <Image src={image} alt="Background" fill />
        </Box>
      )}

      <Box
        bgGradient="linear(to-b, blackAlpha.700, blackAlpha.900)"
        h="full"
        w="full"
        maxH="200vh"
        position="sticky"
        top="-100vh"
      />
    </Box>
  )
}
