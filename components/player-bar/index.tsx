'use client'

import { useStore } from '@/store'

import { useDevice } from '@/hooks/use-device'
import { useMediaKeyPress } from '@/hooks/media-keypress'

import { YoutubePlayer } from '@/components/youtube-player'

import { PlayerSongInfo } from './player.info'
import { PlayerActions } from './player.actions'
import { PlayerProgress } from './player.progress'
import { PlayerPlaylist } from './player.playlist'
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
        className="flex sticky bottom-[50px] md:bottom-0 inset-x-0 bg-gray-900 border-t-4 border-blue-100"
        {...props}
      >
        <div className="container relative">
          <PlayerProgress />

          <div className="flex-1 items-center flex h-20">
            <PlayerSongInfo w={{ lg: '20%' }} />

            <PlayerActions flex={1} />

            <div className="flex-1 items-center flex w-1/5">
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
