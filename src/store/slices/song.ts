import { StoreSlice } from 'store'

import { storage } from 'services/storage'

import { PlayerSlice } from './player'

export type SongSlice = {
  playlist: SongType[]
  liked: SongType[]
  currentIndex: number
  currentSong: () => SongType
  play: (list: SongType[], index?: number) => void
  togglePlay: () => void
  playNext: () => void
  playPrevious: () => void
  initiateLikes: () => void
  like: (song: SongType) => void
  deslike: (song: SongType) => void
}

export const songSlice: StoreSlice<SongSlice, PlayerSlice> = (set, get) => {
  return {
    playlist: [],
    liked: [],
    currentIndex: 0,
    currentSong: () => get().playlist[get().currentIndex],
    play: (list, index = 0) => {
      set((state) => ({
        ...state,
        playlist: list,
        isPlaying: true,
        currentIndex: index
      }))
    },
    togglePlay: () => {
      set((state) => ({
        ...state,
        isPlaying: !get().isPlaying
      }))
    },
    playNext: () => {
      const hasNext = get().currentIndex < get().playlist.length - 1

      if (hasNext) {
        const nextIndex = get().currentIndex + 1

        set((state) => ({
          ...state,
          currentIndex: nextIndex
        }))
      }
    },
    playPrevious: () => {
      const hasPrevious = get().currentIndex > 0

      if (hasPrevious) {
        const previousIndex = get().currentIndex - 1

        set((state) => ({
          ...state,
          currentIndex: previousIndex
        }))
      }
    },
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
    deslike: async (song: SongType) => {
      await storage.removeSong(song)

      const liked = [...get().liked].filter((s) => s.id !== song.id)

      set((state) => ({
        ...state,
        liked
      }))
    }
  }
}
