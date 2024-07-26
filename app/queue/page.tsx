'use client'

import Link from 'next/link'

import { AlbumInfo } from '@/components/ui/album/album.info'
import { buttonVariants } from '@/components/ui/button'
import { Songs } from '@/components/ui/songs'
import { useMusicState } from '@/contexts/app.context'

const SongsPage = () => {
  const { playlist } = useMusicState()

  return (
    <>
      <AlbumInfo
        album={{
          id: 0,
          name: 'Playing',
          thumb: '/img/albums/library.webp',
          releaseDate: new Date('2020-01-01').toDateString(),
        }}
      />

      <div className="relative px-5">
        {playlist.length === 0 && (
          <div className="space-y-5">
            <div className="text-2xl font-semibold">
              Nothing in your library yet, go discover!
            </div>

            <Link href="/" className={buttonVariants()}>
              Discover
            </Link>
          </div>
        )}

        {playlist.length > 0 && <Songs songs={playlist} />}
      </div>
    </>
  )
}

export default SongsPage
