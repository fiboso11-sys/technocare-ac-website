import { company } from "@/data/company";

/** Deterministic local hero art — never loaded via remote/img URL. */
export function HeroFallbackVisual() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="h-full w-full"
      role="img"
      aria-label="Stylized wall-mounted air conditioner for TECHNO CARE AC and HVAC services in Chennai"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="tc-room" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#1a4558" />
          <stop offset="40%" stopColor="#12384a" />
          <stop offset="100%" stopColor="#0b1f2e" />
        </linearGradient>
        <linearGradient id="tc-glow" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#7bd4cf" stopOpacity="0.32" />
          <stop offset="45%" stopColor="#7bd4cf" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#7bd4cf" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="tc-unit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f8fa" />
          <stop offset="100%" stopColor="#c5d2db" />
        </linearGradient>
        <linearGradient id="tc-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#245466" />
          <stop offset="100%" stopColor="#16384a" />
        </linearGradient>
        <radialGradient id="tc-spot" cx="0.35" cy="0.28" r="0.55">
          <stop offset="0%" stopColor="#9fd4cf" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#9fd4cf" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="600" fill="url(#tc-room)" />
      <rect width="800" height="600" fill="url(#tc-spot)" />
      <rect width="800" height="600" fill="url(#tc-glow)" />

      {/* wall plane */}
      <rect x="48" y="56" width="704" height="360" rx="18" fill="url(#tc-panel)" opacity="0.55" />
      <rect x="72" y="78" width="656" height="316" rx="12" fill="#1c4a5c" opacity="0.45" />

      {/* window light */}
      <rect x="560" y="100" width="140" height="210" rx="8" fill="#a8ddd8" opacity="0.16" />
      <rect x="574" y="114" width="112" height="182" rx="4" fill="#e5f7f4" opacity="0.08" />
      <line x1="630" y1="114" x2="630" y2="296" stroke="#d7f0ed" strokeOpacity="0.12" strokeWidth="2" />

      {/* indoor split unit — larger, more present */}
      <g transform="translate(150,130)">
        <rect x="8" y="10" width="380" height="128" rx="8" fill="#0b1f2e" opacity="0.25" />
        <rect x="0" y="0" width="380" height="124" rx="16" fill="url(#tc-unit)" />
        <rect x="18" y="20" width="344" height="58" rx="7" fill="#879aa8" />
        <g stroke="#edf3f6" strokeWidth="2.4" opacity="0.95">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={32 + i * 28}
              y1="28"
              x2={32 + i * 28}
              y2="70"
            />
          ))}
        </g>
        <rect x="24" y="92" width="92" height="14" rx="3" fill="#6d8190" />
        <rect x="130" y="96" width="36" height="6" rx="2" fill="#90a3b0" />
        <circle cx="340" cy="99" r="6" fill="#0f8a86" />
      </g>

      {/* cool airflow */}
      <g fill="none" stroke="#7bd4cf" strokeWidth="2.4" strokeLinecap="round" opacity="0.5">
        <path d="M170 290 C250 325 360 325 460 292" />
        <path d="M185 322 C265 357 375 357 475 324" />
        <path d="M200 354 C280 389 390 389 490 356" />
      </g>

      {/* outdoor unit cue */}
      <g transform="translate(560,350)">
        <rect x="0" y="0" width="120" height="92" rx="10" fill="#164556" stroke="#7bd4cf" strokeOpacity="0.35" strokeWidth="2" />
        <circle cx="60" cy="46" r="26" fill="none" stroke="#7bd4cf" strokeOpacity="0.55" strokeWidth="3" />
        <circle cx="60" cy="46" r="10" fill="none" stroke="#7bd4cf" strokeOpacity="0.35" strokeWidth="2" />
      </g>

      {/* restrained geometry */}
      <g stroke="#7bd4cf" strokeWidth="1.2" opacity="0.16" fill="none">
        <path d="M72 430 H520" />
        <path d="M72 454 H420" />
        <circle cx="700" cy="140" r="34" />
      </g>

      <rect x="0" y="480" width="800" height="120" fill="#06141f" opacity="0.35" />
      <text
        x="48"
        y="528"
        fill="#e8eef3"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="2"
      >
        {company.name}
      </text>
      <text
        x="48"
        y="556"
        fill="#b7c6d3"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="14"
        letterSpacing="0.6"
      >
        Multi-Brand AC · {company.city}
      </text>
    </svg>
  );
}
