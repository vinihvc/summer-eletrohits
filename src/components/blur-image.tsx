import { useState } from 'react'

import NextImage from 'next/image'

import { AspectRatio, chakra, Image } from '@chakra-ui/react'

type BlurImageProps = {
  src: string
  alt: string
}

export const BlurImage = chakra(({ src, alt, ...props }: BlurImageProps) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <AspectRatio
      ratio={1 / 1}
      w="full"
      transitionDuration="0.3s"
      overflow="hidden"
      borderRadius="lg"
      bg="gray.900"
      {...props}
    >
      <Image
        as={NextImage}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        transitionTimingFunction="cubic-bezier(.4, 0, .2, 1)"
        transitionDuration="0.3s"
        {...(isLoading
          ? {
              transform: 'scale(1.1)',
              filter: 'blur(20px)'
            }
          : {
              transform: 'scale(1)',
              filter: 'blur(0px)'
            })}
        onLoadingComplete={() => setLoading(false)}
      />
    </AspectRatio>
  )
})
