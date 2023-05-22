import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Party',
}

type PartyLayoutProps = {
  children: React.ReactNode
}

const PartyLayout = ({ children }: PartyLayoutProps) => {
  return <>{children}</>
}

export default PartyLayout
