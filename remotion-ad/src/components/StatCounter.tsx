import { interpolate, useCurrentFrame } from "remotion";
import React from "react";
import { colors, fonts } from "./brand";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

export const StatCounter: React.FC<Props> = ({
  value,
  suffix = "",
  prefix = "",
  label,
  delay = 0,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame - delay, [0, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const displayValue = Math.floor(interpolate(progress, [0, 1], [0, value]));

  const opacity = interpolate(frame - delay, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame - delay, [0, 20], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        textAlign: "center",
        flex: 1,
      }}
    >
      <div
        style={{
          fontFamily: fonts.heading,
          fontSize: 110,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.secondaryLight})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
        }}
      >
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: 32,
          color: colors.slate400,
          marginTop: 12,
        }}
      >
        {label}
      </div>
    </div>
  );
};
