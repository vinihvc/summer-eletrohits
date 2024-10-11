"use client";

import React from "react";
import { createContext, useContext, useRef } from "react";
import { type StoreApi, create, useStore } from "zustand";
import { persist } from "zustand/middleware";
import { type MusicSlice, createMusicSlice } from "./music.slice";
import { type PlayerSlice, createPlayerSlice } from "./player.slice";

export interface AppStore extends MusicSlice, PlayerSlice {}

export const AppStoreContext = createContext<StoreApi<AppStore> | null>(null);

export const AppStoreProvider = ({ children }: React.PropsWithChildren) => {
  const storeRef = useRef<StoreApi<AppStore>>();

  if (!storeRef.current) {
    storeRef.current = create<AppStore>()(
      persist(
        (...state) => ({
          ...createMusicSlice(...state),
          ...createPlayerSlice(...state),
        }),
        {
          name: "eletrohits-store",
          partialize: (state) => ({ liked: state.liked, volume: state.volume }),
          version: 1,
        }
      )
    );
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};

const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error("useAppStore must be use within AppStoreProvider");
  }

  return useStore(appStoreContext, selector);
};

/**
 * Hook to get the music state
 */
export const useMusicState = () =>
  useAppStore((state) => ({
    playlist: state.playlist,
    liked: state.liked,
    currentIndex: state.currentIndex,
  }));

/**
 * Hook to get the player state
 */
export const usePlayerState = () =>
  useAppStore((state) => ({
    $player: state.$player,
    isPlaying: state.isPlaying,
    volume: state.volume,
    saveVolume: state.saveVolume,
    progress: state.progress,
  }));

/**
 * Hook to get the music actions
 */
export const useMusicActions = () => useAppStore((state) => state.musicActions);

/**
 * Hook to get the player actions
 */
export const usePlayerActions = () =>
  useAppStore((state) => state.playerActions);
