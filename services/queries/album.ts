import { http } from '@/services/http'
import type { AlbumType } from '@/types/album'

export const getAlbum = async (id: string) => {
  return await http<AlbumType>(`/api/albums/${id}`)
}

export const getAlbums = async () => {
  return await http<AlbumType[]>('/api/albums')
}
