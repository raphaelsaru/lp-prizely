import { AbsoluteFill } from "remotion";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { GlowBlob } from "../components/GlowBlob";
import { StatCounter } from "../components/StatCounter";
import { colors, fonts } from "../components/brand";

export const SocialProof: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    >
      <GlowBlob color={colors.secondary} size={600} x="20%" y="50%" />
      <GlowBlob color={colors.primary} size={500} x="80%" y="50%" delay={8} />

      <div style={{ padding: "80px", width: "100%", textAlign: "center" }}>
        <AnimatedText delay={0} style={{ marginBottom: 80 }}>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 52,
              color: colors.slate400,
              margin: 0,
              fontWeight: 600,
            }}
          >
            Resultados reais. Empresas reais.
          </p>
        </AnimatedText>

        <div style={{ display: "flex", gap: 0, marginBottom: 80 }}>
          <StatCounter value={50} suffix="+" label="Empresas atendidas" delay={10} />
          <StatCounter value={320} suffix="%" label="ROI médio" delay={30} />
          <StatCounter value={24} suffix="h" label="Retorno garantido" delay={50} />
        </div>

        <AnimatedText delay={60}>
          <div
            style={{
              display: "inline-flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["🔒 Dados protegidos", "✅ Sem compromisso", "⚡ Resposta em até 24h"].map(
              (badge) => (
                <div
                  key={badge}
                  style={{
                    padding: "14px 28px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    fontFamily: fonts.body,
                    fontSize: 28,
                    color: colors.slate400,
                  }}
                >
                  {badge}
                </div>
              )
            )}
          </div>
        </AnimatedText>
      </div>
    </AbsoluteFill>
  );
};
