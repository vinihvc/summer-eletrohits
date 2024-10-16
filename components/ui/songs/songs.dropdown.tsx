'use client'

import { EllipsisVertical } from 'lucide-react'
import { Button } from '../button'

import { SongsTypeMenu } from './songs.type-menu'

interface SongsDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Song data
   */
  data: SongType
}

const SongsDropdown = (props: SongsDropdownProps) => {
  const { data } = props

  return (
    <SongsTypeMenu data={data} type="dropdown">
      <Button variant="ghost" size="icon">
        <EllipsisVertical className="size-5 text-muted-foreground" />
      </Button>
    </SongsTypeMenu>
  )
}

export default SongsDropdown
