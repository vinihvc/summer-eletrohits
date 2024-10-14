import { InteractiveBlurBackground } from '@/components/backgrounds/interactive-blur-background'
import { AlbumCard } from '@/components/ui/album/album.card'
import { getAlbums } from '@/services/queries/album'

import Link from 'next/link'

const HomePage = async () => {
  const data = await getAlbums()

  return (
    <>
      <InteractiveBlurBackground />

      <div className="container py-20 sm:py-40">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 animate-in fade-in">
          {data?.map((album) => (
            <Link
              key={album.id}
              className="group outline-none"
              href={`/albums/${album.id}`}
              aria-label={`View ${album.name}`}
            >
              <AlbumCard album={album} />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
