// Home-screen icon for iPhones (same Suited mark as the browser tab icon, as a PNG).
import { ImageResponse } from 'next/og'
import { S_PATH, SPARKLE_PATH } from './logo'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#16233F' }}>
        <svg width="124" height="124" viewBox="0 0 100 100">
          <path d={S_PATH} fill="none" stroke="#F5F1E8" strokeWidth="13" strokeLinecap="round" />
          <path d={SPARKLE_PATH} fill="#D4AF37" />
        </svg>
      </div>
    ),
    size
  )
}
