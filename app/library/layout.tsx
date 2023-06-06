import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Library',
}

type LibraryLayoutProps = {
  children: React.ReactNode
}

const LibraryLayout = ({ children }: LibraryLayoutProps) => {
  return <>{children}</>
}

export default LibraryLayout
