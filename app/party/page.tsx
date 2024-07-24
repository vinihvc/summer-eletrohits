'use client'

import Image from 'next/image'
import React from 'react'

const Party = () => {
  const [color, setColor] = React.useState('#000000')

  const randomizeBackgroundStyle = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    setColor(`#${randomColor}`)
  }

  // change color each 1 second
  React.useEffect(() => {
    const interval = setInterval(() => {
      randomizeBackgroundStyle()
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="absolute inset-0 flex flex-1 items-center justify-center"
      style={{ backgroundColor: color }}
      onClick={randomizeBackgroundStyle}
    >
      <div className="relative aspect-video w-[250px]">
        <Image src="/img/slowpoke.gif" alt="this slowpoke moves" fill />
      </div>
    </div>
  )
}

export default Party
