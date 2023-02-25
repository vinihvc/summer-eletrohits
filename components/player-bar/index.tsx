'use client'

import { useStore } from '@/store'

import { useMediaKeyPress } from '@/hooks/media-keypress'
import { useDevice } from '@/hooks/use-device'
import { YoutubePlayer } from '@/components/youtube-player'
import { PlayerActions } from './player.actions'
import { PlayerSongInfo } from './player.info'
import { PlayerPlaylist } from './player.playlist'
import { PlayerProgress } from './player.progress'
import { PlayerVolume } from './player.volume'

const PlayerBar = ({ ...props }) => {
  const { currentSong } = useStore()

  const { isMobile } = useDevice()

  useMediaKeyPress()

  if (!currentSong()) {
    return null
  }

  return (
    <>
      <div
        className="sticky inset-x-0 bottom-[50px] z-50 flex border-t-4 bg-gradient-to-t from-black to-black/20 sm:bottom-0 sm:bg-black"
        {...props}
      >
        <div className="container relative">
          <PlayerProgress />

          <div className="flex h-20 flex-1 items-center">
            <PlayerSongInfo w={{ lg: '20%' }} />

            <PlayerActions flex={1} />

            <div className="flex w-1/5 flex-1 items-center">
              {!isMobile && <PlayerPlaylist />}

              {!isMobile && <PlayerVolume />}
            </div>
          </div>
        </div>
      </div>

      <YoutubePlayer isHidden />
    </>
  )
}

export default PlayerBar
