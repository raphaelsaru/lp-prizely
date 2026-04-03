import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';

interface Props {
  src: string;
  fallback: string;
  size?: number;
  className?: string;
}

export default function LottieIcon({ src, fallback, size = 72, className = '' }: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span
        className={className}
        style={{ fontSize: size * 0.65, lineHeight: 1, display: 'block' }}
      >
        {fallback}
      </span>
    );
  }

  return (
    <DotLottieReact
      src={src}
      autoplay
      loop
      style={{ width: size, height: size }}
      className={className}
      onLoadError={() => setFailed(true)}
    />
  );
}
