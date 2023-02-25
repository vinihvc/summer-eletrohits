'use client'

import Link from 'next/link'

import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'

import { useStore } from '@/store'

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
      <div className="relative rounded-lg overflow-auto">
        <Image src={album.thumb} alt={album.name} />

        <div
          className={cn(
            'absolute bg-black/70 items-center justify-center left-0 top-0 w-full h-full transition-all duration-200 hidden md:flex',
            !isPlayingAlbum && 'opacity-0 hover:opacity-100',
          )}
        >
          <div
            className="flex bg-white/30 rounded-full w-16 h-16 items-center justify-center transition-all duration-200 hover:scale-110"
            onClick={handleClick}
          >
            {isPlayingAlbum ? (
              <PauseIcon className="h-4 w-4" />
            ) : (
              <PlayIcon className="h-4 w-4" />
            )}
          </div>
        </div>
      </div>

      <div className="md:text-lg font-medium mt-3 text-ellipsis">
        {album.name}
      </div>
    </Link>
  )
}
