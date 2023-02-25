'use client'

import Link from 'next/link'
import { useStore } from '@/store'
import { Pause, Play } from 'lucide-react'

import { Image } from '@/components/image'
import { cn } from '@/utils/cn'

type AlbumCardProps = {
  album: AlbumType
} & React.HTMLAttributes<HTMLDivElement>

export const AlbumCard = ({ album }: AlbumCardProps) => {
  const { currentSong, play, togglePlay, isPlaying } = useStore()

  const songs = album.songs

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    isPlayingAlbum ? togglePlay() : songs && play(songs)
  }

  const isPlayingAlbum =
    songs?.some((song) => song.id === currentSong()?.id) && isPlaying

  return (
    <Link href={`/albums/${album.id}`} aria-label={album.name}>
      <div className="relative overflow-auto rounded-lg">
        <Image src={album.thumb} alt={album.name} />

        <div
          className={cn(
            'absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-black/70 transition-all duration-200 sm:flex',
            !isPlayingAlbum && 'opacity-0 hover:opacity-100',
          )}
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 transition-all duration-200 hover:scale-110"
            onClick={handleClick}
          >
            {isPlayingAlbum ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 text-ellipsis font-medium sm:text-lg ">
        {album.name}
      </div>
    </Link>
  )
}
