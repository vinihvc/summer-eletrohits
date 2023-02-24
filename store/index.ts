import { create } from 'zustand'

import { playerSlice, PlayerSlice } from './slices/player'
import { songSlice, SongSlice } from './slices/song'

export const useStore = create<PlayerSlice & SongSlice>()((...a) => ({
  ...playerSlice(...a),
  ...songSlice(...a)
}))
