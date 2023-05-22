'use client'

import { useStore } from '@/store'

import { useMediaKeyPress } from '@/hooks/media-keypress'

import { Player } from '@/components/ui/player'

import { PlayerActions } from './player.actions'
import { PlayerSongInfo } from './player.info'
import { PlayerPlaylist } from './player.playlist'
import { PlayerProgress } from './player.progress'
import { PlayerVolume } from './player.volume'

export const PlayerBar = ({ ...props }) => {
  const { currentSong } = useStore()

  useMediaKeyPress()

  if (!currentSong()) return null

  return (
    <div className="sticky inset-x-0 bottom-[45px] z-50 sm:bottom-0">
      <div
        className="flex border-t-4 border-t-neutral-300 bg-white dark:border-t-neutral-800 dark:bg-black"
        {...props}
      >
        <div className="container relative">
          <PlayerProgress />

          <div className="flex h-14 flex-1 items-center md:h-20">
            <PlayerSongInfo className="lg:w-[20%]" />

            <PlayerActions flex={1} />

            <div className="hidden w-1/5 flex-1 items-center sm:flex">
              <PlayerPlaylist />

              <PlayerVolume />
            </div>
          </div>
        </div>
      </div>

      <Player isHidden />
    </div>
  )
}
