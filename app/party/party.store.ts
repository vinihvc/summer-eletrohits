import { create } from 'zustand'

interface PartyState {
  speed: number
  colors: string[]
  isAnimating: boolean
  setSpeed: (speed: number) => void
  setColors: (colors: string[]) => void
  toggleAnimation: () => void
}

export const usePartyStore = create<PartyState>((set) => ({
  speed: 1,
  colors: ['#FF0000', '#00FF00', '#0000FF'],
  isAnimating: true,
  setSpeed: (speed) => set({ speed }),
  setColors: (colors) => set({ colors }),
  toggleAnimation: () => set((state) => ({ isAnimating: !state.isAnimating })),
}))
