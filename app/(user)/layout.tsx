import { AlbumInfo } from '@/components/album-info'

import { USER_ALBUM } from './data'

type FavoritesProps = {
  children: React.ReactNode
}

const Favorites = ({ children }: FavoritesProps) => {
  return (
    <>
      <AlbumInfo album={USER_ALBUM} />

      {children}
    </>
  )
}

export default Favorites
