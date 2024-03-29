'use client'

import Link from 'next/link'
import { useStore } from '@/store'
import { Pause, Play } from 'lucide-react'

import { Image } from '@/components/ui/image'
import { cn } from '@/utils/cn'
import { Button } from '../ui/button'

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
      <article className="focus:group relative space-y-4 overflow-hidden rounded-xl">
        <div>
          <Image
            src={`/img/albums/${album.id}.webp`}
            placeholder="blur"
            alt={album.name}
          />

          <div
            className={cn(
              'absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-black/50 transition-all duration-200 sm:flex',
              !isPlayingAlbum && 'opacity-0 hover:opacity-100',
            )}
          >
            <Button
              variant="ghost"
              className="h-20 w-20 bg-white/30 text-neutral-200 transition-all hover:scale-110 hover:bg-white/40"
              onClick={handleClick}
            >
              {isPlayingAlbum ? <Pause size={30} /> : <Play size={30} />}
            </Button>
          </div>

          <div className="absolute inset-x-0 bottom-0">
            <div className="flex h-[40px] flex-col justify-center bg-black/30 px-2 backdrop-blur-3xl md:h-[60px] md:px-5">
              <div className="hidden text-[10px] font-medium uppercase text-gray-200 md:block">
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
