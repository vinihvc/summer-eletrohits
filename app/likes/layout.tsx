import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Likes',
}

const LikesLayout = ({ children }: React.PropsWithChildren) => {
  return <>{children}</>
}

export default LikesLayout
