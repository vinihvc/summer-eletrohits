import { AlbumInfo } from '@/components/album-info'

import { USER_ALBUM } from './data'

type LibraryLayoutProps = {
  children: React.ReactNode
}

const LibraryLayout = ({ children }: LibraryLayoutProps) => {
  return (
    <>
      <AlbumInfo album={USER_ALBUM} />

      {children}
    </>
  )
}

export default LibraryLayout
