import { http } from '@/services/http'

export const getAlbum = async ({ params }: DataParams) => {
  return await http<AlbumType>(`/api/albums/${params.id}`)
}

export const getAlbums = async () => {
  return await http<AlbumType[]>('/api/albums')
}
