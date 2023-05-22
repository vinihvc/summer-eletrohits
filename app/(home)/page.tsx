import { getAlbums } from '@/services/requests'

import { AlbumCard } from '@/components/album'

const HomePage = async () => {
  const data = await getAlbums()

  return (
    <>
      {data?.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </>
  )
}

export default HomePage
