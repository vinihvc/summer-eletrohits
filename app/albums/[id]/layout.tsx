import { Metadata } from 'next'
import Link from 'next/link'

import { getAlbum } from '@/services/requests'
import { ChevronLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'

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

type AlbumsLayoutProps = {
  children: React.ReactNode
}

const AlbumsLayout = ({ children }: AlbumsLayoutProps) => {
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

      {children}
    </div>
  )
}

export default AlbumsLayout
