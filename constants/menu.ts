import { Home, ListVideo, Music } from 'lucide-react'

export const BOTTOM_NAVIGATION = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'Library',
    href: '/library',
    icon: Music,
  },
  {
    label: 'Playlist',
    href: '/queue',
    icon: ListVideo,
  },
]
