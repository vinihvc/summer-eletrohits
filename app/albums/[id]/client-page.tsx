import { AlbumInfo } from '@/components/album/album.info'
import { Songs } from '@/components/songs'

type ClientAlbumPageProps = {
  album: AlbumType
}

export const ClientAlbumPage = ({ album }: ClientAlbumPageProps) => {
  return (
    <>
      <AlbumInfo album={{ ...album, thumb: `/img/albums/${album.id}.webp` }} />

      <section className="pt-4">
        {album.songs && <Songs songs={album.songs} />}
      </section>
    </>
  )
}
