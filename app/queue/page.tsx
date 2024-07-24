'use client'

import Link from 'next/link'

import { Songs } from '@/components/songs'
import { buttonVariants } from '@/components/ui/button'
import { useMusicState } from '@/store'

const SongsPage = () => {
  const { playlist } = useMusicState()

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-bold">Queue</h2>

      {playlist.length === 0 && (
        <>
          <p>Nothing in queue yet, go discover!</p>

          <Link href="/" className={buttonVariants()}>
            Discover
          </Link>
        </>
      )}

      {playlist.length > 0 && <Songs songs={playlist} />}
    </div>
  )
}

export default SongsPage
