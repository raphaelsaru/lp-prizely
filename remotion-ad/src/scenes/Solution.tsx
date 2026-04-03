import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { GlowBlob } from "../components/GlowBlob";
import { colors, fonts } from "../components/brand";

const items = [
  { icon: "💬", label: "Atendimento ao cliente" },
  { icon: "📊", label: "Relatórios internos" },
  { icon: "📧", label: "Follow-ups de vendas" },
];

const SolutionCard: React.FC<{ item: (typeof items)[0]; index: number }> = ({
  item,
  index,
}) => {
  const frame = useCurrentFrame();
  const cardDelay = 20 + index * 15;
  const tagDelay = 80 + index * 20;

  const cardProgress = interpolate(frame, [cardDelay, cardDelay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const tagProgress = interpolate(frame, [tagDelay, tagDelay + 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity: cardProgress,
        transform: `translateY(${interpolate(cardProgress, [0, 1], [30, 0])}px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "28px 40px",
        borderRadius: 20,
        backgroundColor: `${colors.slate900}cc`,
        border: `1px solid ${colors.slate700}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <span style={{ fontSize: 44 }}>{item.icon}</span>
        <span style={{ fontFamily: fonts.body, fontSize: 36, color: colors.white }}>
          {item.label}
        </span>
      </div>
      <span
        style={{
          fontFamily: fonts.body,
          fontSize: 26,
          fontWeight: 600,
          opacity: tagProgress,
          color: colors.green,
          backgroundColor: `${colors.green}1a`,
          padding: "8px 20px",
          borderRadius: 999,
        }}
      >
        ✓ Automatizado
      </span>
    </div>
  );
};

export const Solution: React.FC = () => {
  const frame = useCurrentFrame();

  const logoProgress = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const statProgress = interpolate(frame, [200, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}
    >
      <GlowBlob color={colors.primary} size={800} x="50%" y="40%" />
      <GlowBlob color={colors.accent} size={400} x="80%" y="80%" delay={5} />

      <div style={{ padding: "80px", width: "100%", textAlign: "center" }}>
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
            style={{ height: 100, objectFit: "contain" }}
          />
        </div>

        <AnimatedText delay={10} style={{ marginBottom: 16 }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontSize: 72,
              fontWeight: 800,
              background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.secondaryLight}, ${colors.accentLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            A Prizely implementa IA
            <br />
            que realmente funciona.
          </h2>
        </AnimatedText>

        <AnimatedText delay={20} style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: fonts.body, fontSize: 36, color: colors.slate400, margin: 0 }}>
            Você não precisa saber nada de tecnologia.
          </p>
        </AnimatedText>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {items.map((item, i) => (
            <SolutionCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Stat */}
        <div
          style={{
            opacity: statProgress,
            marginTop: 40,
            padding: "28px 48px",
            borderRadius: 20,
            background: `linear-gradient(135deg, ${colors.primary}33, ${colors.accent}33)`,
            border: `1px solid ${colors.primary}44`,
            display: "inline-block",
          }}
        >
          <span
            style={{ fontFamily: fonts.heading, fontSize: 64, fontWeight: 800, color: colors.white }}
          >
            -60%
          </span>
          <span
            style={{ fontFamily: fonts.body, fontSize: 30, color: colors.slate400, marginLeft: 16 }}
          >
            tempo em tarefas repetitivas
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
