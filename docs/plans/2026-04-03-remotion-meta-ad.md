# Remotion Meta Ad — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a 45-second Meta Ads video (9:16 and 3:4) with Prizely's brand identity that drives viewers to fill out the free diagnosis form.

**Architecture:** Standalone Remotion project at `/remotion-ad/` inside the repo. Two compositions (9:16 and 3:4) share the same 5 scene components. Brand assets (logo, colors) copied from the main site. No audio. No URL displayed in video.

**Tech Stack:** Remotion 4.x, React, TypeScript (inline styles — no Tailwind)

---

## Brand Reference

- **Colors:** Primary `#4338ca` (indigo), Secondary `#0284c7` (sky), Accent `#7c3aed` (violet)
- **BG:** `#020617` (slate-950)
- **Fonts:** Poppins (headings), Inter (body) — load via `@remotion/google-fonts`
- **Logo:** `../src/assets/logo-prizely.png` (copy to `remotion-ad/public/logo-prizely.png`)
- **Dimensions:** 1080×1920 (9:16) + 1080×1440 (3:4) @ 30fps
- **Duration:** 45s = 1350 frames

## Scene Timing

| Scene | Start | End | Frames |
|-------|-------|-----|--------|
| Hook | 0s | 8s | 0–240 |
| Problem | 8s | 16s | 240–480 |
| Solution | 16s | 28s | 480–840 |
| SocialProof | 28s | 38s | 840–1140 |
| CTA | 38s | 45s | 1140–1350 |

---

## Task 1: Bootstrap Remotion project

**Files:**
- Create: `remotion-ad/` (via CLI)

**Step 1: Run create-video**

```bash
cd /Users/charbellelopes/ag-prizely
npx create-video@latest remotion-ad --blank --yes
```

**Step 2: Install dependencies**

```bash
cd remotion-ad
npm install
npm install @remotion/google-fonts
```

**Step 3: Copy logo asset**

```bash
cp ../src/assets/logo-prizely.png public/logo-prizely.png
```

**Step 4: Verify dev server starts**

```bash
npm run dev
# Should open browser at localhost:3000 with blank canvas
# Ctrl+C after verifying
```

**Step 5: Commit**

```bash
cd ..
git add remotion-ad/
git commit -m "feat: bootstrap remotion ad project"
```

---

## Task 2: Setup composition root

**Files:**
- Modify: `remotion-ad/src/Root.tsx`
- Create: `remotion-ad/src/MetaAd.tsx`

**Step 1: Update Root.tsx**

Replace content of `remotion-ad/src/Root.tsx`:

```tsx
import { Composition } from "remotion";
import { MetaAd } from "./MetaAd";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MetaAd-9x16"
        component={MetaAd}
        durationInFrames={1350}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="MetaAd-3x4"
        component={MetaAd}
        durationInFrames={1350}
        fps={30}
        width={1080}
        height={1440}
      />
    </>
  );
};
```

**Step 2: Create MetaAd.tsx**

```tsx
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
```

**Step 3: Create scenes directory**

```bash
mkdir -p remotion-ad/src/scenes
```

**Step 4: Commit**

```bash
git add remotion-ad/src/
git commit -m "feat: setup remotion composition root"
```

---

## Task 3: Shared components

**Files:**
- Create: `remotion-ad/src/components/AnimatedText.tsx`
- Create: `remotion-ad/src/components/GlowBlob.tsx`
- Create: `remotion-ad/src/components/brand.ts`

**Step 1: Create brand.ts**

```ts
// remotion-ad/src/components/brand.ts
export const colors = {
  bg: "#020617",
  primary: "#4338ca",
  primaryLight: "#818cf8",
  secondary: "#0284c7",
  secondaryLight: "#38bdf8",
  accent: "#7c3aed",
  accentLight: "#a78bfa",
  white: "#ffffff",
  slate400: "#94a3b8",
  slate700: "#334155",
  slate900: "#0f172a",
  green: "#10b981",
  red: "#ef4444",
} as const;

export const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Inter', sans-serif",
} as const;
```

**Step 2: Create AnimatedText.tsx**

```tsx
// remotion-ad/src/components/AnimatedText.tsx
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
```

