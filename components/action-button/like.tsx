'use client'

import { useMemo } from 'react'

import { HeartIcon } from '@heroicons/react/24/solid'

import { useStore } from '@/store'

import { Button } from '@/components/ui/button'

import { useDevice } from '@/hooks/use-device'
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
        isLiked ? 'bg-white full-white' : 'bg-red',
      )}
      title={title}
      aria-label={title}
      onClick={handleClick}
      {...props}
    >
      <HeartIcon className="w-5 h-5" />
    </Button>
  )
}
