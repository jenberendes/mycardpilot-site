import LegalPage, { BRAND, CONTACT_EMAIL } from '../legal'

export const metadata = {
  title: `Privacy Policy — ${BRAND}`,
  description: `How ${BRAND} collects and uses your information.`,
}

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="November 21, 2026">
      <p>
        {BRAND} is in early development. Right now this website does one thing: lets you join our
        waitlist. This page explains what we collect and what we do with it.
      </p>

      <h2>What we collect</h2>
      <p>
        When you join the waitlist we collect the email address you enter. We do not ask for card
        numbers, bank logins or any financial account information on this website.
      </p>
      <p>
        Like most websites, our hosting provider automatically records basic technical information
        (such as your browser type and IP address) to keep the site running and secure.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To tell you when {BRAND} opens access and to send occasional product updates.</li>
        <li>To keep the website secure and working properly.</li>
      </ul>
      <p>We do not sell or rent your email address to anyone.</p>

      <h2>Who we share it with</h2>
      <p>
        We use trusted service providers to host this website and to store and send waitlist emails.
        They may process your information only to provide those services to us.
      </p>

      <h2>Your choices</h2>
      <p>
        Every email we send includes an unsubscribe link. You can also ask us to remove your email
        address at any time by writing to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>When the app launches</h2>
      <p>
        The {BRAND} app will handle more information than this website does. We will update this
        policy before the app launches, and the app will explain what it collects before you use it.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  )
}
