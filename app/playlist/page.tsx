'use client'

import Link from 'next/link'
import { useStore } from '@/store'

import { CustomBg } from '@/components/layout/custom-bg'
import { SongList } from '@/components/song/song.list'
import { Button } from '@/components/ui/button'

const PlaylistPage = () => {
  const { playlist } = useStore()

  return (
    <>
      <CustomBg className="from-teal-200 to-purple-800" />

      <h1 className="mb-10">Playlist</h1>

      {playlist.length === 0 && (
        <>
          <div className="my-5">No music playing</div>

          <Link href="/">
            <Button>Discover</Button>
          </Link>
        </>
      )}

      {playlist.length > 0 && <SongList songs={playlist} />}
    </>
  )
}

export default PlaylistPage
