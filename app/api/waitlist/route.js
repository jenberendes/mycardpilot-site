// Receives waitlist signups from the site and adds them as contacts in GoHighLevel (GHL),
// tagged "suited-waitlist". The GHL access key and sub-account id live in Vercel env vars
// GHL_API_TOKEN and GHL_LOCATION_ID (see docs/waitlist-ghl.md), never in the code.

const GHL_API = 'https://services.leadconnectorhq.com'
const GHL_VERSION = '2021-07-28'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

async function ghl(path, token, body) {
  const res = await fetch(`${GHL_API}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Version: GHL_VERSION,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => null)
  if (!res.ok) throw new Error(`GHL ${path} responded ${res.status}`)
  return data
}

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

  const token = process.env.GHL_API_TOKEN
  const locationId = process.env.GHL_LOCATION_ID
  if (!token || !locationId) {
    console.error('GHL_API_TOKEN or GHL_LOCATION_ID is not set')
    return Response.json({ ok: false, error: 'Signup is temporarily unavailable.' }, { status: 503 })
  }

  const where = body.source === 'footer' ? 'footer' : 'hero'

  try {
    // Create the contact, or find the existing one with this email.
    const data = await ghl('/contacts/upsert', token, {
      locationId,
      email,
      source: 'mycardpilot.com waitlist',
    })
    const contactId = data?.contact?.id
    if (!contactId) throw new Error('GHL upsert returned no contact id')

    // Add tags without removing any the contact already has.
    await ghl(`/contacts/${contactId}/tags`, token, {
      tags: ['suited-waitlist', `suited-waitlist-${where}`],
    })
    return Response.json({ ok: true })
  } catch (err) {
    console.error('Waitlist save failed:', err.message)
    return Response.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 502 })
  }
}
