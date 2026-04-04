import React from "react";
import { Composition, Still } from "remotion";
import { MetaAd } from "./MetaAd";
import { Card1 } from "./carousel/Card1";
import { Card2 } from "./carousel/Card2";
import { Card3 } from "./carousel/Card3";
import { Card4 } from "./carousel/Card4";
import { Card5 } from "./carousel/Card5";

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
      {/* Carousel 1x1 cards */}
      <Still id="Carousel-Card1" component={Card1} width={1080} height={1080} />
      <Still id="Carousel-Card2" component={Card2} width={1080} height={1080} />
      <Still id="Carousel-Card3" component={Card3} width={1080} height={1080} />
      <Still id="Carousel-Card4" component={Card4} width={1080} height={1080} />
      <Still id="Carousel-Card5" component={Card5} width={1080} height={1080} />
    </>
  );
};
