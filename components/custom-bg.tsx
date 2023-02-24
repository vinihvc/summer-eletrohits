import Image from 'next/image'

import { cn } from '@/utils/cn'

type CustomBgProps = {
  image?: string
} & React.HTMLAttributes<HTMLDivElement>

export const CustomBg = (props: CustomBgProps) => {
  const { image, className } = props

  return (
    <div className="h-full min-h-screen inset-0 absolute -z-[1]">
      {!image && (
        <div
          className={cn(
            'fixed w-full h-screen top-0 transition-all duration-300 filter blur-3xl bg-gradient-to-b',
            className
          )}
        />
      )}

      {image && (
        <div className="fixed w-full h-full transition-all duration-300 filter blur-3xl">
          <Image src={image} alt="Background" fill />
        </div>
      )}

      <div className="sticky w-full -top-[100vh] max-h-[200vh] h-full transition-all duration-300 filter blur-3xl bg-gradient-to-b from-black/70 to-black/90" />
    </div>
  )
}
