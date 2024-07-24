import { getAlbum } from '@/services/requests'

import { Songs } from '@/components/songs'
import { AlbumInfo } from '@/components/ui/album/album.info'
import type { Metadata } from 'next'

export const generateMetadata = async (
  props: DataParams,
): Promise<Metadata> => {
  const { params } = props

  const album = await getAlbum({ params })

  return {
    title: album.name,
    description: `Album ${album.name}`,
    openGraph: {
      url: `/img/albums/${album.id}.webp`,
      title: `${album.name} - Summer Eletrohits`,
      description: `Album ${album.name}`,
      images: [
        {
          url: `/img/albums/${album.id}.webp`,
          alt: `${album.name}`,
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
