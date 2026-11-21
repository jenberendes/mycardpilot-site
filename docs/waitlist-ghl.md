# Waitlist → GoHighLevel setup

The waitlist form sends each signup to `/api/waitlist`, which creates (or finds) a contact in
the **Aesthetic Finds** GHL sub-account and adds the tags `cardpilot-waitlist` plus
`cardpilot-waitlist-hero` or `cardpilot-waitlist-footer` (which box they used).

Two Vercel environment variables connect it. Neither belongs in the code.

| Name | Value |
| --- | --- |
| `GHL_LOCATION_ID` | `dcEP0hAcCJEtnW4G7zd5` (the Aesthetic Finds sub-account id; not secret) |
| `GHL_API_TOKEN` | The Private Integration token (secret: treat it like a password) |

## Getting the token

GHL → switch to **Aesthetic Finds** → **Settings → Private Integrations** → the integration
named **CardPilot website waitlist** (scopes: View Contacts, Edit Contacts). The token is shown
once when the integration is created; if it's lost, use **Rotate** to get a new one and update
Vercel.

## Adding them to Vercel

Vercel → project **mycardpilot-site** → **Settings → Environment Variables** → add both,
ticking **Production** and **Preview**. Then redeploy (or push any change).
