'use client'

import { useMusicActions } from '@/contexts/music'
import { usePlayerActions, usePlayerState } from '@/store/player.store'
import { Pause, Play } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../button'

interface AlbumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Album data
   */
  album: AlbumType
}

export const AlbumCard = ({ album }: AlbumCardProps) => {
  const { play, togglePlay } = usePlayerActions()
  const { isPlaying } = usePlayerState()
  const { currentSong } = useMusicActions()

  const songs = album.songs

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    isPlayingAlbum ? togglePlay() : songs && play(songs)
  }

  const isPlayingAlbum =
    songs?.some((song) => song.id === currentSong?.()?.id) && isPlaying

  return (
    <article className="relative rounded-xl">
      <div className="transition-all group-focus-visible:ring-2 ring-primary ring-offset-2 ring-offset-background relative size-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={`/img/albums/${album.id}.webp`}
          className="size-full object-cover"
          alt={album.name}
          fill
        />

        <div className="group-hover:opacity-100 opacity-0 absolute left-0 top-0 hidden size-full items-center justify-center transition-all sm:flex">
          <Button
            tabIndex={-1}
            variant="ghost"
            className="size-14 bg-black/60 text-white hover:bg-black hover:scale-105"
            onClick={handleClick}
          >
            {isPlayingAlbum ? <Pause size={30} /> : <Play size={30} />}
          </Button>
        </div>
      </div>

      <div className="flex h-[40px] flex-col justify-center md:h-[60px]">
        <div className="hidden text-[10px] font-medium uppercase text-muted-foreground md:block">
          Album
        </div>

        <div className="line-clamp-1 font-semibold">{album.name}</div>
      </div>
    </article>
  )
}
