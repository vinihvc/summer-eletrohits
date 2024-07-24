'use client'

import { Heart } from 'lucide-react'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { useMusicActions, useMusicState } from '@/contexts/music'
import { cn } from '@/lib/cn'

interface LikeButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  /**
   * The song to like or dislike
   */
  song: SongType
}

export const LikeButton = ({ song, ...props }: LikeButtonProps) => {
  const { liked } = useMusicState()
  const { like, dislike } = useMusicActions()

  const isLiked = liked?.find((item) => item.id === song.id)

  const handleClick = () => {
    isLiked ? dislike(song) : like(song)
  }

  const title = useMemo(() => (isLiked ? 'Like' : 'Dislike'), [isLiked])

  return (
    <Button
      variant="ghost"
      className={cn(
        'size-6 p-0 sm:h-8 sm:w-8',
        isLiked && '[&>*]:fill-red-500 [&>*]:stroke-red-500',
      )}
      title={title}
      aria-label={title}
      onClick={handleClick}
      {...props}
    >
      <Heart size={16} />
    </Button>
  )
}
