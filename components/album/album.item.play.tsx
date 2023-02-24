'use client'

import { MdPlayArrow } from 'react-icons/md'
import { BsPauseFill } from 'react-icons/bs'

import { useStore } from '@/store'

type AlbumItemProps = {
  songs?: SongType[]
}

export const AlbumItemPlay = ({ songs }: AlbumItemProps) => {
  const { currentSong, play, togglePlay, isPlaying } = useStore()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    isPlayingAlbum ? togglePlay() : songs && play(songs)
  }

  const isPlayingAlbum =
    songs?.some((song) => song.id === currentSong()?.id) && isPlaying

  return (
    <div
      className="absolute bg-black/70 items-center justify-center left-0 top-0 w-full h-full transition-all duration-200 hidden md:flex"
      {...(!isPlayingAlbum && { opacity: 0, _hover: { opacity: 1 } })}
    >
      <div
        className="flex bg-white/50 rounded-full w-16 h-16 items-center justify-center transition-all duration-200 hover:scale-110"
        onClick={handleClick}
      >
        <div className="text-white w-10 h-10">
          {isPlayingAlbum ? <BsPauseFill /> : <MdPlayArrow />}
        </div>
      </div>
    </div>
  )
}
