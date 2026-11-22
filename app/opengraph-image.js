// The picture shown when someone texts or posts a link to the site.
import { ImageResponse } from 'next/og'

export const alt = 'CardPilot: always know which card to use'
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
          background: '#1A1815',
          color: '#F4EFE6',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <svg width="92" height="52" viewBox="0 0 46 26">
            <path d="M4 21 H22 L42 6" fill="none" stroke="#9A5C8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="4" cy="21" r="2.8" fill="#9A5C8A" />
            <circle cx="42" cy="6" r="3.8" fill="#9A5C8A" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em' }}>CardPilot</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Always know which card to use.
          </div>
          <div style={{ fontSize: 32, color: 'rgba(244, 239, 230, 0.66)' }}>
            The smartest way to use the cards you already have.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#9A5C8A' }}>mycardpilot.com</div>
      </div>
    ),
    size
  )
}
