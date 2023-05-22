import { AlbumInfo } from '@/components/album'
import { Songs } from '@/components/songs'

type ClientAlbumPageProps = {
  album: AlbumType
}

export const ClientAlbumPage = ({ album }: ClientAlbumPageProps) => {
  return (
    <>
      <AlbumInfo album={album} />

      <section className="pt-4">
        {album.songs && <Songs songs={album.songs} />}
      </section>
    </>
  )
}
