import { usePlayer } from 'contexts/PlayerContext'
import useDevice from 'hooks/use-device'

import { FiHeart } from 'react-icons/fi'

import { chakra } from '@chakra-ui/system'
import { IconButton } from '@chakra-ui/button'

type FavoriteButtonProps = {
  song: SongType
}

const FavoriteButton = ({ song, ...props }: FavoriteButtonProps) => {
  const { favoriteSongs, handleFavoriteSong, handleUnfavoriteSong } =
    usePlayer()

  const { isMobile } = useDevice()

  const isFavorited = favoriteSongs?.find((item) => item.id === song.id)

  function handleClick() {
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

export default chakra(FavoriteButton)