**Step 3: Create GlowBlob.tsx**

```tsx
// remotion-ad/src/components/GlowBlob.tsx
import { interpolate, useCurrentFrame } from "remotion";
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
      }}
    />
  );
};
```

**Step 4: Commit**

```bash
git add remotion-ad/src/components/
git commit -m "feat: add remotion shared brand components"
```

---

## Task 4: Hook scene (0–8s)

**Files:**
- Create: `remotion-ad/src/scenes/Hook.tsx`

**Step 1: Create Hook.tsx**

```tsx
// remotion-ad/src/scenes/Hook.tsx
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { GlowBlob } from "../components/GlowBlob";
import { colors, fonts } from "../components/brand";

export const Hook: React.FC = () => {
  const frame = useCurrentFrame();

  // "horas" word pulse: peaks at frame 60-90
  const wordPulse = interpolate(frame, [50, 70, 100, 120], [1, 1.12, 1.12, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Badge fade in
  const badgeOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}>
      {/* Glow blobs */}
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

        {/* Main headline */}
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
            Sua empresa não precisa mais depender de trabalho manual.
          </p>
        </AnimatedText>
      </div>
    </AbsoluteFill>
  );
};
```

**Step 2: Verify in dev server**

```bash
cd remotion-ad && npm run dev
# Navigate to frame 0–240, check Hook renders correctly
```

**Step 3: Commit**

```bash
git add remotion-ad/src/scenes/Hook.tsx
git commit -m "feat: add hook scene to remotion ad"
```

---

## Task 5: Problem scene (8–16s)

**Files:**
- Create: `remotion-ad/src/scenes/Problem.tsx`

**Step 1: Create Problem.tsx**

```tsx
// remotion-ad/src/scenes/Problem.tsx
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

const ProblemCard: React.FC<{ item: typeof problems[0]; index: number }> = ({ item, index }) => {
  const frame = useCurrentFrame();
  const delay = index * 15;

  const progress = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shake at the end
  const shake = frame > 180
    ? Math.sin((frame - 180) * 0.8) * 4
    : 0;

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
        backdropFilter: "blur(12px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <span style={{ fontSize: 48 }}>{item.icon}</span>
        <span style={{ fontFamily: fonts.body, fontSize: 38, color: colors.white }}>{item.label}</span>
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
    <AbsoluteFill style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}>
      <GlowBlob color={colors.red} size={500} x="50%" y="30%" />

      <div style={{ padding: "80px", width: "100%" }}>
        <AnimatedText delay={0} style={{ marginBottom: 60, textAlign: "center" }}>
          <p style={{ fontFamily: fonts.heading, fontSize: 44, color: colors.slate400, margin: 0, fontWeight: 600 }}>
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
```

**Step 2: Commit**

```bash
git add remotion-ad/src/scenes/Problem.tsx
git commit -m "feat: add problem scene to remotion ad"
```

---

## Task 6: Solution scene (16–28s)

**Files:**
- Create: `remotion-ad/src/scenes/Solution.tsx`

**Step 1: Create Solution.tsx**

```tsx
// remotion-ad/src/scenes/Solution.tsx
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

const SolutionCard: React.FC<{ item: typeof items[0]; index: number }> = ({ item, index }) => {
  const frame = useCurrentFrame();
  // Logo appears at ~frame 40, cards transform after frame 80
  const delay = 80 + index * 20;

  const tagProgress = interpolate(frame, [delay, delay + 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardProgress = interpolate(frame, [20 + index * 15, 40 + index * 15], [0, 1], {
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
        <span style={{ fontFamily: fonts.body, fontSize: 36, color: colors.white }}>{item.label}</span>
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
    <AbsoluteFill style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}>
      <GlowBlob color={colors.primary} size={800} x="50%" y="40%" />
      <GlowBlob color={colors.accent} size={400} x="80%" y="80%" delay={5} />

      <div style={{ padding: "80px", width: "100%", textAlign: "center" }}>
        {/* Logo */}
        <div style={{ opacity: logoProgress, transform: `scale(${interpolate(logoProgress, [0, 1], [0.8, 1])})`, marginBottom: 48 }}>
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

        {/* Progress stat */}
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
          <span style={{ fontFamily: fonts.heading, fontSize: 64, fontWeight: 800, color: colors.white }}>
            -60%
          </span>
          <span style={{ fontFamily: fonts.body, fontSize: 30, color: colors.slate400, marginLeft: 16 }}>
            tempo em tarefas repetitivas
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

**Step 2: Commit**

```bash
git add remotion-ad/src/scenes/Solution.tsx
git commit -m "feat: add solution scene to remotion ad"
```

---

## Task 7: Social Proof scene (28–38s)

**Files:**
- Create: `remotion-ad/src/components/StatCounter.tsx`
- Create: `remotion-ad/src/scenes/SocialProof.tsx`

**Step 1: Create StatCounter.tsx**

```tsx
// remotion-ad/src/components/StatCounter.tsx
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

