import { AlbumCard } from '@/components/ui/album/album.card'
import { getAlbums } from '@/services/requests'

import Link from 'next/link'

const HomePage = async () => {
  const data = await getAlbums()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 p-10 pt-20">
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
  )
}

export default HomePage
