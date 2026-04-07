import type { CSSProperties } from 'react';

/* ═══════════════════════════════════════════════════════════════
   Celestial SVG decoration components matching PACN 47 branding:
   compass rose, crescent moon, radiant sun, orbital rings,
   sparkle clusters, and ornamental dividers.
   ═══════════════════════════════════════════════════════════════ */

/** Compass Rose — the PACN 47 signature emblem */
export function CompassRose({ className = "", size = 200 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer glow ring */}
      <circle cx="100" cy="100" r="90" stroke="url(#compassGrad)" strokeWidth="0.5" opacity="0.3" />
      <circle cx="100" cy="100" r="80" stroke="url(#compassGrad)" strokeWidth="0.3" opacity="0.15" />

      {/* Main 4-point star */}
      <path
        d="M100 10 L112 88 L190 100 L112 112 L100 190 L88 112 L10 100 L88 88 Z"
        fill="url(#starGold)"
        opacity="0.9"
      />
      {/* Inner 4-point star (rotated 45°) */}
      <path
        d="M100 35 L108 92 L165 100 L108 108 L100 165 L92 108 L35 100 L92 92 Z"
        fill="url(#starGoldLight)"
        opacity="0.5"
      />
      {/* Center circle */}
      <circle cx="100" cy="100" r="12" fill="url(#starGold)" opacity="0.8" />
      <circle cx="100" cy="100" r="6" fill="#0D1B3E" />
      <circle cx="100" cy="100" r="3" fill="url(#starGold)" opacity="0.6" />

      {/* Crescent moon overlay */}
      <path
        d="M85 60 A45 45 0 1 0 85 140 A35 35 0 1 1 85 60"
        fill="url(#moonBlue)"
        opacity="0.35"
      />

      <defs>
        <linearGradient id="starGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0C97F" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#A88B3A" />
        </linearGradient>
        <linearGradient id="starGoldLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0C97F" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
        <linearGradient id="compassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#7B9CC7" />
        </linearGradient>
        <linearGradient id="moonBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B9CC7" />
          <stop offset="100%" stopColor="#4A6D9C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Radiant Sun — rays emanating outward */
export function RadiantSun({ className = "", size = 120, style }: { className?: string; size?: number; style?: CSSProperties }) {
  const rays = 24;
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Radiating lines */}
      {Array.from({ length: rays }).map((_, i) => {
        const angle = (i * 360) / rays;
        const rad = (angle * Math.PI) / 180;
        const inner = i % 2 === 0 ? 22 : 26;
        const outer = i % 3 === 0 ? 55 : i % 2 === 0 ? 48 : 42;
        const x1 = 60 + Math.cos(rad) * inner;
        const y1 = 60 + Math.sin(rad) * inner;
        const x2 = 60 + Math.cos(rad) * outer;
        const y2 = 60 + Math.sin(rad) * outer;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#C9A84C"
            strokeWidth={i % 3 === 0 ? 1.2 : 0.6}
            opacity={i % 3 === 0 ? 0.7 : 0.35}
          />
        );
      })}
      {/* Core circles */}
      <circle cx="60" cy="60" r="18" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="60" cy="60" r="10" fill="#C9A84C" opacity="0.15" />
      <circle cx="60" cy="60" r="4" fill="#C9A84C" opacity="0.4" />
    </svg>
  );
}

