import localforage from 'localforage'

const LIKED_SONGS = '@LIKED_SONGS'

export const getSongs = async () => {
  const songs = await localforage.getItem<SongType[]>(LIKED_SONGS)

  return songs || ([] as SongType[])
}

export const setSong = async (song: SongType) => {
  const songs = await getSongs()

  const findSong = songs.find((item) => item.id === song.id)

  if (findSong) return

  await localforage.setItem(LIKED_SONGS, [...songs, song])
}

export const removeSong = async (song: SongType) => {
  const songs = await getSongs()

  const unremovedSongs = songs.filter((item) => item.id !== song.id)

  await localforage.setItem(LIKED_SONGS, unremovedSongs)
}

export * as storage from './storage'
