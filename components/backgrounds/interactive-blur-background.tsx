"use client";

import React from "react";
import { BlurBackground } from "./blur-background";

import { create } from "zustand";

const TRANSITION_DURATION = 1;

interface BackgroundState {
  image: string;
  setImage: (image: string) => void;
}

export const useInteractiveBlurBackgroundStore = create<BackgroundState>(
  (set) => ({
    image: "/img/albums/1.webp",
    setImage: (image) => set({ image }),
  })
);

export const InteractiveBlurBackground = () => {
  const { image } = useInteractiveBlurBackgroundStore();
  const [delayedImage, setDelayedImage] = React.useState(image);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    setIsTransitioning(true);

    const imageTimer = setTimeout(() => {
      setDelayedImage(image);
    }, TRANSITION_DURATION * 1000);

    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION * 1000 - TRANSITION_DURATION * 100);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(transitionTimer);
    };
  }, [image]);

  return (
    <BlurBackground
      src={delayedImage}
      style={{
        transition: `opacity ${TRANSITION_DURATION}s ease-in-out`,
        opacity: isTransitioning ? 0.1 : undefined,
      }}
    />
  );
};
