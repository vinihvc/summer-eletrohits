import { AlbumCard } from '@/components/ui/album/album.card'
import { getAlbums } from '@/services/queries/album'

import Link from 'next/link'

const HomePage = async () => {
  const data = await getAlbums()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-5 p-5 pt-20">
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
