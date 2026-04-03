import { useCurrentFrame } from "remotion";
import React from "react";

interface Props {
  color: string;
  size: number;
  x: string;
  y: string;
  delay?: number;
}

export const GlowBlob: React.FC<Props> = ({ color, size, x, y, delay = 0 }) => {
  const frame = useCurrentFrame();
  const pulse = Math.sin((frame - delay) * 0.02) * 0.3 + 0.7;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        opacity: 0.08 * pulse,
        filter: "blur(120px)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    />
  );
};
