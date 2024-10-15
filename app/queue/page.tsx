'use client'

import Link from 'next/link'

import { BlurBackground } from '@/components/backgrounds/blur-background'
import { AlbumInfo } from '@/components/ui/album/album.info'
import { Button } from '@/components/ui/button'
import { Songs } from '@/components/ui/songs'
import { useMusicState } from '@/store/app.store'
import { USER_ALBUM } from '../likes/data'

const SongsPage = () => {
  const { playlist } = useMusicState()

  const hasQueue = playlist.length > 0

  return (
    <>
      <BlurBackground src={USER_ALBUM.thumb} />

      <div className="container py-20 sm:py-40 space-y-10">
        <AlbumInfo
          album={{
            id: 0,
            name: 'Playing',
            songs: playlist,
            thumb: '/img/albums/library.webp',
            releaseDate: new Date('2020-01-01').toDateString(),
          }}
        />

        {!hasQueue && (
          <div className="space-y-5">
            <div className="text-base font-medium">
              Nothing in your queue yet, go discover!
            </div>

            <Button size="lg" asChild>
              <Link href="/">Discover</Link>
            </Button>
          </div>
        )}

        {hasQueue && <Songs songs={playlist} />}
      </div>
    </>
  )
}

export default SongsPage
