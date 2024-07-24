'use client'

import Image from 'next/image'
import React from 'react'

const Party = () => {
  const [color, setColor] = React.useState('#000000')

  const randomizeBackgroundStyle = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    setColor(`#${randomColor}`)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    const interval = setInterval(() => {
      randomizeBackgroundStyle()
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="h-dvh flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="relative aspect-video w-[250px]">
        <Image
          src="/img/slowpoke.gif"
          className="object-contain cursor-pointer"
          alt="this slowpoke moves"
          fill
        />
      </div>
    </div>
  )
}

export default Party
