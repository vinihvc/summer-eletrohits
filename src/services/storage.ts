import localforage from 'localforage'

const FAVORITE_SONGS = '@favorite_songs'

const storage = {
  getSongs: async () => {
    const songs = await localforage.getItem<SongType[]>(FAVORITE_SONGS)

    return songs || ([] as SongType[])
  },
  setSong: async (song: SongType) => {
    const songs = await storage.getSongs()

    const findSong = songs.find((item) => item.id === song.id)

    if (findSong) return

    await localforage.setItem(FAVORITE_SONGS, [...songs, song])
  },
  removeSong: async (song: SongType) => {
    const songs = await storage.getSongs()

    const unremovedSongs = songs.filter((item) => item.id !== song.id)

    await localforage.setItem(FAVORITE_SONGS, unremovedSongs)
  },
  clearSongs: async () => {
    await localforage.removeItem(FAVORITE_SONGS)
  }
}

export default storage
