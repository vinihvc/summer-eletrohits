import { Heart, Home, ListVideo } from 'lucide-react'

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
    href: '/playlist',
    icon: ListVideo,
  },
]
