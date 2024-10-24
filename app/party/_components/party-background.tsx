'use client'

import { cn } from '@/lib/utils'
import React from 'react'

const tailwindColors = [
  '#FF6B6B', // Coral Red
  '#4ECDC4', // Medium Turquoise
  '#45B7D1', // Bright Cerulean
  '#FFA07A', // Light Salmon
  '#98D8C8', // Mint
  '#F7B267', // Mellow Apricot
  '#A06CD5', // Amethyst
  '#FF85A2', // Flamingo Pink
  '#7FD1B9', // Ocean Green
  '#FFC75F', // Marigold
  '#FF1493', // Deep Pink
  '#00CED1', // Dark Turquoise
  '#FF4500', // Orange Red
  '#1E90FF', // Dodger Blue
  '#32CD32', // Lime Green
  '#FF69B4', // Hot Pink
  '#FFD700', // Gold
  '#8A2BE2', // Blue Violet
  '#00FA9A', // Medium Spring Green
  '#FF6347', // Tomato
  '#FF8C00', // Dark Orange
  '#9932CC', // Dark Orchid
  '#20B2AA', // Light Sea Green
  '#FF1493', // Deep Pink
  '#00BFFF', // Deep Sky Blue
  '#7CFC00', // Lawn Green
  '#FF4500', // Orange Red
  '#BA55D3', // Medium Orchid
  '#3CB371', // Medium Sea Green
  '#FF6347', // Tomato
  '#4169E1', // Royal Blue
  '#8A2BE2', // Blue Violet
  '#228B22', // Forest Green
  '#FF69B4', // Hot Pink
  '#1E90FF', // Dodger Blue
  '#ADFF2F', // Green Yellow
  '#FF7F50', // Coral
  '#9370DB', // Medium Purple
  '#32CD32', // Lime Green
  '#FF00FF', // Magenta
]

interface PartyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PartyBackground = (props: PartyBackgroundProps) => {
  const { children, className, ...rest } = props

  const [gradientColors, setGradientColors] = React.useState([
    '#FF6B6B',
    '#4ECDC4',
  ])

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const newColors = tailwindColors
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
      setGradientColors(newColors)
    }, 200)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      className={cn('transition-all duration-500', className)}
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${gradientColors[0]}, ${gradientColors[1]})`,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
