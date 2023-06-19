'use client'

import { useMemo } from 'react'
import { useStore } from '@/store'
import { Heart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

type LikeButtonProps = {
  song: SongType
} & React.HtmlHTMLAttributes<HTMLButtonElement>

export const LikeButton = ({ song, ...props }: LikeButtonProps) => {
  const { liked, like, dislike } = useStore()

  const isLiked = liked?.find((item) => item.id === song.id)

  const handleClick = () => {
    isLiked ? dislike(song) : like(song)
  }

  const title = useMemo(() => (isLiked ? 'Like' : 'Dislike'), [isLiked])

  return (
    <Button
      variant="ghost"
      className={cn(
        'h-6 w-6 p-0 sm:h-8 sm:w-8',
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
