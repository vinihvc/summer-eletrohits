import NextImage, { ImageProps } from 'next/image'

import { cn } from '@/utils/cn'

export const Image = (props: ImageProps) => {
  const { src, alt, className, ...rest } = props

  return (
    <div
      className={cn(
        'relative aspect-square w-full h-full overflow-hidden rounded-lg',
        className
      )}
      {...rest}
    >
      <NextImage src={src} alt={alt} fill />
    </div>
  )
}