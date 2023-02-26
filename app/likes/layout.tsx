import { AlbumInfo } from '@/components/album-info'

import { USER_ALBUM } from './data'

type LikesLayoutProps = {
  children: React.ReactNode
}

const LikesLayout = ({ children }: LikesLayoutProps) => {
  return (
    <>
      <AlbumInfo album={USER_ALBUM} />

      {children}
    </>
  )
}

export default LikesLayout
