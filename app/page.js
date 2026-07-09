'use client'
import { useState } from 'react'
import './globals.css'

function WaitlistForm({ surface = 'light' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // In production, connect to your email service (Mailchimp, Resend, etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success-msg">
        <span className="tick">✓</span> You're on the list — we'll be in touch soon.
      </div>
    )
  }

  return (
    <form className={`wl-form on-${surface}`} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit" className={`btn ${surface === 'plum' ? 'btn-cream' : 'btn-plum'}`}>Join Waitlist</button>
    </form>
  )
}

/* Signature brand mark: origin dot → one bend → destination dot (destination in plum) */
function CourseMark() {
  return (
    <svg width="46" height="26" viewBox="0 0 46 26" fill="none" aria-hidden="true">
      <path d="M4 21 H22 L42 6" stroke="#3A1F33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="21" r="2.4" fill="#3A1F33" />
      <circle cx="42" cy="6" r="3.4" fill="#3A1F33" />
    </svg>
  )
}

/* Simple monoline feature glyphs (single-color, inherit currentColor) */
const glyph = {
  card: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 9.5h19" /><path d="M6 15.5h4" />
    </svg>
  ),
  statement: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 2.5h9l5 5v14H5z" /><path d="M14 2.5v5h5" /><path d="M8 13h8M8 16.5h8M8 9.5h3" />
    </svg>
  ),
  compare: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="6.5" height="14" rx="1.5" /><rect x="14.5" y="3" width="6.5" height="17" rx="1.5" />
    </svg>
  ),
  points: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 7.5v9M9.2 12h5.6" />
    </svg>
  ),
  status: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21V3" /><path d="M6 4h11l-2.2 3.5L17 11H6" />
    </svg>
  ),
  window: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 1.8" />
    </svg>
  ),
}

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <div className="container nav-inner">
          <div className="nav-logo">CardPilot</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#business">For Business</a></li>
            <li><a href="#join"><button className="btn btn-plum btn-sm">Join Waitlist</button></a></li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="join" className="hero on-black">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow eyebrow-tag">Now in early access</div>
            <h1 className="headline headline--hero">Always know<br />which card to use.</h1>
            <p className="subhead">
              You've got a few cards. Most of the time you just grab one and hope. CardPilot tells
              you the right one for every purchase — so you stop leaving rewards behind without
              thinking about it.
            </p>
            <div className="hero-form-wrap">
              <WaitlistForm surface="dark" />
              <p className="hero-micro">Free to join · No credit card required · Built in Nebraska</p>
            </div>
          </div>

          <div className="verdict" aria-hidden="true">
            <div className="verdict-behind b1" />
            <div className="verdict-behind b2" />
            <div className="verdict-card">
              <div className="verdict-mark"><CourseMark /></div>
              <div className="verdict-label">Use this</div>
              <div className="verdict-name">Sapphire</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats on-cream">
        <div className="container stats-inner">
          <div>
            <div className="stat-num tnum">100+</div>
            <div className="stat-label">cards in our database</div>
          </div>
          <div>
            <div className="stat-num tnum">1 min</div>
            <div className="stat-label">to your first recommendation</div>
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="section on-black">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Features</div>
            <h2 className="headline">Everything you need,<br />none of the homework.</h2>
            <p className="subhead">
              CardPilot does the optimizing a points obsessive would — so you never have to become one.
            </p>
          </div>

          <div className="features-grid">
            {[
              { g: glyph.card, title: 'The right card, instantly', desc: 'Tell us the category and amount. CardPilot names the card that earns most, and explains why in plain English.' },
              { g: glyph.statement, title: 'See what you actually earned', desc: 'Upload a statement (CSV or PDF). CardPilot sorts every purchase and shows what you earned and what you left behind.' },
              { g: glyph.compare, title: 'Compare cards honestly', desc: 'Put up to four cards side by side on rewards, perks, fees, and real net value — not just headline multipliers.' },
              { g: glyph.points, title: 'Points, without the spreadsheet', desc: 'Track points across programs and see the best way to use them, starting from where you actually want to go.' },
              { g: glyph.status, title: 'Status, if you want it', desc: 'Set an airline or hotel goal and CardPilot routes the right spend toward it. Ignore it entirely if you don\'t care.' },
              { g: glyph.window, title: 'Never miss a 0% window', desc: 'CardPilot tracks intro-APR end dates and warns you at 90, 60, and 30 days.' },
            ].map((f, i) => (
              <div className="feature" key={i}>
                <div className="feature-glyph">{f.g}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="section on-cream">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">How it works</div>
            <h2 className="headline">Set up in minutes.</h2>
            <p className="subhead">
              No bank connection required to start. Add your cards and let CardPilot do the rest.
            </p>
          </div>
          <div className="steps">
            {[
              { num: '01', title: 'Add your cards', desc: 'Pick what you own from our database. Add household members or a business in seconds.' },
              { num: '02', title: 'Say what matters', desc: 'Cash back, travel, status, or just "the most value." CardPilot tailors every call to that.' },
              { num: '03', title: 'Check before you pay', desc: 'A quick look tells you the right card. Upload statements when you want to see earnings and trends.' },
            ].map((s, i) => (
              <div className="step" key={i}>
                <div className="step-num tnum">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR BUSINESS ── */}
      <section id="business" className="section on-black">
        <div className="container business-grid">
          <div>
            <div className="eyebrow" style={{ color: 'var(--plum-hi)' }}>For business owners</div>
            <h2 className="headline" style={{ marginTop: 18 }}>Built for the way<br />businesses actually spend.</h2>
            <p className="subhead" style={{ marginTop: 20, color: 'var(--cream-dim)' }}>
              Cards across multiple entities and employees is a mess to track. CardPilot keeps it in one place.
            </p>
            <ul className="business-list">
              <li>Assign each card to an entity</li>
              <li>Track spend and rewards per business</li>
              <li>Get recommendations filtered by entity</li>
              <li>Route large general spend toward status goals</li>
              <li>Manage multiple cardholders</li>
              <li>Upload statements from multiple accounts</li>
            </ul>
          </div>

          <div className="snapshot">
            <div className="snapshot-head">Example — illustrative</div>
            <div className="snapshot-title">Sample Business Snapshot</div>
            {[
              { label: 'Cards tracked', value: '4 cards' },
              { label: 'Monthly spend', value: '$12,400' },
              { label: 'Rewards earned', value: '+$341', accent: true },
              { label: 'Missed value', value: '-$89' },
              { label: 'Optimization rate', value: '79%' },
              { label: 'Best card this month', value: 'Amex Biz Gold' },
            ].map((row, i) => (
              <div className="snapshot-row" key={i}>
                <span className="label">{row.label}</span>
                <span className={`value tnum${row.accent ? ' accent' : ''}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER NOTE ── */}
      <section className="section on-cream">
        <div className="container founder">
          <div className="eyebrow">Why I built this</div>
          <h2 className="headline">I got tired of guessing.</h2>
          <div className="founder-body">
            <p>
              I have more credit cards than I'd like to admit, and for years I just used the same
              one for everything — losing rewards I'd technically already earned, on purchases I was
              making anyway.
            </p>
            <p>
              Every "which card should I use" tool assumed I wanted to become a points expert. I
              didn't. I just wanted the right answer. So I built CardPilot to give it to me — and to you.
            </p>
            <p className="founder-sign">— Jen, founder</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section on-plum final-cta">
        <div className="container">
          <h2 className="headline">Stop leaving money behind.</h2>
          <p className="subhead">Join the waitlist and be first in when we open access.</p>
          <WaitlistForm surface="plum" />
          <p className="final-cta-micro">No spam. No credit card. Just the right card, every time.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="nav-logo">CardPilot</div>
              <p>The smartest way to use the cards you already have. Built in Nebraska.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#how-it-works">How It Works</a></li>
                  <li><a href="#business">For Business</a></li>
                  <li><a href="#join">Join Waitlist</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="mailto:hello@mycardpilot.com">Contact</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 CardPilot LLC · Omaha, Nebraska · Not affiliated with any card issuer.</p>
            <p>Always read card terms before applying.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
