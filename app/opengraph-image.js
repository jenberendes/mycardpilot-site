// The picture shown when someone texts or posts a link to the site.
import { ImageResponse } from 'next/og'

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
          background: '#F4F4F8',
          color: '#111A2E',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="60" height="60" viewBox="0 0 100 100">
            <rect x="26" y="14" width="60" height="42" rx="8" fill="#B98AC9" transform="rotate(10 56 35)" />
            <rect x="12" y="34" width="66" height="46" rx="9" fill="#FFFFFF" stroke="#111A2E" strokeWidth="7" />
            <line x1="24" y1="66" x2="48" y2="66" stroke="#111A2E" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em' }}>suited</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.03em', display: 'flex', flexWrap: 'wrap' }}>
            <span>Always know&nbsp;</span><span style={{ color: '#7A4A93' }}>which card to use.</span>
          </div>
          <div style={{ fontSize: 32, color: 'rgba(17, 26, 46, 0.62)' }}>
            The smartest way to use the cards you already have.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#7A4A93' }}>mycardpilot.com</div>
      </div>
    ),
    size
  )
}
