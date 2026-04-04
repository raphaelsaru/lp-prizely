import React from "react";
import { AbsoluteFill } from "remotion";
import { GlowBlob } from "../components/GlowBlob";
import { colors, fonts } from "../components/brand";

export interface CarouselCardProps {
  badge: string;
  headline: string;
  headlineAccent?: string; // parte do headline em destaque (gradient)
  headlineAfter?: string; // texto após o acento
  body: string;
  stat?: { value: string; label: string };
  cta?: string;
  cardNumber: number; // 1-5, varia as cores dos blobs
  variant?: "danger" | "contrast" | "proof" | "cta" | "default";
}

const BLOB_CONFIGS: Record<number, { colors: [string, string]; positions: [[string, string], [string, string]] }> = {
  1: { colors: [colors.red, colors.accent], positions: [["15%", "25%"], ["85%", "75%"]] },
  2: { colors: [colors.accent, colors.primary], positions: [["80%", "20%"], ["20%", "80%"]] },
  3: { colors: [colors.primary, colors.secondary], positions: [["20%", "30%"], ["80%", "70%"]] },
  4: { colors: [colors.green, colors.primary], positions: [["75%", "25%"], ["25%", "75%"]] },
  5: { colors: [colors.secondary, colors.accent], positions: [["30%", "20%"], ["70%", "80%"]] },
};

export const CarouselCard: React.FC<CarouselCardProps> = ({
  badge,
  headline,
  headlineAccent,
  headlineAfter,
  body,
  stat,
  cta,
  cardNumber,
  variant = "default",
}) => {
  const blobConfig = BLOB_CONFIGS[cardNumber] ?? BLOB_CONFIGS[1];

  const badgeColor =
    variant === "danger"
      ? colors.red
      : variant === "proof"
      ? colors.green
      : variant === "cta"
      ? colors.secondary
      : colors.primary;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bg,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: fonts.body,
      }}
    >
      {/* Background blobs */}
      <GlowBlob
        color={blobConfig.colors[0]}
        size={600}
        x={blobConfig.positions[0][0]}
        y={blobConfig.positions[0][1]}
      />
      <GlowBlob
        color={blobConfig.colors[1]}
        size={400}
        x={blobConfig.positions[1][0]}
        y={blobConfig.positions[1][1]}
        delay={5}
      />

      {/* Card number indicator */}
      <div
        style={{
          position: "absolute",
          top: 48,
          right: 56,
          fontFamily: fonts.body,
          fontSize: 26,
          color: colors.slate400,
          letterSpacing: 2,
        }}
      >
        {cardNumber}/5
      </div>

      {/* Prizely logo mark */}
      <div
        style={{
          position: "absolute",
          top: 48,
          left: 56,
          fontFamily: fonts.heading,
          fontSize: 30,
          fontWeight: 700,
          background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.secondaryLight})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: -0.5,
        }}
      >
        Prizely
      </div>

      {/* Content */}
      <div
        style={{
          padding: "80px 72px",
          textAlign: "center",
          maxWidth: 900,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 24px",
            borderRadius: 999,
            border: `1px solid ${badgeColor}55`,
            backgroundColor: `${badgeColor}18`,
            color: variant === "danger" ? "#fca5a5" : variant === "proof" ? "#6ee7b7" : colors.primaryLight,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 1,
            marginBottom: 52,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: badgeColor,
              display: "inline-block",
              boxShadow: `0 0 8px ${badgeColor}`,
            }}
          />
          {badge}
        </div>

        {/* Stat (optional, above headline) */}
        {stat && (
          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                fontFamily: fonts.heading,
                fontSize: 120,
                fontWeight: 900,
                lineHeight: 1,
                background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.secondaryLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: fonts.body,
                fontSize: 30,
                color: colors.slate400,
                marginTop: 8,
              }}
            >
              {stat.label}
            </div>
          </div>
        )}

        {/* Headline */}
        <h1
          style={{
            fontFamily: fonts.heading,
            fontSize: stat ? 64 : 80,
            fontWeight: 800,
            color: colors.white,
            lineHeight: 1.15,
            margin: 0,
            marginBottom: 40,
          }}
        >
          {headlineAccent ? (
            <>
              {headline}
              <span
                style={{
                  background: `linear-gradient(135deg, ${colors.primaryLight}, ${colors.secondaryLight})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {headlineAccent}
              </span>
              {headlineAfter}
            </>
          ) : (
            headline
          )}
        </h1>

        {/* Body */}
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: 36,
            color: colors.slate400,
            lineHeight: 1.6,
            margin: 0,
            marginBottom: cta ? 56 : 0,
          }}
        >
          {body}
        </p>

        {/* CTA button */}
        {cta && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "22px 52px",
              borderRadius: 999,
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              color: colors.white,
              fontFamily: fonts.heading,
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 0.5,
              boxShadow: `0 0 40px ${colors.primary}55`,
            }}
          >
            {cta}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
