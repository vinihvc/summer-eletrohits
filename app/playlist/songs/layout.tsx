import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Songs',
}

const LibraryLayout = ({ children }: React.PropsWithChildren) => {
  return <>{children}</>
}

export default LibraryLayout
