"use client";

import { NextButton } from "@/components/ui/actions/next";
import { PlayButton } from "@/components/ui/actions/play";
import { PrevButton } from "@/components/ui/actions/prev";
import { useMusicState } from "@/contexts/app.context";

export const PlayerActions = () => {
  const { playlist, currentIndex } = useMusicState();

  return (
    <>
      <PrevButton />

      <PlayButton songs={playlist} index={currentIndex} />

      <NextButton />
    </>
  );
};
