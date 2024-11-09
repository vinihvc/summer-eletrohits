import type { SongType } from '@/types/song'
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
     * Like a song
     */
    like: (song: SongType) => void
    /**
     * Dislike a song
     */
    dislike: (song: SongType) => void
    /**
     * Add a song to the playlist
     */
    addToPlaylist: (song: SongType, position: 'next' | 'last') => void
    /**
     * Remove a song from the playlist
     */
    removeFromPlaylist: (songId: number) => void
  }
}

export const createMusicSlice: StateCreator<
  MusicSlice & PlayerSlice,
  [],
  [],
  MusicSlice
> = (set) => {
  return {
    playlist: [],
    liked: [],
    currentIndex: 0,
    musicActions: {
      like: (song) => {
        set((state) => ({
          liked: [...state.liked.filter((s) => s.id !== song.id), song],
        }))
      },

      dislike: (song) => {
        set((state) => ({
          liked: state.liked.filter((s) => s.id !== song.id),
        }))
      },

      addToPlaylist: (song, position) => {
        set((state) => {
          if (state.playlist.some((s) => s.id === song.id)) {
            return state
          }

          let newPlaylist: SongType[] = []
          if (position === 'next') {
            newPlaylist = [
              ...state.playlist.slice(0, state.currentIndex + 1),
              song,
              ...state.playlist.slice(state.currentIndex + 1),
            ]
          } else {
            newPlaylist = [...state.playlist, song]
          }

          return {
            ...state,
            playlist: newPlaylist,
          }
        })
      },

      removeFromPlaylist: (songId) => {
        set((state) => ({
          playlist: state.playlist.filter((s) => s.id !== songId),
          currentIndex:
            state.currentIndex > state.playlist.length - 2
              ? state.playlist.length - 2
              : state.currentIndex,
        }))
      },
    },
  }
}
