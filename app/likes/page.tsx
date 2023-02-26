'use client'

import Link from 'next/link'

import { useStore } from '@/store'
import { Play } from 'lucide-react'

import { SongList } from '@/components/song/song.list'
import { Button } from '@/components/ui/button'

const LikesPage = () => {
  const { liked, play } = useStore()

  return (
    <>
      {liked.length === 0 ? (
        <div>
          <div className="my-5">No favorite yet.</div>

          <Link href="/">
            <Button>Discover</Button>
          </Link>
        </div>
      ) : (
        <Button className="my-5" onClick={() => play(liked)}>
          <Play size={20} />
          Play
        </Button>
      )}

      {liked.length > 0 && <SongList className="mt-10" songs={liked} />}
    </>
  )
}

export default LikesPage
