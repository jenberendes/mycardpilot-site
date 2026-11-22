// The picture shown when someone texts or posts a link to the site.
import { ImageResponse } from 'next/og'
import { S_PATH, SPARKLE_PATH } from './logo'

export const alt = 'Suited: always know which card to use'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px 88px',
          background: '#0E1626',
          color: '#F5F1E8',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 100 100">
            <path d={S_PATH} fill="none" stroke="#F5F1E8" strokeWidth="12" strokeLinecap="round" />
            <path d={SPARKLE_PATH} fill="#D4AF37" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em' }}>Suited</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Always know which card to use.
          </div>
          <div style={{ fontSize: 32, color: 'rgba(245, 241, 232, 0.68)' }}>
            The smartest way to use the cards you already have.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#D4AF37' }}>mycardpilot.com</div>
      </div>
    ),
    size
  )
}
