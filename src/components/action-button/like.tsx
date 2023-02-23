import { useMemo } from 'react'

import { chakra, IconButton } from '@chakra-ui/react'

import { FiHeart } from 'react-icons/fi'

import { useStore } from '@/store'

import { useDevice } from '@/hooks/use-device'

type LikeButtonProps = {
  song: SongType
}

export const LikeButton = chakra(({ song, ...props }: LikeButtonProps) => {
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
    <IconButton
      icon={<FiHeart />}
      variant={isLiked ? 'solid' : 'ghost'}
      title={title}
      aria-label={title}
      size={isMobile ? 'sm' : 'md'}
      onClick={handleClick}
      sx={
        isLiked && {
          '> svg': {
            fill: 'white'
          }
        }
      }
      {...props}
    />
  )
})
