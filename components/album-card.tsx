'use client'

import Link from 'next/link'

import { useStore } from '@/store'
import { Pause, Play } from 'lucide-react'

import { Image } from '@/components/image'

import { cn } from '@/utils/cn'

import { Button } from './ui/button'

type AlbumCardProps = {
  album: AlbumType
} & React.HTMLAttributes<HTMLDivElement>

export const AlbumCard = ({ album }: AlbumCardProps) => {
  const { currentSong, play, togglePlay, isPlaying } = useStore()

  const songs = album.songs

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    isPlayingAlbum ? togglePlay() : songs && play(songs)
  }

  const isPlayingAlbum =
    songs?.some((song) => song.id === currentSong()?.id) && isPlaying

  return (
    <Link href={`/albums/${album.id}`} aria-label={album.name}>
      <article className="focus:group relative space-y-4 overflow-hidden rounded-3xl">
        <div>
          <Image src={album.thumb} alt={album.name} />

          <div
            className={cn(
              'absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-black/50 transition-all duration-200 sm:flex',
              !isPlayingAlbum && 'opacity-0 hover:opacity-100',
            )}
          >
            <Button
              variant="ghost"
              className="h-20 w-20 bg-white/30 text-neutral-200 hover:scale-110"
              onClick={handleClick}
            >
              {isPlayingAlbum ? <Pause size={30} /> : <Play size={30} />}
            </Button>
          </div>

          <div className="absolute inset-x-0 bottom-0">
            <div className="flex h-[60px] flex-col justify-center bg-black/30 px-5 backdrop-blur-3xl">
              <div className="text-[10px] font-medium uppercase text-gray-200">
                Album
              </div>

              <div className="text-ellipsis text-sm font-semibold text-white">
                {album.name}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
