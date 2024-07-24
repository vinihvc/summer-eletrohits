import { Songs } from '@/components/songs'
import { AlbumInfo } from '@/components/ui/album/album.info'
import { getAlbum, getAlbums } from '@/services/queries/album'
import type { Metadata } from 'next'

export const generateStaticParams = async () => {
  const data = await getAlbums()

  return data.map((album) => ({
    id: album.id.toString(),
  }))
}

export const generateMetadata = async (
  props: DataParams,
): Promise<Metadata> => {
  const { params } = props

  const album = await getAlbum({ params })

  return {
    title: album.name,
    description: `Album ${album.name}`,
    openGraph: {
      images: [
        {
          url: `/img/albums/${album.id}.webp`,
          width: 800,
          height: 600,
        },
      ],
    },
  }
}

const AlbumsPage = async ({ params }: DataParams) => {
  const album = await getAlbum({ params })

  return (
    <>
      <AlbumInfo album={{ ...album, thumb: `/img/albums/${album.id}.webp` }} />

      <section className="pt-4 px-4">
        {album.songs && <Songs songs={album.songs} />}
      </section>
    </>
  )
}

export default AlbumsPage
