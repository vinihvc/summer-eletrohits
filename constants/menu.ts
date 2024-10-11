import { AudioLines, Disc3, Home } from 'lucide-react'

export const BOTTOM_NAVIGATION = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'Songs',
    href: '/songs',
    icon: Disc3,
  },
  {
    label: 'Playlist',
    href: '/queue',
    icon: AudioLines,
  },
]
