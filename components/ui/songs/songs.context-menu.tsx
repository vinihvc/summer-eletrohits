import type { SongType } from '@/types/song'
import { useSong } from './songs.store'
import { SongsTypeMenu } from './songs.type-menu'

interface SongsContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Song data
   */
  data: SongType
}

const SongsContextMenu = (props: SongsContextMenuProps) => {
  const { data, children } = props

  const { isContextOpen, onChangeContext } = useSong()

  return (
    <SongsTypeMenu
      type="context-menu"
      data={data}
      open={isContextOpen}
      onOpenChange={onChangeContext}
    >
      {children}
    </SongsTypeMenu>
  )
}

export default SongsContextMenu
