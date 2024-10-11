import { BottomNavigation } from "@/components/layout/bottom-navigation";

import "@/styles/global.css";

import type { Metadata } from "next";

import { MediaQuery } from "@/components/debug/media-query";

import GridPattern from "@/components/backgrounds/grid-pattern";
import { InteractiveBlurBackground } from "@/components/backgrounds/interactive-blur-background";
import { RainbowLine } from "@/components/backgrounds/rainbow-line";
import { Header } from "@/components/layout/header";
import { Player } from "@/components/player";
import { SEO } from "@/constants/seo";
import { fontSans } from "@/lib/font";
import { cn } from "@/lib/utils";
import type React from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: { default: SEO.title, template: `%s | ${SEO.title}` },
  applicationName: SEO.title,
  keywords: SEO.keywords,
  openGraph: {
    title: SEO.title,
    siteName: SEO.title,
    type: "website",
    url: SEO.url,
    images: [
      {
        url: "/img/logo.jpg",
        width: 800,
        height: 600,
        alt: "Eletrohits cover",
      },
    ],
  },
  twitter: {
    creator: SEO.twitter,
    card: "summary_large_image",
  },
};

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable)}>
        <Providers>
          <Header />

          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={
              // "[mask-image:linear-gradient(to_top,transparent,black_75%)]"
              "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            }
          />

          <main>{children}</main>

          <RainbowLine />

          <InteractiveBlurBackground />

          <Player />

          <BottomNavigation />

          <MediaQuery />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
