import { AlbumCard } from '@/components/album-card'

const getData = async (): Promise<AlbumType[]> => {
  const res = await fetch('https://summer-eletrohits-api.vercel.app/api/albums')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const HomePage = async () => {
  const data = await getData()

  return (
    <>
      {data?.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </>
  )
}

export default HomePage
