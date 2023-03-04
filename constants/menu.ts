import { Heart, Home, ListVideo, User } from 'lucide-react'

export const BOTTOM_NAVIGATION = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'Likes',
    href: '/likes',
    icon: Heart,
  },
  {
    label: 'Playlist',
    href: '/queue',
    icon: ListVideo,
  },

  {
    label: 'Profile',
    href: '/profile',
    icon: User,
  },
]
