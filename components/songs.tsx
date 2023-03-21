'use client'

import { useStore } from '@/store'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

import { cn } from '@/utils/cn'

import { LikeButton } from './actions/like'
import { PlayButton } from './actions/play'
import { Button } from './ui/button'
import { Image } from './ui/image'

type SongsProps = {
  songs: SongType[]
} & React.HtmlHTMLAttributes<HTMLDivElement>

export const Songs = (props: SongsProps) => {
  const { songs, className, ...rest } = props

  const { currentSong } = useStore()

  return (
    <div className={cn(className)} {...rest}>
      <AnimatePresence>
        {songs?.map((song, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="overflow-hidden rounded-sm transition-colors duration-200 odd:bg-black/10 hover:bg-black/5 odd:dark:bg-black/40 dark:hover:bg-white/5"
            viewport={{ once: true }}
          >
            <div
              className={cn(
                'group flex items-center space-x-5 p-2.5 transition-colors duration-200 hover:bg-black/10 dark:hover:bg-white/10',
                currentSong()?.id === song.id && 'bg-white/20',
                className,
              )}
              {...rest}
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  className="aspect-square h-full w-full scale-150"
                  src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
                  alt={song?.name}
                />

                <div className="absolute inset-0 hidden  items-center justify-center group-hover:flex">
                  <PlayButton songs={songs} index={index} />
                </div>
              </div>

              <div className="w-full max-w-[140px] text-sm sm:max-w-[400px]">
                <div className="truncate text-sm">{song.name}</div>
              </div>

              <div className="truncate text-sm">{song.singer}</div>

              <div className="grow" />

              <div className="flex space-x-1">
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <Plus size={16} />
                </Button>

                <LikeButton song={song} />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
