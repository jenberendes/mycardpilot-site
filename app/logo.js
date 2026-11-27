/* GitSuited logo: a "card stack" mark: three cards fanned like the homepage hero (light green up-left,
   deeper green down-right, white outlined card in front).
   Keep in sync with the app's SuitedLogo.tsx. The wordmark is lowercase
   "gitsuited" by design ("git" in deep Sea Green); in sentences the brand is written "GitSuited". */
export const ACCENT_GREEN = '#34C98A'
export const INK = '#111A2E'
export const IVORY = '#F5F1E8'
export const WHITE = '#FFFFFF'

export function SuitedMark({ size = 24, color = 'currentColor', face = WHITE, accent = ACCENT_GREEN }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <rect x="10" y="17" width="62" height="40" rx="8" fill="#5AD8A2" transform="rotate(-9 41 37)" />
      <rect x="30" y="43" width="62" height="40" rx="8" fill="#1E9E6E" transform="rotate(8 61 63)" />
      <rect x="17" y="29" width="66" height="44" rx="9" fill={face} stroke={color} strokeWidth="4" />
      <line x1="28" y1="61" x2="48" y2="61" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
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
