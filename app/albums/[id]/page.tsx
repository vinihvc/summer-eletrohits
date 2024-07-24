import { getAlbum } from '@/services/requests'

import { AlbumInfo } from '@/components/album/album.info'
import { Songs } from '@/components/songs'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

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
    <div className="space-y-4">
      <div className="flex justify-center sm:justify-start">
        <Link href="/" className="hidden sm:inline-flex">
          <Button className="space-x-1">
            <ChevronLeft size={20} />

            <span>Back to albums</span>
          </Button>
        </Link>
      </div>

      <AlbumInfo album={{ ...album, thumb: `/img/albums/${album.id}.webp` }} />

      <section className="pt-4">
        {album.songs && <Songs songs={album.songs} />}
      </section>
    </div>
  )
}

export default AlbumsPage
