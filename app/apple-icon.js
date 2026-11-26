// Home-screen icon for iPhones (same GitSuited card-stack mark as the browser tab icon, as a PNG).
import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0C1322' }}>
        <svg width="130" height="130" viewBox="0 0 100 100">
          <rect x="26" y="14" width="60" height="42" rx="8" fill="#34C98A" transform="rotate(10 56 35)" />
          <rect x="12" y="34" width="66" height="46" rx="9" fill="#0C1322" stroke="#F5F1E8" strokeWidth="7" />
          <line x1="24" y1="66" x2="48" y2="66" stroke="#F5F1E8" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size
  )
}
