import { interpolate, useCurrentFrame } from "remotion";
import React from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  direction?: "up" | "down" | "fade";
}

export const AnimatedText: React.FC<Props> = ({
  children,
  delay = 0,
  style,
  direction = "up",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame - delay, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY =
    direction === "up"
      ? interpolate(progress, [0, 1], [30, 0])
      : direction === "down"
      ? interpolate(progress, [0, 1], [-30, 0])
      : 0;

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
