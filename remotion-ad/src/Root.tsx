import React from "react";
import { Composition } from "remotion";
import { MetaAd } from "./MetaAd";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MetaAd-9x16"
        component={MetaAd}
        durationInFrames={1350}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="MetaAd-3x4"
        component={MetaAd}
        durationInFrames={1350}
        fps={30}
        width={1080}
        height={1440}
      />
      <Composition
        id="MetaAd-1x1"
        component={MetaAd}
        durationInFrames={1350}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="MetaAd-16x9"
        component={MetaAd}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
