"use client";

import { Pause, Play } from "lucide-react";
import { useCallback, useMemo } from "react";

import { Button } from "@/components/ui/button";
import {
  useMusicActions,
  usePlayerActions,
  usePlayerState,
} from "@/contexts/app.context";
import { cn } from "@/lib/utils";

interface PlayButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * List of songs
   */
  songs: SongType[];
  /**
   * Index of the song
   */
  index: number;
}

export const PlayButton = (props: PlayButtonProps) => {
  const { songs, index, className, ...rest } = props;

  const { isPlaying } = usePlayerState();
  const { togglePlay, play } = usePlayerActions();
  const { currentSong } = useMusicActions();

  const song = useMemo(() => songs[index], [songs, index]);

  const isSameSong = currentSong?.()?.id === song.id;

  const handleClick = useCallback(() => {
    if (isPlaying && isSameSong) {
      togglePlay();
    } else {
      play?.(songs, index);
    }
  }, [isPlaying, isSameSong, togglePlay, play, songs, index]);

  return (
    <Button
      size="icon"
      className={cn("[&>svg]:fill-current", className)}
      onClick={handleClick}
      {...rest}
    >
      {isSameSong && isPlaying ? (
        <Pause className="size-4" />
      ) : (
        <Play className="size-4" />
      )}

      <span className="sr-only">
        {isSameSong && isPlaying ? "Pause" : "Play"}
      </span>
    </Button>
  );
};
