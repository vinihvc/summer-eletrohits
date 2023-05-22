'use client'

import Image from 'next/image'

import { useStore } from '@/store'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/utils/cn'

import { LikeButton } from './actions/like'
import { PlayButton } from './actions/play'

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
            key={song.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.1 }}
            className="overflow-hidden rounded-sm transition-colors duration-200 odd:bg-black/10 hover:bg-black/5 odd:dark:bg-black/40 dark:hover:bg-white/5"
            viewport={{ once: true }}
          >
            <div
              className={cn(
                'group flex items-center space-x-3 p-2.5 transition-colors duration-200 hover:bg-black/10 dark:hover:bg-white/10 md:space-x-5',
                currentSong()?.id === song.id && 'bg-white/20',
                className,
              )}
              {...rest}
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  width={40}
                  height={40}
                  className="aspect-square scale-150"
                  src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
                  alt={song?.name}
                />

                <div className="absolute inset-0 flex items-center justify-center group-hover:flex md:hidden">
                  <PlayButton songs={songs} index={index} />
                </div>
              </div>

              <div className="w-full max-w-[100px] text-sm sm:max-w-[200px] md:max-w-[300px]">
                <div className="truncate text-sm">{song.name}</div>
              </div>

              <div className="w-full max-w-[100px] text-sm sm:max-w-[200px] md:max-w-[300px]">
                <div className="truncate text-sm">{song.singer}</div>
              </div>

              <div className="grow" />

              <LikeButton song={song} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
