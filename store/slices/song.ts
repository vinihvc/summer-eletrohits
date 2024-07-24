import type { StateCreator } from 'zustand'

import type { PlayerSlice } from './player'

export type SongSlice = {
  /**
   * List of songs in the playlist
   */
  playlist: SongType[]
  /**
   * List of liked songs
   */
  liked: SongType[]
  /**
   * Index of the current song in the playlist
   */
  currentIndex: number
  /**
   * Get the current song
   */
  currentSong: () => SongType
  /**
   * Like a song
   */
  like: (song: SongType) => void
  /**
   * Dislike a song
   */
  dislike: (song: SongType) => void
}

export const songSlice: StateCreator<
  SongSlice & PlayerSlice,
  [],
  [],
  SongSlice
> = (set, get) => ({
  playlist: [],
  liked: [],
  currentIndex: 0,
  currentSong: () => get().playlist[get().currentIndex],
  like: async (song: SongType) =>
    set((state) => ({
      ...state,
      liked: [...state.liked, song],
    })),
  dislike: async (song: SongType) =>
    set((state) => ({
      ...state,
      liked: state.liked.filter((item) => item.id !== song.id),
    })),
})
