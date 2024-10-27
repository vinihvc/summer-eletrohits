'use client'

import { BlurBackground } from '@/components/backgrounds/blur-background'
import { Songs } from '@/components/ui/songs'
import {
  useMusicState,
  usePlayerActions,
  usePlayerState,
} from '@/store/app.store'

import { ChevronDown, ListVideo } from 'lucide-react'

import { USER_ALBUM } from '@/app/likes/data'
import { Button, type ButtonProps } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import Image from 'next/image'

interface PlayerPlaylistProps extends ButtonProps {}

export const PlayerPlaylist = (props: PlayerPlaylistProps) => {
  const { playlist, currentIndex } = useMusicState()

  const { isPlaylistOpen } = usePlayerState()
  const { togglePlaylist } = usePlayerActions()

  const currentSong = playlist?.[currentIndex]

  // /**
  //  * Handle body overflow when drawer is open
  //  *
  //  * The drawer component needs to be modal=false to interact with the player
  //  * But it needs to be modal to prevent the body from scrolling
  //  * This is a hack to prevent the body from scrolling and to add padding to the body when the drawer is open
  //  */
  // React.useEffect(() => {
  //   if (isPlaylistOpen) {
  //     document.body.style.overflowY = 'scroll'
  //     document.body.style.position = 'fixed'
  //     document.body.style.width = '100%'
  //   } else {
  //     document.body.removeAttribute('style')
  //   }

  //   return () => {
  //     document.body.removeAttribute('style')
  //   }
  // }, [isPlaylistOpen])

  return (
    <Drawer
      open={isPlaylistOpen}
      onOpenChange={togglePlaylist}
      repositionInputs={false}
      modal={false}
    >
      <DrawerTrigger className="data-[state=open]:bg-primary" asChild>
        <Button variant="ghost" size="icon" {...props}>
          <ListVideo className="size-4" />
          <span className="sr-only">Open Playlist</span>
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <BlurBackground src={USER_ALBUM.thumb} />

        <DrawerTitle className="sr-only">Playlist</DrawerTitle>
        <DrawerDescription className="sr-only">
          Manage your playlist
        </DrawerDescription>

        <DrawerClose className="absolute right-3 top-3" asChild>
          <Button variant="ghost">
            <ChevronDown className="size-4" />
            Minimize
          </Button>
        </DrawerClose>

        <div className="container flex py-20 gap-5">
          <div className="flex flex-col items-center gap-5 w-full max-w-sm shrink-0">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={`https://img.youtube.com/vi/${currentSong?.youtubeId}/0.jpg`}
                alt={currentSong?.name ?? ''}
                width={256}
                height={256}
                className="relative size-64 justify-center rounded-xl scale-150"
              />
            </div>

            <div className="relative text-center">
              <h2 className="text-lg font-bold sm:text-xl">
                {currentSong?.name}
              </h2>

              <div className="text-sm opacity-80">{currentSong?.singer}</div>
            </div>
          </div>

          <Songs songs={playlist} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
