'use client'

import { useStore } from '@/store'
import { Play } from 'lucide-react'

import { Image } from '@/components/image'
import { Button } from './ui/button'

type AlbumInfoProps = {
  album: AlbumType
} & React.HTMLAttributes<HTMLDivElement>

export const AlbumInfo = ({ album, ...props }: AlbumInfoProps) => {
  const { play } = useStore()

  return (
    <div
      className="flex flex-col items-center gap-5 sm:flex-row sm:gap-10"
      {...props}
    >
      <div className="flex justify-center sm:justify-start">
        <Image
          src={album.thumb}
          alt={album.name}
          className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px]"
        />
      </div>

      <div className="flex flex-col items-center space-y-4 sm:items-start">
        <div className="text-xs font-medium uppercase text-blue-200">Album</div>

        <h2 className="text-lg font-bold sm:text-xl">{album.name}</h2>

        <div className="mt-1">{`${album.songs?.length} songs`}</div>

        <Button
          className="space-x-2"
          onClick={() => album.songs && play(album.songs)}
        >
          <Play className="h-5 w-5" />
          <span>Play</span>
        </Button>
      </div>
    </div>
  )
}
