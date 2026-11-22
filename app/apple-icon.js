// Home-screen icon for iPhones (same route mark as the browser tab icon, as a PNG).
import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#5A2E4E' }}>
        <svg width="180" height="180" viewBox="0 0 64 64">
          <path d="M13 45 H31 L51 23" fill="none" stroke="#F4EFE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="13" cy="45" r="4.5" fill="#F4EFE6" />
          <circle cx="51" cy="23" r="6.5" fill="#F4EFE6" />
        </svg>
      </div>
    ),
    size
  )
}
