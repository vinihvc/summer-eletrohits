import Image, { ImageProps } from 'next/image'

type BlurImageProps = ImageProps

export const BlurImage = ({ src, alt, ...props }: BlurImageProps) => {
  return (
    <div
      className="relative aspect-square w-full h-full duration-300 overflow-hidden rounded-lg bg-gray-800"
      {...props}
    >
      <Image src={src} alt={alt} fill />
    </div>
  )
}
