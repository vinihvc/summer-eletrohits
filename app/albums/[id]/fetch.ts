import { DataParams } from './types'

export const getData = async ({ params }: DataParams): Promise<AlbumType> => {
  const res = await fetch(
    `https://summer-eletrohits-api.vercel.app/api/albums/${params.id}`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