export const StatCounter: React.FC<Props> = ({ value, suffix = "", prefix = "", label, delay = 0 }) => {
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
        {prefix}{displayValue}{suffix}
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
```

**Step 2: Create SocialProof.tsx**

```tsx
// remotion-ad/src/scenes/SocialProof.tsx
import { AbsoluteFill, useCurrentFrame } from "remotion";
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
          <p style={{ fontFamily: fonts.heading, fontSize: 52, color: colors.slate400, margin: 0, fontWeight: 600 }}>
            Resultados reais. Empresas reais.
          </p>
        </AnimatedText>

        <div style={{ display: "flex", gap: 0, marginBottom: 80 }}>
          <StatCounter value={50} suffix="+" label="Empresas atendidas" delay={10} />
          <StatCounter value={320} suffix="%" label="ROI médio" delay={30} prefix="" />
          <StatCounter value={24} suffix="h" label="Retorno garantido" delay={50} />
        </div>

        <AnimatedText delay={60}>
          <div
            style={{
              display: "inline-flex",
              gap: 24,
              flexWrap: "wrap" as const,
              justifyContent: "center",
            }}
          >
            {["🔒 Dados protegidos", "✅ Sem compromisso", "⚡ Resposta em até 24h"].map((badge) => (
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
            ))}
          </div>
        </AnimatedText>
      </div>
    </AbsoluteFill>
  );
};
```

**Step 3: Commit**

```bash
git add remotion-ad/src/components/StatCounter.tsx remotion-ad/src/scenes/SocialProof.tsx
git commit -m "feat: add social proof scene to remotion ad"
```

---

## Task 8: CTA scene (38–45s)

**Files:**
- Create: `remotion-ad/src/scenes/CTA.tsx`

**Step 1: Create CTA.tsx**

```tsx
// remotion-ad/src/scenes/CTA.tsx
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

  // Button pulse
  const pulse = 1 + Math.sin(frame * 0.15) * 0.02;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg, justifyContent: "center", alignItems: "center" }}>
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

        <AnimatedText delay={40} style={{ marginTop: 40 }}>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 28,
              color: colors.slate400,
              fontFamily: "monospace",
              letterSpacing: 2,
            }}
          >
            prizely.com.br
          </p>
        </AnimatedText>
      </div>
    </AbsoluteFill>
  );
};
```

**Step 2: Commit**

```bash
git add remotion-ad/src/scenes/CTA.tsx
git commit -m "feat: add CTA scene to remotion ad"
```

---

## Task 9: Render final video

**Step 1: Render 9:16**

```bash
cd remotion-ad
npx remotion render MetaAd-9x16 ../public/meta-ad-9x16.mp4 --codec=h264
```

**Step 2: Render 3:4**

```bash
npx remotion render MetaAd-3x4 ../public/meta-ad-3x4.mp4 --codec=h264
```

**Step 3: Verify outputs**

```bash
ls -lh ../public/meta-ad-9x16.mp4 ../public/meta-ad-3x4.mp4
open ../public/meta-ad-9x16.mp4
```

**Step 4: Commit**

```bash
cd ..
git add public/meta-ad-9x16.mp4 public/meta-ad-3x4.mp4
git commit -m "feat: render meta ad 9x16 and 3x4"
```

---

## Decisions

- Sem URL no vídeo
- Renders: 9:16 (Reels/Stories) + 3:4 (Feed)
- Sem música
