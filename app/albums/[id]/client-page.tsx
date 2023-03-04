import { AlbumInfo } from '@/components/album-info'
import { SongList } from '@/components/song/song.list'

type ClientAlbumPageProps = {
  album: AlbumType
}

export const ClientAlbumPage = ({ album }: ClientAlbumPageProps) => {
  return (
    <>
      <AlbumInfo album={album} />

      <section className="pt-4">
        {album.songs && <SongList songs={album.songs} />}
      </section>
    </>
  )
}
