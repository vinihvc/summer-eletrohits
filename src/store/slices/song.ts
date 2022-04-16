import { StoreSlice } from 'store'

import { storage } from 'services/storage'

import { PlayerSlice } from './player'

export type SongSlice = {
  playlist: SongType[]
  liked: SongType[]
  currentIndex: () => number
  currentSong: () => SongType
  play: (list: SongType[], index?: number) => void
  togglePlay: () => void
  playNext: () => void
  playPrevious: () => void
  initiateLikes: () => void
  like: (song: SongType) => void
  dislike: (song: SongType) => void
}

export const songSlice: StoreSlice<SongSlice, PlayerSlice> = (set, get) => {
  return {
    playlist: [],
    liked: [],
    currentIndex: () =>
      get().$player.current?.getInternalPlayer()?.getPlaylistIndex() || 0,
    currentSong: () => {
      return get().playlist[get().currentIndex()]
    },
    play: (list, index = 0) => {
      set((state) => ({
        ...state,
        playlist: list,
        isPlaying: true
      }))

      get().$player.current?.getInternalPlayer().playVideoAt(index)
    },
    togglePlay: () => {
      set((state) => ({
        ...state,
        isPlaying: !get().isPlaying
      }))
    },
    playNext: () => {
      get().$player.current?.getInternalPlayer().nextVideo()

      set((state) => ({
        ...state,
        isPlaying: true
      }))
    },
    playPrevious: () => {
      get().$player.current?.getInternalPlayer().previousVideo()

      set((state) => ({
        ...state,
        isPlaying: true
      }))
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
