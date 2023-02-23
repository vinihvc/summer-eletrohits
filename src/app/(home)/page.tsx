import { AlbumItem } from 'components/album/album.item'

import { getData } from './fetch'

const HomePage = async () => {
  const data = await getData()

  return (
    <>
      {data?.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </>
  )
}

export default HomePage
