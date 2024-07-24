'use client'

import { useMediaKeyPress } from '@/hooks/media-keypress'
import { cn } from '@/lib/cn'
import { useMusicActions } from '@/store'
import { ReactPlayer } from '../react-player'
import { PlayerActions } from './player.actions'
import { PlayerSongInfo } from './player.info'
import { PlayerPlaylist } from './player.playlist'
import { PlayerProgress } from './player.progress'
import { PlayerVolume } from './player.volume'

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Player = (props: PlayerProps) => {
  const { className, ...rest } = props

  const { currentSong } = useMusicActions()

  useMediaKeyPress()

  if (!currentSong()) return null

  return (
    <div className="sticky inset-x-0 bottom-[45px] z-50 sm:bottom-0">
      <div
        className={cn('flex border-t-4 bg-background px-5', className)}
        {...rest}
      >
        <div className="w-full relative">
          <PlayerProgress />

          <div className="flex h-14 flex-1 items-center md:h-20">
            <PlayerSongInfo className="lg:w-[20%]" />

            <PlayerActions flex={1} />

            <div className="hidden w-1/5 flex-1 items-center sm:flex justify-end">
              <PlayerPlaylist />

              <PlayerVolume />
            </div>
          </div>
        </div>
      </div>

      <ReactPlayer isHidden />
    </div>
  )
}
