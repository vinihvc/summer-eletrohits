import { FiHeart } from 'react-icons/fi'

import { chakra, IconButton } from '@chakra-ui/react'

import { usePlayer } from 'contexts/player'

import { useDevice } from 'hooks/use-device'

type FavoriteButtonProps = {
  song: SongType
}

export const FavoriteButton = chakra(
  ({ song, ...props }: FavoriteButtonProps) => {
    const { favoriteSongs, handleFavoriteSong, handleUnfavoriteSong } =
      usePlayer()

    const { isMobile } = useDevice()

    const isFavorited = favoriteSongs?.find((item) => item.id === song.id)

    const handleClick = () => {
      isFavorited ? handleUnfavoriteSong(song) : handleFavoriteSong(song)
    }

    return (
      <IconButton
        icon={<FiHeart />}
        variant={isFavorited ? 'solid' : 'ghost'}
        aria-label={`${isFavorited ? 'Favorite' : 'Unfavorite'} song`}
        borderRadius="full"
        size={isMobile ? 'sm' : 'md'}
        onClick={handleClick}
        sx={
          isFavorited && {
            '>svg': {
              fill: '#fff'
            }
          }
        }
        {...props}
      />
    )
  }
)
