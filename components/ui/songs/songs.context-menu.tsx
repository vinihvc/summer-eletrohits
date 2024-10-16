import { SongsTypeMenu } from './songs.type-menu'

interface SongsContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Song data
   */
  data: SongType
}

const SongsContextMenu = (props: SongsContextMenuProps) => {
  const { data, children } = props

  return (
    <SongsTypeMenu data={data} type="context-menu">
      {children}
    </SongsTypeMenu>
  )
}

export default SongsContextMenu
