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
        'flex flex-col items-center gap-5 sm:flex-row sm:gap-10 overflow-hidden p-5 pt-20',
        className,
      )}
      {...rest}
    >
      <div className="absolute inset-0 max-h-dvh overflow-hidden opacity-40 dark:opacity-10">
        <Image
          className="object-cover blur-2xl"
          src={album.thumb}
          alt={album.name}
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <BlurImage
        src={album.thumb}
        alt={album.name}
        width={150}
        height={150}
        className="size-36 justify-center rounded-xl sm:size-48 sm:justify-start"
      />

      <div className="relative">
        <span className="text-xs font-medium uppercase text-muted-foreground">
          Album
        </span>

        <h2 className="text-lg font-bold sm:text-xl">{album.name}</h2>

        {album.songs?.length !== 0 && (
          <div className="text-sm">{`${album.songs?.length} tracks`}</div>
        )}

        {album.songs?.length !== 0 && (
          <div className="flex gap-4 mt-4">
            <Button onClick={() => album.songs && play(album.songs)}>
              <Play className="size-4" />

              <span>Play</span>
            </Button>

            <Button
              variant="outline"
              onClick={() => album.songs && playRandom(album.songs)}
            >
              <Shuffle className="size-4" />
              <span>Shuffle</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
