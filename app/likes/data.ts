import type { AlbumType } from '@/types/album'

export const USER_ALBUM: AlbumType = {
  id: 0,
  name: 'My Library',
  thumb: '/img/albums/library.webp',
  releaseDate: new Date('2020-01-01').toDateString(),
}
