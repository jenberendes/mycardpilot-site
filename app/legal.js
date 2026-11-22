/* Shared layout for the Privacy Policy and Terms pages. */
export const BRAND = 'Suited'
export const CONTACT_EMAIL = 'hello@mycardpilot.com'

export default function LegalPage({ title, updated, children }) {
  return (
    <>
      <nav>
        <div className="container nav-inner">
          <a href="/" className="nav-logo">{BRAND}</a>
          <ul className="nav-links">
            <li><a href="/#join"><span className="btn btn-plum btn-sm">Join Waitlist</span></a></li>
          </ul>
        </div>
      </nav>

      <main className="section on-cream">
        <div className="container legal">
          <div className="eyebrow">Last updated {updated}</div>
          <h1 className="headline">{title}</h1>
          <div className="legal-body">{children}</div>
          <p className="legal-back"><a href="/">← Back to home</a></p>
        </div>
      </main>
    </>
  )
}
