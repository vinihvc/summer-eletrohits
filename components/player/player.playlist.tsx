'use client'

import { BlurBackground } from '@/components/backgrounds/blur-background'
import { Songs } from '@/components/ui/songs'
import { useMusicState } from '@/store/app.store'

import { ChevronDown, ListVideo } from 'lucide-react'

import { USER_ALBUM } from '@/app/likes/data'
import { Button, type ButtonProps } from '@/components/ui/button'
import Image from 'next/image'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../ui/dialog'

interface PlayerPlaylistProps extends ButtonProps {}

export const PlayerPlaylist = (props: PlayerPlaylistProps) => {
  const { playlist, currentIndex } = useMusicState()

  const currentSong = playlist?.[currentIndex]

  return (
    <Dialog modal={false}>
      <DialogTrigger className="data-[state=open]:bg-primary" asChild>
        <Button variant="ghost" size="icon" {...props}>
          <ListVideo className="size-4" />
          <span className="sr-only">Open Playlist</span>
        </Button>
      </DialogTrigger>

      <DialogContent
        // className={cn(RemoveScroll.classNames.fullWidth)}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <BlurBackground src={USER_ALBUM.thumb} />

        <div className="relative container flex gap-20 py-20">
          <DialogClose className="absolute right-3 top-0" asChild>
            <Button variant="ghost">
              <ChevronDown className="size-4" />
              Minimize
            </Button>
          </DialogClose>

          <div className="flex flex-col items-center gap-5 shrink-0">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={`https://img.youtube.com/vi/${currentSong?.youtubeId}/0.jpg`}
                alt={currentSong?.name ?? ''}
                width={150}
                height={150}
                className="relative size-36 justify-center rounded-xl sm:size-48 sm:justify-start drop-shadow scale-150"
              />
            </div>

            <div className="relative text-center">
              <h2 className="text-lg font-bold sm:text-xl">
                {currentSong?.name}
              </h2>

              <div className="text-sm opacity-80">{currentSong?.singer}</div>
            </div>
          </div>

          <Songs className="w-full" songs={playlist} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
