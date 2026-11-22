/* Suited logo: a "card stack" mark (plum card behind, outlined card in front).
   Matches the app's SuitedLogo.tsx (variant "stack"). The wordmark is lowercase
   "suited" by design; in sentences the brand is written "Suited". */
export const ACCENT_PLUM = '#B98AC9'
export const INK = '#111A2E'
export const IVORY = '#F5F1E8'

export function SuitedMark({ size = 24, color = 'currentColor', face = INK, accent = ACCENT_PLUM }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <rect x="26" y="14" width="60" height="42" rx="8" fill={accent} transform="rotate(10 56 35)" />
      <rect x="12" y="34" width="66" height="46" rx="9" fill={face} stroke={color} strokeWidth="7" />
      <line x1="24" y1="66" x2="48" y2="66" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function SuitedLogo({ face = INK }) {
  return (
    <>
      <SuitedMark size={24} face={face} />
      <span aria-label="Suited">suited</span>
    </>
  )
}
