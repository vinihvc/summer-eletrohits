import { Volume2, VolumeX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { usePlayerActions, usePlayerState } from "@/contexts/app.context";

export const VolumeButton = ({ ...props }) => {
  const { volume } = usePlayerState();
  const { toggleVolume } = usePlayerActions();

  return (
    <Button
      variant={volume ? "ghost" : "solid"}
      size="icon"
      onClick={toggleVolume}
      {...props}
    >
      {volume ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}

      <span className="sr-only">{volume ? "Mute" : "Unmute"}</span>
    </Button>
  );
};
