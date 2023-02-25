import { AlbumInfo } from '@/components/album-info'
import { BackAlbums } from '@/components/back-albums'
import { CustomBg } from '@/components/layout/custom-bg'
import { SongList } from '@/components/song/song.list'

type ClientAlbumPageProps = {
  album: AlbumType
}

export const ClientAlbumPage = ({ album }: ClientAlbumPageProps) => {
  return (
    <>
      <CustomBg image={album.thumb} />

      <div className="flex justify-center md:justify-start">
        <BackAlbums />
      </div>

      <AlbumInfo album={album} />

      {album.songs && <SongList className="mt-10" songs={album.songs} />}
    </>
  )
}
