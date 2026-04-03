import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { GlowBlob } from "../components/GlowBlob";
import { colors, fonts } from "../components/brand";

const problems = [
  { icon: "💬", label: "Atendimento ao cliente", tag: "Ainda manual" },
  { icon: "📊", label: "Relatórios internos", tag: "Ainda manual" },
  { icon: "📧", label: "Follow-ups de vendas", tag: "Ainda manual" },
];

const ProblemCard: React.FC<{ item: (typeof problems)[0]; index: number }> = ({
  item,
  index,
}) => {
  const frame = useCurrentFrame();
  const delay = index * 15;

  const progress = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const shake = frame > 180 ? Math.sin((frame - 180) * 0.8) * 4 : 0;

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${interpolate(progress, [0, 1], [40, 0])}px) translateX(${shake}px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "32px 40px",
        borderRadius: 20,
        backgroundColor: `${colors.slate900}cc`,
        border: `1px solid ${colors.slate700}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <span style={{ fontSize: 48 }}>{item.icon}</span>
        <span style={{ fontFamily: fonts.body, fontSize: 38, color: colors.white }}>
          {item.label}
        </span>
      </div>
      <span
        style={{
          fontFamily: fonts.body,
          fontSize: 28,
          fontWeight: 600,
          color: colors.red,
          backgroundColor: `${colors.red}1a`,
          padding: "8px 20px",
          borderRadius: 999,
        }}
      >
        {item.tag}
      </span>
    </div>
  );
};

export const Problem: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}
    >
      <GlowBlob color={colors.red} size={500} x="50%" y="30%" />

      <div style={{ padding: "80px", width: "100%" }}>
        <AnimatedText delay={0} style={{ marginBottom: 60, textAlign: "center" }}>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 44,
              color: colors.slate400,
              margin: 0,
              fontWeight: 600,
            }}
          >
            Reconhece isso na sua empresa?
          </p>
        </AnimatedText>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {problems.map((item, i) => (
            <ProblemCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
