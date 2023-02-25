'use client'

import { useMemo } from 'react'
import { useStore } from '@/store'
import { Heart } from 'lucide-react'

import { useDevice } from '@/hooks/use-device'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

type LikeButtonProps = {
  song: SongType
} & React.HtmlHTMLAttributes<HTMLButtonElement>

export const LikeButton = ({ song, ...props }: LikeButtonProps) => {
  const { liked, like, dislike } = useStore()

  const { isMobile } = useDevice()

  const isLiked = useMemo(() => {
    return liked?.find((item) => item.id === song.id)
  }, [liked, song])

  const handleClick = () => {
    isLiked ? dislike(song) : like(song)
  }

  const title = useMemo(() => (isLiked ? 'Like' : 'Dislike'), [isLiked])

  return (
    <Button
      className={cn(
        '',
        isMobile ? 'h-[20px]' : 'h-[30px]',
        isLiked ? 'full-white bg-white' : 'bg-red',
      )}
      title={title}
      aria-label={title}
      onClick={handleClick}
      {...props}
    >
      <Heart className="h-5 w-5" />
    </Button>
  )
}
