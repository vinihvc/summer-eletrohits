import { StoreSlice } from 'store'

import { storage } from 'services/storage'

import { PlayerSlice } from './player'

export type SongSlice = {
  playlist: SongType[]
  liked: SongType[]
  currentIndex: number
  currentSong: () => SongType
  initiateLikes: () => void
  like: (song: SongType) => void
  dislike: (song: SongType) => void
}

export const songSlice: StoreSlice<SongSlice, PlayerSlice> = (set, get) => {
  return {
    playlist: [],
    liked: [],
    currentIndex: 0,
    currentSong: () => get().playlist[get().currentIndex],
    initiateLikes: async () => {
      const liked = await storage.getSongs()

      set((state) => ({
        ...state,
        liked
      }))
    },
    like: async (song: SongType) => {
      await storage.setSong(song)

      const liked = [...get().liked, song]

      set((state) => ({
        ...state,
        liked
      }))
    },
    dislike: async (song: SongType) => {
      await storage.removeSong(song)

      const liked = [...get().liked].filter((s) => s.id !== song.id)

      set((state) => ({
        ...state,
        liked
      }))
    }
  }
}
