import { GetState, SetState } from 'zustand'

import { playerSlice } from './player'
import { songSlice } from './song'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...playerSlice(set, get),
  ...songSlice(set, get)
})
