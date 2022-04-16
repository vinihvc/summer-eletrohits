import { useMemo } from 'react'

import { chakra, IconButton } from '@chakra-ui/react'

import { FiHeart } from 'react-icons/fi'

import { useStore } from 'store'

import { useDevice } from 'hooks/use-device'

type LikeButtonProps = {
  song: SongType
}

export const LikeButton = chakra(({ song, ...props }: LikeButtonProps) => {
  const { liked, like, deslike } = useStore()

  const { isMobile } = useDevice()

  const isLiked = useMemo(() => {
    return liked?.find((item) => item.id === song.id)
  }, [liked, song])

  const handleClick = () => {
    isLiked ? deslike(song) : like(song)
  }

  return (
    <IconButton
      icon={<FiHeart />}
      variant={isLiked ? 'solid' : 'ghost'}
      aria-label={`${isLiked ? 'Like' : 'Deslike'} song`}
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
