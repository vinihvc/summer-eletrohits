/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'

import { useStore } from '@/store'

import { SongList } from '@/components/song/song.list'
import { Button } from '@/components/ui/button'

const PlaylistPage = () => {
  const { playlist, currentSong } = useStore()

  return (
    <div className="flex flex-1 flex-col">
      {playlist.length === 0 && (
        <>
          <div className="my-5">No music playing</div>

          <Link href="/">
            <Button>Discover</Button>
          </Link>
        </>
      )}

      <div className="grid max-h-full flex-1 grid-cols-2 items-center gap-4">
        <img
          src={`https://img.youtube.com/vi/${currentSong()?.youtubeId}/0.jpg`}
          alt=""
        />

        <div className="max-h-96 overflow-auto">
          {playlist.length > 0 && <SongList songs={playlist} />}
        </div>
      </div>
    </div>
  )
}

export default PlaylistPage
