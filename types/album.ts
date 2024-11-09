import type { SongType } from './song'

export interface AlbumType {
  id: number
  name: string
  thumb: string
  releaseDate: string
  songs?: SongType[]
}
