import { http } from '../http'

export const getAlbum = async ({ params }: DataParams) => {
  return await http<AlbumType>(
    `https://summer-eletrohits-api.vercel.app/api/albums/${params.id}`,
  )
}

export const getAlbums = async () => {
  return await http<AlbumType[]>(
    'https://summer-eletrohits-api.vercel.app/api/albums',
  )
}
