'use client'

import { Button } from '@/components/ui/button'
import { useLike } from '@/hooks/use-like'
import { cn } from '@/lib/utils'

interface LikeButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  /**
   * The data to like or dislike
   */
  data: SongType
}

export const LikeButton = (props: LikeButtonProps) => {
  const { data } = props

  const { label, handleLike, LikeIcon, parentClass } = useLike(data)

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('hover:text-primary', parentClass)}
      onClick={handleLike}
      {...props}
    >
      <LikeIcon />

      <span className="sr-only">{label}</span>
    </Button>
  )
}
