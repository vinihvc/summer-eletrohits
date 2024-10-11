"use client";

import { useMusicActions } from "@/contexts/app.context";
import { cn } from "@/lib/utils";
import { LikeButton } from "./actions/like";
import { PlayButton } from "./actions/play";
import { BlurImage } from "./blur-image";

interface SongsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * List of songs
   */
  songs: SongType[];
}

export const Songs = (props: SongsProps) => {
  const { songs, className, ...rest } = props;

  const { currentSong } = useMusicActions();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border/60 black:border-border/20 animate-in fade-in slide-in-from-bottom-2 divide-y divide-border/60",
        className
      )}
      {...rest}
    >
      {songs?.map((song, index) => {
        const currentIndex = index + 1;

        const isCurrentSong = currentSong?.()?.id === song.id;

        return (
          <div
            key={song.id}
            className="transition even:bg-background/10 odd:bg-background/30 hover:bg-foreground/5"
          >
            <div
              className={cn(
                "group flex items-center gap-3 p-2.5 md:gap-5 px-2 sm:px-5 text-sm",
                isCurrentSong && "bg-background/40",
                className
              )}
              {...rest}
            >
              <div className="w-10 flex items-center justify-center shrink-0">
                <div
                  className={cn("max-sm:!hidden group-hover:hidden", {
                    hidden: isCurrentSong,
                  })}
                >
                  {currentIndex}
                </div>

                <div
                  className={cn("max-sm:!block group-hover:block", {
                    hidden: !isCurrentSong,
                  })}
                >
                  <PlayButton songs={songs} index={index} />
                </div>
              </div>

              <div className="max-sm:hidden overflow-hidden rounded-lg shrink-0">
                <BlurImage
                  width={40}
                  height={40}
                  className="size-10 aspect-square scale-150"
                  src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
                  alt={song?.name}
                />
              </div>

              <div className="flex flex-col sm:flex-row flex-1">
                <div className="flex-1 line-clamp-1 font-medium">
                  {song.name}
                </div>

                <div className="w-full max-sm:text-muted-foreground sm:max-w-[30%] line-clamp-1">
                  {song.singer}
                </div>
              </div>

              <div>
                <LikeButton song={song} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
