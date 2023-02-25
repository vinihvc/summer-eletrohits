import { create } from 'zustand'

import { PlayerSlice, playerSlice } from './slices/player'
import { SongSlice, songSlice } from './slices/song'

export const useStore = create<PlayerSlice & SongSlice>()((...a) => ({
  ...playerSlice(...a),
  ...songSlice(...a),
}))
