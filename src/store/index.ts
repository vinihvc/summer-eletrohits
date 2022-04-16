import create, { GetState, SetState } from 'zustand'

import { createRootSlice } from './slices'

export type StoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>
) => T

export const useStore = create(createRootSlice)
