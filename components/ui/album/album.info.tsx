"use client";

import { Pause, Play, Shuffle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  useMusicActions,
  usePlayerActions,
  usePlayerState,
} from "@/contexts/app.context";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AlbumInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Album data
   */
  album: AlbumType;
}

export const AlbumInfo = (props: AlbumInfoProps) => {
  const { album, className, ...rest } = props;

  const { play, playRandom, togglePlay } = usePlayerActions();
  const { currentSong } = useMusicActions();
  const { isPlaying } = usePlayerState();

  const hasSongInAlbum = album.songs?.some(
    (song) => song.id === currentSong?.()?.id
  );

  const handlePlay = () => {
    if (hasSongInAlbum) {
      togglePlay();
    } else {
      album.songs && play?.(album.songs, 0);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-5 sm:flex-row sm:gap-10",
        className
      )}
      {...rest}
    >
      <Image
        src={album.thumb}
        alt={album.name}
        width={150}
        height={150}
        className="relative size-36 justify-center rounded-xl sm:size-48 sm:justify-start drop-shadow"
      />

      <div className="relative max-sm:text-center">
        <span className="text-xs font-medium uppercase text-muted-foreground">
          Album
        </span>

        <h2 className="text-lg font-bold sm:text-xl">{album.name}</h2>

        {album.songs?.length !== 0 && (
          <div className="text-sm">{`${album.songs?.length ?? 0} tracks`}</div>
        )}

        {album.songs?.length !== 0 && (
          <div className="flex gap-4 mt-4">
            <Button size="lg" onClick={handlePlay}>
              {hasSongInAlbum && isPlaying ? (
                <Pause className="size-4" />
              ) : (
                <Play className="size-4" />
              )}

              <span>{hasSongInAlbum && isPlaying ? "Pause" : "Play"}</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => album.songs && playRandom(album.songs)}
            >
              <Shuffle className="size-4" />
              <span>Shuffle</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
