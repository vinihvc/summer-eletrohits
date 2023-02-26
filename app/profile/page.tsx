import Image from 'next/image'

const PlaylistPage = () => {
  return (
    <div className="flex flex-1 flex-col space-y-10">
      <div className="flex items-center space-x-5">
        <div>
          <Image
            src={`https://api.dicebear.com/5.x/fun-emoji/svg?seed=${Math.random()
              .toString(36)
              .substring(2, 15)}`}
            width={100}
            height={100}
            className="aspect-square rounded-full"
            alt="Profile pic"
          />
        </div>

        <div>
          <p className="text-xl font-bold">Vinicius Vicentini</p>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-4">
          <div className="text-xl font-semibold">Playlists</div>

          <div></div>
        </div>

        <div className="text-xl font-semibold">
          <div className="text-xl font-semibold">Musics</div>

          <div></div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistPage
