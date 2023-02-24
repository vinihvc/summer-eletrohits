export const getData = async (): Promise<AlbumType[]> => {
  const res = await fetch(
    'https://summer-eletrohits-api.vercel.app/api/albums',
    {
      next: { revalidate: 10 }
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
