'use client'

import { Play, Shuffle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { usePlayerActions } from '@/store'
import Image from 'next/image'
import { BlurImage } from '../blur-image'

interface AlbumInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Album data
   */
  album: AlbumType
}

export const AlbumInfo = (props: AlbumInfoProps) => {
  const { album, className, ...rest } = props

  const { play, playRandom } = usePlayerActions()

  return (
    <div
      className={cn(
        'relative flex flex-col items-center gap-5 sm:flex-row sm:gap-10 overflow-hidden p-5 pt-20',
        className,
      )}
      {...rest}
    >
      <Image
        className="object-cover blur-lg opacity-10"
        src={`/img/albums/${album.id}.webp`}
        alt={album.name}
        fill
      />

      <BlurImage
        src={album.thumb}
        alt={album.name}
        width={150}
        height={150}
        className="h-[150px] w-[150px] justify-center rounded-xl sm:h-[250px] sm:w-[250px] sm:justify-start"
      />

      <div className="relative flex flex-col items-center space-y-2 sm:items-start">
        <div>
          <div className="text-xs font-medium uppercase">Album</div>

          <h2 className="text-lg font-bold sm:text-xl">{album.name}</h2>
        </div>

        {album.songs && (
          <div className="mt-1">{`${album.songs?.length} songs`}</div>
        )}

        <div className="flex space-x-4">
          <Button
            className="space-x-2"
            onClick={() => album.songs && play(album.songs)}
          >
            <Play size={20} />

            <span>Play</span>
          </Button>

          <Button
            variant="outline"
            className="space-x-2"
            onClick={() => album.songs && playRandom(album.songs)}
          >
            <Shuffle size={20} />
            <span>Shuffle</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
