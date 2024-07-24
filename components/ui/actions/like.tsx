'use client'

import { Heart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { useMusicActions, useMusicState } from '@/store'

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

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn({ '[&>*]:fill-primary [&>*]:stroke-primary': isLiked })}
      onClick={handleClick}
      {...props}
    >
      <Heart className="size-4" />
      <span className="sr-only">{isLiked ? 'Dislike' : 'Like'}</span>
    </Button>
  )
}
