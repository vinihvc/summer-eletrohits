import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Queue',
}

const QueueLayout = ({ children }: React.PropsWithChildren) => {
  return <>{children}</>
}

export default QueueLayout
