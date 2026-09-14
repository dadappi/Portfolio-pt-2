// Ilustrasi dekoratif bertema pantai — dipakai berulang di beberapa section.
// Semua flat-vector sederhana, warnanya ngikutin currentColor/fill biar gampang di-tint.

export function Crab({ className = 'w-16 h-16' }) {
  return (
    <svg viewBox="0 0 100 80" className={className} aria-hidden="true">
      <ellipse cx="50" cy="45" rx="30" ry="20" fill="#FF7A52" />
      <ellipse cx="50" cy="40" rx="26" ry="16" fill="#FF9270" />
      <circle cx="38" cy="30" r="6" fill="#FF7A52" />
      <circle cx="62" cy="30" r="6" fill="#FF7A52" />
      <circle cx="38" cy="30" r="3" fill="#2B4A4A" />
      <circle cx="62" cy="30" r="3" fill="#2B4A4A" />
      {/* capit */}
      <path d="M15 35 Q5 25 12 15 Q20 20 22 32 Z" fill="#FF7A52" />
      <path d="M85 35 Q95 25 88 15 Q80 20 78 32 Z" fill="#FF7A52" />
      {/* kaki */}
      <path d="M25 55 Q15 62 10 70" stroke="#E8623E" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M35 60 Q28 68 24 76" stroke="#E8623E" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M65 60 Q72 68 76 76" stroke="#E8623E" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M75 55 Q85 62 90 70" stroke="#E8623E" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Seagull({ className = 'w-14 h-14' }) {
  return (
    <svg viewBox="0 0 100 60" className={className} aria-hidden="true">
      <path d="M10 30 Q30 5 50 25 Q70 5 90 30" stroke="#2B4A4A" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 24 L54 24 L50 32 Z" fill="#FF8A5B" />
    </svg>
  )
}

export function Turtle({ className = 'w-16 h-16' }) {
  return (
    <svg viewBox="0 0 100 80" className={className} aria-hidden="true">
      <ellipse cx="50" cy="45" rx="32" ry="24" fill="#2AA5A0" />
      <path d="M50 25 L62 40 L50 55 L38 40 Z" fill="#1F8480" />
      <circle cx="30" cy="30" r="8" fill="#2AA5A0" />
      <circle cx="26" cy="27" r="2" fill="#2B4A4A" />
      <ellipse cx="20" cy="55" rx="8" ry="6" fill="#2AA5A0" />
      <ellipse cx="80" cy="55" rx="8" ry="6" fill="#2AA5A0" />
      <ellipse cx="35" cy="70" rx="7" ry="5" fill="#2AA5A0" />
      <ellipse cx="65" cy="70" rx="7" ry="5" fill="#2AA5A0" />
    </svg>
  )
}

export function Sun({ className = 'w-20 h-20' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="22" fill="#FFC65C" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180
        const x1 = 50 + Math.cos(angle) * 30
        const y1 = 50 + Math.sin(angle) * 30
        const x2 = 50 + Math.cos(angle) * 40
        const y2 = 50 + Math.sin(angle) * 40
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFC65C" strokeWidth="5" strokeLinecap="round" />
        )
      })}
    </svg>
  )
}

export function Cloud({ className = 'w-24 h-14' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      <ellipse cx="35" cy="38" rx="25" ry="18" fill="white" opacity="0.85" />
      <ellipse cx="65" cy="30" rx="30" ry="22" fill="white" opacity="0.85" />
      <ellipse cx="90" cy="40" rx="20" ry="15" fill="white" opacity="0.85" />
    </svg>
  )
}

export function PalmLeaf({ className = 'w-16 h-16' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M50 90 L50 40" stroke="#3E8E5A" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 45 Q20 30 10 10" stroke="#4CAF6D" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M50 45 Q80 30 90 10" stroke="#4CAF6D" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M50 40 Q25 45 12 55" stroke="#4CAF6D" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M50 40 Q75 45 88 55" stroke="#4CAF6D" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M50 42 Q45 15 55 2" stroke="#4CAF6D" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function WaveDivider({ flip = false, color = 'var(--color-bg-elevated)' }) {
  return (
    <div className={`wave-divider ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          d="M0,30 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
