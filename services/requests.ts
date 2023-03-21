const get = async <T>(url: string): Promise<T> => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const getAlbum = async ({ params }: DataParams) => {
  return await get<AlbumType>(
    `https://summer-eletrohits-api.vercel.app/api/albums/${params.id}`,
  )
}

export const getAlbums = async () => {
  return await get<AlbumType[]>(
    'https://summer-eletrohits-api.vercel.app/api/albums',
  )
}
