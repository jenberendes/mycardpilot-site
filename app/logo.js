/* Suited logo mark: a bold "S" with a gold reward sparkle. */
export const S_PATH = 'M64 30 C58 20 26 20 26 38 C26 54 66 50 66 68 C66 86 32 88 24 74'
export const SPARKLE_PATH = 'M80 5 Q80 18 93 18 Q80 18 80 31 Q80 18 67 18 Q80 18 80 5 Z'

export function SuitedMark({ size = 26, color = 'currentColor', sparkle = '#D4AF37' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d={S_PATH} stroke={color} strokeWidth="12" strokeLinecap="round" />
      <path d={SPARKLE_PATH} fill={sparkle} />
    </svg>
  )
}

export function SuitedLogo() {
  return (
    <>
      <SuitedMark size={26} />
      <span>Suited</span>
    </>
  )
}