/** Crescent Moon */
export function CrescentMoon({ className = "", size = 80 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M55 10 A30 30 0 1 0 55 70 A22 22 0 1 1 55 10"
        fill="url(#crescentFill)"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="crescentFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B9CC7" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Sparkle Burst — small 4-point star */
export function Sparkle({ className = "", size = 24, color = "#C9A84C", style }: { className?: string; size?: number; color?: string; style?: CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}

/** Orbital Rings — swirling ellipses */
export function OrbitalRings({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="600"
      height="400"
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse
        cx="300"
        cy="200"
        rx="280"
        ry="120"
        stroke="url(#orbGrad1)"
        strokeWidth="0.7"
        transform="rotate(-15 300 200)"
        opacity="0.25"
      />
      <ellipse
        cx="300"
        cy="200"
        rx="250"
        ry="90"
        stroke="url(#orbGrad2)"
        strokeWidth="0.5"
        transform="rotate(10 300 200)"
        opacity="0.18"
      />
      <ellipse
        cx="300"
        cy="200"
        rx="200"
        ry="60"
        stroke="#C9A84C"
        strokeWidth="0.4"
        transform="rotate(-5 300 200)"
        opacity="0.12"
        strokeDasharray="4 8"
      />
      <defs>
        <linearGradient id="orbGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="#C9A84C" />
          <stop offset="70%" stopColor="#7B9CC7" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="orbGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor="#7B9CC7" />
          <stop offset="60%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Ornamental Section Divider with celestial motifs */
export function CelestialDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`celestial-divider ${className}`}>
      <svg
        width="320"
        height="32"
        viewBox="0 0 320 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left decorative line */}
        <line x1="20" y1="16" x2="130" y2="16" stroke="url(#divLineL)" strokeWidth="0.8" />
        {/* Left small star */}
        <path d="M130 16 L132 14 L134 16 L132 18 Z" fill="#C9A84C" opacity="0.6" />
        {/* Left dot trail */}
        <circle cx="45" cy="16" r="1" fill="#C9A84C" opacity="0.3" />
        <circle cx="70" cy="16" r="1.2" fill="#C9A84C" opacity="0.4" />
        <circle cx="95" cy="16" r="0.8" fill="#7B9CC7" opacity="0.3" />
        <circle cx="115" cy="16" r="1" fill="#C9A84C" opacity="0.5" />

        {/* Center star */}
        <path
          d="M160 4 L163 13 L172 16 L163 19 L160 28 L157 19 L148 16 L157 13 Z"
          fill="#C9A84C"
          opacity="0.8"
        />
        <circle cx="160" cy="16" r="2.5" fill="#0D1B3E" />
        <circle cx="160" cy="16" r="1" fill="#C9A84C" opacity="0.6" />

        {/* Right small star */}
        <path d="M186 16 L188 14 L190 16 L188 18 Z" fill="#C9A84C" opacity="0.6" />
        {/* Right dot trail */}
        <circle cx="205" cy="16" r="1" fill="#C9A84C" opacity="0.5" />
        <circle cx="225" cy="16" r="0.8" fill="#7B9CC7" opacity="0.3" />
        <circle cx="250" cy="16" r="1.2" fill="#C9A84C" opacity="0.4" />
        <circle cx="275" cy="16" r="1" fill="#C9A84C" opacity="0.3" />
        {/* Right decorative line */}
        <line x1="190" y1="16" x2="300" y2="16" stroke="url(#divLineR)" strokeWidth="0.8" />

        <defs>
          <linearGradient id="divLineL" x1="20" y1="16" x2="130" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent" />
            <stop offset="1" stopColor="#C9A84C" />
          </linearGradient>
          <linearGradient id="divLineR" x1="190" y1="16" x2="300" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C9A84C" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/** Scatter of small sparkles for backgrounds */
export function SparkleField({ className = "" }: { className?: string }) {
  const sparkles = [
    { x: 8, y: 15, s: 6, o: 0.4, d: 0 },
    { x: 22, y: 45, s: 4, o: 0.25, d: 1.2 },
    { x: 45, y: 8, s: 8, o: 0.5, d: 0.5 },
    { x: 65, y: 55, s: 5, o: 0.3, d: 2.1 },
    { x: 78, y: 20, s: 7, o: 0.45, d: 0.8 },
    { x: 88, y: 70, s: 4, o: 0.2, d: 1.5 },
    { x: 35, y: 78, s: 6, o: 0.35, d: 1.8 },
    { x: 55, y: 35, s: 5, o: 0.3, d: 0.3 },
    { x: 92, y: 42, s: 3, o: 0.2, d: 2.5 },
    { x: 15, y: 62, s: 5, o: 0.25, d: 1.0 },
  ];

  return (
    <div className={`sparkle-field ${className}`} aria-hidden="true">
      {sparkles.map((sp, i) => (
        <div
          key={i}
          className="sparkle-dot"
          style={{
            left: `${sp.x}%`,
            top: `${sp.y}%`,
            width: sp.s,
            height: sp.s,
            opacity: sp.o,
            animationDelay: `${sp.d}s`,
          }}
        />
      ))}
    </div>
  );
}
