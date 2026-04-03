import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Hook } from "./scenes/Hook";
import { Problem } from "./scenes/Problem";
import { Solution } from "./scenes/Solution";
import { SocialProof } from "./scenes/SocialProof";
import { CTA } from "./scenes/CTA";

export const MetaAd: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#020617" }}>
      <Sequence from={0} durationInFrames={240}>
        <Hook />
      </Sequence>
      <Sequence from={240} durationInFrames={240}>
        <Problem />
      </Sequence>
      <Sequence from={480} durationInFrames={360}>
        <Solution />
      </Sequence>
      <Sequence from={840} durationInFrames={300}>
        <SocialProof />
      </Sequence>
      <Sequence from={1140} durationInFrames={210}>
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
