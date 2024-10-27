import { BlurBackground } from '@/components/backgrounds/blur-background'
import type { Metadata } from 'next'
import type React from 'react'
import { USER_ALBUM } from './data'

export const metadata: Metadata = {
  title: 'Likes',
}

const LikesLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <BlurBackground src={USER_ALBUM.thumb} />

      {children}
    </>
  )
}

export default LikesLayout
