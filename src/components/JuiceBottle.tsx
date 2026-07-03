import { useId } from "react";

type Props = {
  from: string;
  to: string;
  accent: string;
  className?: string;
  label?: string;
};

export default function JuiceBottle({ from, to, accent, className = "", label }: Props) {
  const gradId = `bottle-grad-${useId()}`;
  const dropId = `bottle-drop-${useId()}`;

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 340"
        className="w-full h-full drop-shadow-[0_20px_34px_rgba(36,26,16,0.22)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
          <radialGradient id={dropId} cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* cap */}
        <rect x="82" y="8" width="36" height="22" rx="4" fill={accent} />
        <rect x="82" y="8" width="36" height="6" rx="3" fill="white" opacity="0.25" />
        {/* neck */}
        <path d="M88 28 L112 28 L116 60 L84 60 Z" fill={accent} opacity="0.92" />
        {/* body */}
        <path
          d="M84 60
             C60 78 52 100 52 132
             L52 292
             C52 312 66 328 88 328
             L112 328
             C134 328 148 312 148 292
             L148 132
             C148 100 140 78 116 60
             Z"
          fill={`url(#${gradId})`}
        />
        {/* big glossy shine sweep */}
        <path
          d="M64 90 C58 130 58 240 64 300"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M132 100 C136 150 136 230 130 280"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* condensation droplets */}
        <circle cx="70" cy="150" r="4" fill={`url(#${dropId})`} />
        <circle cx="126" cy="180" r="3" fill={`url(#${dropId})`} />
        <circle cx="80" cy="250" r="3.5" fill={`url(#${dropId})`} />
        <circle cx="118" cy="270" r="2.5" fill={`url(#${dropId})`} />

        {/* label band */}
        <rect x="52" y="180" width="96" height="64" fill="var(--color-paper)" opacity="0.95" />
        <rect x="52" y="180" width="96" height="4" fill={accent} />
        <rect x="52" y="240" width="96" height="4" fill={accent} />
        {label && (
          <text
            x="100"
            y="216"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill={accent}
            fontFamily="var(--font-display), serif"
          >
            {label}
          </text>
        )}
      </svg>
    </div>
  );
}
