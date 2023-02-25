import Image from 'next/image'

import { cn } from '@/utils/cn'

type CustomBgProps = {
  image?: string
} & React.HTMLAttributes<HTMLDivElement>

export const CustomBg = (props: CustomBgProps) => {
  const { image, className } = props

  return (
    <div className="absolute inset-0 z-[-1] h-full min-h-screen">
      {!image && (
        <div
          className={cn(
            'fixed top-0 h-screen w-full bg-gradient-to-b blur-3xl',
            className,
          )}
        />
      )}

      {image && (
        <div className="fixed h-full w-full blur-3xl">
          <Image src={image} alt="" fill />
        </div>
      )}

      <div className="fixed top-0 h-full w-full bg-gradient-to-b from-black/60 to-black/80 mix-blend-multiply" />
    </div>
  )
}
