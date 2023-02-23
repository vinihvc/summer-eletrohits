'use client'

import { Flex } from '@chakra-ui/react'

import { AlbumInfo } from 'components/album/album.info'
import { BackAlbums } from 'components/back-albums'
import { CustomBg } from 'components/custom-bg'
import { SongList } from 'components/song/song.list'

type ClientAlbumPageProps = {
  album: AlbumType
}

export const ClientAlbumPage = ({ album }: ClientAlbumPageProps) => {
  return (
    <>
      <CustomBg image={album.thumb} />

      <Flex justify={{ base: 'center', md: 'initial' }}>
        <BackAlbums />
      </Flex>

      <AlbumInfo album={album} mt={5} />

      {album.songs && <SongList songs={album.songs} mt={10} />}
    </>
  )
}
