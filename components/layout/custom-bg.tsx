import Image from 'next/image'

import { cn } from '@/utils/cn'

type CustomBgProps = {
  image?: string
} & React.HTMLAttributes<HTMLDivElement>

export const CustomBg = (props: CustomBgProps) => {
  const { image, className } = props

  return (
    <div className="h-full min-h-screen inset-0 absolute z-[-1]">
      {!image && (
        <div
          className={cn(
            'fixed w-full h-screen top-0 filter blur-3xl bg-gradient-to-b',
            className,
          )}
        />
      )}

      {image && (
        <div className="fixed w-full h-full filter blur-3xl">
          <Image src={image} alt="" fill />
        </div>
      )}

      <div className="fixed w-full h-full top-0 bg-gradient-to-b from-black/60 to-black/80 mix-blend-multiply" />
    </div>
  )
}
