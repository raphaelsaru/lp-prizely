import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { GlowBlob } from "../components/GlowBlob";
import { colors, fonts } from "../components/brand";

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const logoProgress = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pulse = 1 + Math.sin(frame * 0.15) * 0.02;

  return (
    <AbsoluteFill
      style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}
    >
      <GlowBlob color={colors.primary} size={900} x="50%" y="50%" />
      <GlowBlob color={colors.accent} size={500} x="20%" y="70%" delay={5} />

      <div style={{ padding: "80px", textAlign: "center", width: "100%" }}>
        {/* Logo */}
        <div
          style={{
            opacity: logoProgress,
            transform: `scale(${interpolate(logoProgress, [0, 1], [0.8, 1])})`,
            marginBottom: 48,
          }}
        >
          <Img
            src={staticFile("logo-prizely.png")}
            style={{ height: 90, objectFit: "contain" }}
          />
        </div>

        <AnimatedText delay={10} style={{ marginBottom: 24 }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontSize: 80,
              fontWeight: 800,
              color: colors.white,
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Receba seu plano de
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.secondaryLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              automação gratuito
            </span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={20} style={{ marginBottom: 60 }}>
          <p style={{ fontFamily: fonts.body, fontSize: 38, color: colors.slate400, margin: 0 }}>
            Leva menos de 3 minutos.
            <br />
            Resposta em até 24h.
          </p>
        </AnimatedText>

        {/* CTA Button */}
        <AnimatedText delay={30}>
          <div
            style={{
              display: "inline-block",
              transform: `scale(${pulse})`,
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
              borderRadius: 20,
              padding: "36px 72px",
              boxShadow: `0 0 60px ${colors.primary}66`,
            }}
          >
            <span
              style={{
                fontFamily: fonts.heading,
                fontSize: 44,
                fontWeight: 700,
                color: colors.white,
              }}
            >
              Quero meu diagnóstico gratuito →
            </span>
          </div>
        </AnimatedText>
      </div>
    </AbsoluteFill>
  );
};
