import { AudioLines, Disc3, PartyPopper } from 'lucide-react'

export const HEADER_NAV_LINKS = [
  {
    href: '/party',
    label: 'Party',
    icon: PartyPopper,
  },
  {
    href: '/queue',
    label: 'Playing',
    icon: AudioLines,
  },
  {
    href: '/likes',
    label: 'Likes',
    icon: Disc3,
  },
]
