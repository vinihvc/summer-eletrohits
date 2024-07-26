import type { StateCreator } from 'zustand'
import type { PlayerSlice } from './player.slice'

export interface MusicSlice {
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
   * Actions to manage music
   */
  musicActions: {
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
}

export const createMusicSlice: StateCreator<
  MusicSlice & PlayerSlice,
  [],
  [],
  MusicSlice
> = (set, get) => {
  return {
    playlist: [],
    liked: [],
    currentIndex: 0,
    musicActions: {
      currentSong: () => get().playlist[get().currentIndex],
      like: (song) => {
        set((state) => {
          const liked = state.liked.concat(song)

          return { ...state, liked }
        })
      },
      dislike: (song) => {
        set((state) => {
          const liked = state.liked.filter((s) => s.id !== song.id)

          return { ...state, liked }
        })
      },
    },
  }
}
