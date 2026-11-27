// Home-screen icon for iPhones (same GitSuited three-card mark as the browser tab icon, as a PNG).
import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0C1322' }}>
        <svg width="130" height="130" viewBox="0 0 100 100">
          <rect x="10" y="17" width="62" height="40" rx="8" fill="#5AD8A2" transform="rotate(-9 41 37)" />
          <rect x="30" y="43" width="62" height="40" rx="8" fill="#1E9E6E" transform="rotate(8 61 63)" />
          <rect x="17" y="29" width="66" height="44" rx="9" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="28" y1="61" x2="48" y2="61" stroke="#111A2E" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size
  )
}
