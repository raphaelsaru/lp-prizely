import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { GlowBlob } from "../components/GlowBlob";
import { colors, fonts } from "../components/brand";

export const Hook: React.FC = () => {
  const frame = useCurrentFrame();

  const wordPulse = interpolate(frame, [50, 70, 100, 120], [1, 1.12, 1.12, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const badgeOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}
    >
      <GlowBlob color={colors.primary} size={700} x="20%" y="30%" />
      <GlowBlob color={colors.accent} size={500} x="80%" y="70%" delay={10} />

      <div style={{ padding: "80px", textAlign: "center" }}>
        {/* Badge */}
        <div
          style={{
            opacity: badgeOpacity,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 24px",
            borderRadius: 999,
            border: `1px solid ${colors.primary}66`,
            backgroundColor: `${colors.primary}1a`,
            color: colors.primaryLight,
            fontFamily: fonts.body,
            fontSize: 28,
            marginBottom: 60,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: colors.primaryLight,
              display: "inline-block",
            }}
          />
          Especialistas em Claude · IA para empresas reais
        </div>

        {/* Headline */}
        <AnimatedText delay={10} style={{ marginBottom: 40 }}>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontSize: 88,
              fontWeight: 800,
              color: colors.white,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Você ainda perde{" "}
            <span
              style={{
                display: "inline-block",
                transform: `scale(${wordPulse})`,
                background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.secondaryLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              horas
            </span>
            <br />
            com tarefas que a IA já resolve?
          </h1>
        </AnimatedText>

        <AnimatedText delay={20} style={{ marginTop: 40 }}>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 42,
              color: colors.slate400,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Sua empresa não precisa mais
            <br />
            depender de trabalho manual.
          </p>
        </AnimatedText>
      </div>
    </AbsoluteFill>
  );
};
