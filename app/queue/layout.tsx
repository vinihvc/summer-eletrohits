import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Queue',
}

type QueueLayoutProps = {
  children: React.ReactNode
}

const QueueLayout = ({ children }: QueueLayoutProps) => {
  return <>{children}</>
}

export default QueueLayout
