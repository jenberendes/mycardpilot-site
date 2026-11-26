/* GitSuited logo: a "card stack" mark (Sea Green card behind, outlined card in front).
   Matches the app's SuitedLogo.tsx (variant "stack"). The wordmark is lowercase
   "gitsuited" by design ("git" in deep Sea Green); in sentences the brand is written "GitSuited". */
export const ACCENT_GREEN = '#34C98A'
export const INK = '#111A2E'
export const IVORY = '#F5F1E8'
export const WHITE = '#FFFFFF'

export function SuitedMark({ size = 24, color = 'currentColor', face = WHITE, accent = ACCENT_GREEN }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <rect x="26" y="14" width="60" height="42" rx="8" fill={accent} transform="rotate(10 56 35)" />
      <rect x="12" y="34" width="66" height="46" rx="9" fill={face} stroke={color} strokeWidth="7" />
      <line x1="24" y1="66" x2="48" y2="66" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function SuitedLogo({ face = WHITE }) {
  return (
    <>
      <SuitedMark size={24} face={face} />
      <span aria-label="GitSuited"><span style={{ color: '#0B6E4F' }}>git</span>suited</span>
    </>
  )
}
