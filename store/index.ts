import { create } from 'zustand'

import { type PlayerSlice, playerSlice } from './slices/player'
import { type SongSlice, songSlice } from './slices/song'

import { persist } from 'zustand/middleware'

export const useStore = create<PlayerSlice & SongSlice>()(
  persist(
    (...a) => ({
      ...playerSlice(...a),
      ...songSlice(...a),
    }),
    {
      name: 'eletrohits',
      version: 1,
      onRehydrateStorage: (_state) => {
        console.log('hydration starts')

        // optional
        return (_state, error) => {
          if (error) {
            console.log('an error happened during hydration', error)
          } else {
            console.log('hydration finished')
          }
        }
      },
    },
  ),
)
