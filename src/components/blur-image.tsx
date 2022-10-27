import { useState } from 'react'

import Image from 'next/image'

import { AspectRatio, chakra } from '@chakra-ui/react'

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
      transitionTimingFunction="cubic-bezier(.2, 0, .2, 1)"
      filter={isLoading ? 'blur(10px)' : 'blur(0px)'}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        onLoadingComplete={() => setLoading(false)}
      />
    </AspectRatio>
  )
})
