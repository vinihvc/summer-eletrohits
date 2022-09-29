import { FiHeart } from 'react-icons/fi'
import { RiPlayList2Fill } from 'react-icons/ri'
import { BsHouseDoor } from 'react-icons/bs'

export const BOTTOM_NAVIGATION = [
  {
    label: 'Home',
    href: '/',
    icon: BsHouseDoor
  },
  {
    label: 'Likes',
    href: '/likes',
    icon: FiHeart
  },
  {
    label: 'Playlist',
    href: '/playlist',
    icon: RiPlayList2Fill
  }
]
