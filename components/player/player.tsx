'use client'

import { useMediaKeyPress } from '@/hooks/use-media-keypress'
import { cn } from '@/lib/utils'

import { useBreakpoints } from '@/hooks/use-breakpoints'
import { useMusicState, usePlayerActions } from '@/store/app.store'
import React from 'react'
import { PlayerActions } from './player.actions'
import { PlayerSongInfo } from './player.info'
import { PlayerPlaylist } from './player.playlist'
import { PlayerProgress } from './player.progress'
import { PlayerVolume } from './player.volume'
import { ReactPlayer } from './react-player'

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Player = (props: PlayerProps) => {
  const { className, ...rest } = props

  const $ref = React.useRef<HTMLDivElement>(null)

  const { togglePlaylist } = usePlayerActions()

  const { isMaxSm } = useBreakpoints()

  const { playlist } = useMusicState()

  useMediaKeyPress()

  if (playlist.length === 0) {
    return null
  }

  return (
    <div className="sticky inset-x-0 bottom-[45px] z-50 sm:bottom-0">
      <div className={cn('flex border-t-2 bg-background', className)} {...rest}>
        <div className="container w-full relative">
          <PlayerProgress />

          <div
            ref={$ref}
            className="flex flex-1 items-center max-sm:justify-between py-2 md:py-3"
            {...(isMaxSm && {
              onClick: (e) => {
                if (e.target !== $ref.current) {
                  return
                }
                e.stopPropagation()
                togglePlaylist()
              },
            })}
          >
            <div className="flex items-center gap-4 lg:w-[20%]">
              <PlayerSongInfo />
            </div>

            <div className="flex items-center justify-end gap-2 sm:justify-center">
              <PlayerActions />
            </div>

            <div className="hidden flex-1 items-center sm:flex justify-end gap-4">
              <PlayerPlaylist className="shrink-0" />

              <div className="flex gap-4">
                <PlayerVolume />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactPlayer />
    </div>
  )
}

export default Player
