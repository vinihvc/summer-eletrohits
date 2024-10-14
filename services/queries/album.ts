import { http } from '@/services/http'

export const getAlbum = async (id: string) => {
  return await http<AlbumType>(`/api/albums/${id}`)
}

export const getAlbums = async () => {
  return await http<AlbumType[]>('/api/albums')
}
