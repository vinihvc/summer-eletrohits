import { getAlbums } from '@/services/requests'

import { AlbumCard } from '@/components/album/album.card'
import Link from 'next/link'

const HomePage = async () => {
  const data = await getAlbums()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
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
