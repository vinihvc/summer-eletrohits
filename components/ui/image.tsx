import NextImage, { ImageProps as NextImageProps } from 'next/image'

import { cn } from '@/utils/cn'

type ImageProps = {
  rounded?: boolean
  shadow?: boolean
} & NextImageProps

export const Image = (props: ImageProps) => {
  const { src, alt, rounded = true, shadow, className, ...rest } = props

  return (
    <div
      className={cn('relative aspect-square h-full w-full', className)}
      {...rest}
    >
      <NextImage
        src={src}
        alt={alt}
        className={cn('relative', rounded && 'rounded-3xl')}
        fill
      />

      {shadow && (
        <NextImage
          src={src}
          alt={alt}
          className={cn(
            'absolute z-[-1] blur-xl dark:opacity-50',
            rounded && 'rounded-3xl',
          )}
          fill
        />
      )}
    </div>
  )
}
