import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Party',
}

const PartyLayout = ({ children }: React.PropsWithChildren) => {
  return <>{children}</>
}

export default PartyLayout
