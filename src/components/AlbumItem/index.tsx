import { usePlayer } from 'contexts/PlayerContext'

import Thumbnail from 'components/Thumbnail'

export type AlbumItem = {
  album: AlbumType
}

const AlbumItem = ({ album }: AlbumItem) => {
  const { playPlayList } = usePlayer()

  return <Thumbnail album={album} onClick={() => playPlayList(album.songs!)} />
}

export default AlbumItem
