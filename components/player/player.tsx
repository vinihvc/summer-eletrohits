'use client'
import { useMediaKeyPress } from '@/hooks/use-media-keypress'
import { cn } from '@/lib/utils'
import { useMusicState, usePlayerState } from '@/store/app.store'
import * as Portal from '@radix-ui/react-portal'
import React from 'react'
import { PlayerActions } from './player.actions'
import { PlayerSongInfo } from './player.info'
import { PlayerProgress } from './player.progress'
import { PlayerVolume } from './player.volume'
import { ReactPlayer } from './react-player'

const PlayerPlaylist = React.lazy(() => import('./player.playlist'))

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Player = (props: PlayerProps) => {
  const { className, ...rest } = props

  const { playlist } = useMusicState()

  const { isPlaylistOpen } = usePlayerState()

  useMediaKeyPress()

  if (playlist.length === 0) {
    return null
  }

  return (
    <Portal.Root
      className={cn(
        'sticky inset-x-0 bottom-[53px] z-50 sm:bottom-0',
        // tricky to make the player visible when the playlist is open
        { fixed: isPlaylistOpen },
        className,
      )}
    >
      <div className={cn('flex border-t-2 bg-background', className)} {...rest}>
        <div className="container w-full relative">
          <PlayerProgress />

          <div className="flex flex-1 items-center justify-between py-2 md:py-3 sm:gap-5">
            <div className="flex items-center gap-4 basis-1/2">
              <PlayerSongInfo />
            </div>

            <div className="flex sm:flex-1 items-center justify-end gap-2 sm:justify-center basis-1/2">
              <PlayerActions />
            </div>

            <div className="hidden items-center sm:flex justify-end gap-4 basis-1/2">
              <PlayerPlaylist className="shrink-0" />

              <div className="flex gap-4">
                <PlayerVolume />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactPlayer />
    </Portal.Root>
  )
}

export default Player
