import { cn } from '@/lib/utils'
import Image, { type ImageProps } from 'next/image'

interface BlurBackgroundProps extends Omit<ImageProps, 'alt'> {}

export const BlurBackground = (props: BlurBackgroundProps) => {
  const { src, className, ...rest } = props

  const hasImage = !!src

  return (
    <div
      className={cn(
        'absolute inset-0 h-dvh opacity-60 dark:opacity-20 -z-[1] overflow-clip',
        className,
      )}
      {...rest}
    >
      {hasImage && (
        <Image
          className="object-cover blur-xl scale-125"
          src={src}
          sizes="(max-width: 768px) 100vw, 33vw"
          aria-hidden
          fill
          {...rest}
          alt=""
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
