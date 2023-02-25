import { HeartIcon, QueueListIcon, HomeIcon } from '@heroicons/react/24/outline'

export const BOTTOM_NAVIGATION = [
  {
    label: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    label: 'Likes',
    href: '/likes',
    icon: HeartIcon,
  },
  {
    label: 'Playlist',
    href: '/playlist',
    icon: QueueListIcon,
  },
]
