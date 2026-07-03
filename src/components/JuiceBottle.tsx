type Props = {
  from: string;
  to: string;
  accent: string;
  className?: string;
  label?: string;
};

export default function JuiceBottle({ from, to, accent, className = "", label }: Props) {
  const gradId = `grad-${from.replace("#", "")}-${to.replace("#", "")}`;
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 340"
        className="w-full h-full drop-shadow-[0_18px_30px_rgba(42,33,23,0.18)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        {/* cap */}
        <rect x="82" y="8" width="36" height="22" rx="4" fill={accent} />
        {/* neck */}
        <path d="M88 28 L112 28 L116 60 L84 60 Z" fill={accent} opacity="0.9" />
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
        {/* liquid shine */}
        <path
          d="M66 120 C66 150 66 220 66 280"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        {/* label band */}
        <rect x="52" y="180" width="96" height="64" fill="var(--color-paper)" opacity="0.92" />
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
