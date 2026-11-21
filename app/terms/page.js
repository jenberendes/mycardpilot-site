import LegalPage, { BRAND, CONTACT_EMAIL } from '../legal'

export const metadata = {
  title: `Terms of Use — ${BRAND}`,
  description: `The terms for using the ${BRAND} website.`,
}

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="November 21, 2026">
      <p>
        These terms cover your use of this website. By using it or joining the waitlist, you agree
        to them.
      </p>

      <h2>The waitlist</h2>
      <p>
        Joining the waitlist is free and does not guarantee access to {BRAND} or any particular
        launch date, feature or price. You can leave the waitlist at any time.
      </p>

      <h2>Not financial advice</h2>
      <p>
        {BRAND} is an informational tool. Nothing on this website is financial, legal or tax advice,
        and we are not a bank, lender or card issuer. Card rewards, fees and terms change often, so
        always read the issuer's current terms before applying for or using a card.
      </p>

      <h2>No affiliation</h2>
      <p>
        {BRAND} is not affiliated with, endorsed by or sponsored by any card issuer or payment
        network. Card and program names belong to their owners and are used only to identify them.
      </p>

      <h2>Examples are illustrative</h2>
      <p>
        Sample numbers, cards and results shown on this website are examples only and are not
        promises of what you will earn.
      </p>

      <h2>Use of the website</h2>
      <p>
        Please don't misuse the website, try to break it, or sign other people up without their
        permission. The content and design of this website belong to {BRAND}.
      </p>

      <h2>No warranty</h2>
      <p>
        This website is provided "as is." To the fullest extent allowed by law, we are not liable for
        any losses arising from your use of it.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as {BRAND} develops. The date at the top shows when they last
        changed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  )
}
