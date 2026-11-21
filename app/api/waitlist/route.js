// Receives waitlist signups from the site and adds them to the Google Sheet.
// The sheet's private web-app address lives in the Vercel env var WAITLIST_SHEET_URL
// (see docs/waitlist-google-sheet.md), so it never appears in the code or the browser.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: 'Bad request' }, { status: 400 })
  }

  // Hidden "website" field: real people leave it empty, spam bots fill it in.
  if (body.website) return Response.json({ ok: true })

  const email = String(body.email || '').trim().toLowerCase()
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const sheetUrl = process.env.WAITLIST_SHEET_URL
  if (!sheetUrl) {
    console.error('WAITLIST_SHEET_URL is not set')
    return Response.json({ ok: false, error: 'Signup is temporarily unavailable.' }, { status: 503 })
  }

  try {
    const res = await fetch(sheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ email, source: String(body.source || '').slice(0, 40) }),
      redirect: 'follow',
    })
    const data = await res.json().catch(() => null)
    if (!res.ok || !data?.ok) throw new Error(`Sheet responded ${res.status}`)
    return Response.json({ ok: true })
  } catch (err) {
    console.error('Waitlist save failed:', err)
    return Response.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 502 })
  }
}
