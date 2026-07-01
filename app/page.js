'use client'
import { useState } from 'react'
import './globals.css'

function WaitlistForm({ dark = false }) {
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
        <span>✓</span> You're on the list — we'll be in touch soon!
      </div>
    )
  }

  return (
    <form className={dark ? 'cta-form' : 'waitlist-form'} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Join Waitlist →</button>
    </form>
  )
}

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <div className="container nav-inner">
          <div className="nav-logo">Card<span>Pilot</span></div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#business">For Business</a></li>
            <li>
              <a href="https://cardpilot-iota.vercel.app" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary" style={{padding:'8px 18px',fontSize:'14px'}}>Try the App →</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            🚀 Now in Early Access
          </div>
          <h1>
            Stop leaving money<br />
            <span className="accent">on the table.</span>
          </h1>
          <p>
            CardPilot tells you exactly which credit card to use for every purchase —
            maximizing rewards, tracking perks, and managing your entire card portfolio
            across household members and businesses.
          </p>
          <div className="hero-cta">
            <WaitlistForm />
            <p className="hero-sub">Free to join · No credit card required · Nebraska-built</p>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">$300+</div>
              <div className="hero-stat-label">avg. missed per month</div>
            </div>
            <div>
              <div className="hero-stat-num">4.2</div>
              <div className="hero-stat-label">avg. cards per household</div>
            </div>
            <div>
              <div className="hero-stat-num">100+</div>
              <div className="hero-stat-label">cards in our database</div>
            </div>
            <div>
              <div className="hero-stat-num">1 min</div>
              <div className="hero-stat-label">to get your first recommendation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM BAND ── */}
      <div className="problem-band">
        <div className="container">
          <p>
            The average cardholder leaves <strong>$300+ per month</strong> in unredeemed rewards on the table.
            CardPilot closes that gap — automatically.
          </p>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="features-bg">
        <div className="container">
          <div className="text-center">
            <div className="section-label">Features</div>
            <h2 className="section-title">Everything you need to<br />maximize every swipe</h2>
            <p className="section-sub mx-auto">
              CardPilot combines real-time optimization, perk tracking, and intelligent
              analytics into one platform built for serious cardholders.
            </p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: '⚡', bg: '#fef9c3',
                title: 'Instant Card Recommendations',
                desc: 'Tell us the category and amount — CardPilot instantly tells you which card earns the most, with a plain-English explanation of why.'
              },
              {
                icon: '📊', bg: '#eff6ff',
                title: 'Transaction Center',
                desc: 'Upload your statements via CSV or PDF. CardPilot categorizes every transaction, calculates what you earned, and shows exactly what you missed.'
              },
              {
                icon: '⇄', bg: '#f0fdf4',
                title: 'Full Card Comparison',
                desc: 'Compare up to 4 cards side-by-side across rewards, perks, annual fees, transfer partners, and net value — not just multipliers.'
              },
              {
                icon: '✈️', bg: '#fdf4ff',
                title: 'Points Intelligence Engine',
                desc: 'Track your points across all programs, find the best transfer opportunities, and plan your redemptions with a destination-first search.'
              },
              {
                icon: '🏆', bg: '#fff7ed',
                title: 'Status Strategy',
                desc: 'Set your airline and hotel status goals. CardPilot routes your spend — especially low-multiplier General spend — toward the programs that matter most.'
              },
              {
                icon: '💳', bg: '#f0fdf4',
                title: '0% APR Tracking',
                desc: 'CardPilot tracks intro APR windows on every card you own and alerts you 90, 60, and 30 days before your promotional period ends.'
              },
            ].map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon" style={{ background: f.bg }}>
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="how-bg">
        <div className="container">
          <div className="text-center">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Up and running in minutes</h2>
            <p className="section-sub mx-auto">
              No bank connections required to get started. Just add your cards and let CardPilot go to work.
            </p>
          </div>
          <div className="steps">
            {[
              {
                num: '1',
                title: 'Add your cards',
                desc: 'Select the cards you own from our database of 100+ cards. Add your household members and business entities in seconds.'
              },
              {
                num: '2',
                title: 'Set your goals',
                desc: 'Tell us what matters — maximizing points, earning airline status, hotel nights, or cash back. CardPilot tailors every recommendation.'
              },
              {
                num: '3',
                title: 'Optimize every purchase',
                desc: 'Before you swipe, check CardPilot. Upload your statements monthly to see your earnings, missed value, and month-over-month trends.'
              },
            ].map((s, i) => (
              <div className="step" key={i}>
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS SECTION ── */}
      <section id="business" className="business-bg">
        <div className="container">
          <div className="business-grid">
            <div className="business-content">
              <div className="section-label" style={{ color: '#60a5fa' }}>For Business Owners</div>
              <h2 className="section-title">Built for the way<br />businesses actually spend</h2>
              <p className="section-sub">
                Managing cards across multiple businesses, employees, and entities is a nightmare.
                CardPilot is the only tool that tracks it all in one place.
              </p>
              <ul className="business-list">
                <li>Assign each card to a specific business or entity</li>
                <li>Track spend and rewards by business separately</li>
                <li>Get card recommendations filtered by entity</li>
                <li>Route large General spend toward airline or hotel status goals</li>
                <li>Manage multiple cardholders and household members</li>
                <li>Upload statements from multiple accounts in one place</li>
              </ul>
            </div>
            <div className="business-card">
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 4, fontWeight: 600 }}>EXAMPLE — Monthly Snapshot</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>Coast 2 Coast Payments</div>
              </div>
              {[
                { label: 'Cards tracked', value: '4 cards', cls: '' },
                { label: 'Monthly spend', value: '$12,400', cls: '' },
                { label: 'Rewards earned', value: '+$341', cls: 'good' },
                { label: 'Missed value', value: '-$89', cls: 'bad' },
                { label: 'Optimization rate', value: '79%', cls: '' },
                { label: 'Best card this month', value: 'Amex Biz Gold', cls: 'good' },
              ].map((row, i) => (
                <div className="business-card-row" key={i}>
                  <span className="label">{row.label}</span>
                  <span className={`value ${row.cls}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-bg">
        <div className="container">
          <div className="text-center">
            <div className="section-label">Early Users</div>
            <h2 className="section-title">Built by a rewards nerd,<br />for rewards nerds</h2>
          </div>
          <div className="testimonials-grid">
            {[
              {
                text: '"I had no idea I was leaving almost $400 a month on the table just by using the wrong card for groceries and gas. CardPilot paid for itself in the first week."',
                name: 'Sarah M.',
                role: 'Small Business Owner · Omaha, NE',
                initials: 'SM'
              },
              {
                text: '"Finally a tool that understands I run three different businesses with different cards for each. The entity-level tracking alone is worth it."',
                name: 'Marcus T.',
                role: 'Entrepreneur · Lincoln, NE',
                initials: 'MT'
              },
              {
                text: '"I travel for work constantly. CardPilot mapped out exactly how to hit United status using my existing cards. I didn\'t need a new card — just a better strategy."',
                name: 'Jennifer K.',
                role: 'Consultant · Kansas City, MO',
                initials: 'JK'
              },
            ].map((t, i) => (
              <div className="testimonial" key={i}>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Get Early Access</div>
          <h2 className="section-title">Ready to stop leaving<br />money on the table?</h2>
          <p className="section-sub">
            Join the waitlist and be the first to access CardPilot when we launch.
            Free tier available for everyone.
          </p>
          <WaitlistForm dark />
          <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
            No spam. No credit card. Just smarter spending.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="nav-logo">Card<span style={{ color: '#60a5fa' }}>Pilot</span></div>
              <p>The smartest way to manage your credit card portfolio. Built in Nebraska.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#how-it-works">How It Works</a></li>
                  <li><a href="#business">For Business</a></li>
                  <li><a href="https://cardpilot-iota.vercel.app" target="_blank" rel="noopener noreferrer">Try the App</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li><a href="mailto:hello@mycardpilot.com">Contact Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} CardPilot LLC. All rights reserved. · Omaha, Nebraska</p>
            <p>Not affiliated with any credit card issuer. Always read card terms before applying.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
