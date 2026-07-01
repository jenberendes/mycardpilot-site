import './globals.css'

export const metadata = {
  title: 'CardPilot — Stop Leaving Money on the Table',
  description: 'CardPilot tells you exactly which credit card to use for every purchase — maximizing rewards, tracking perks, and managing cards across your household and business.',
  openGraph: {
    title: 'CardPilot — Stop Leaving Money on the Table',
    description: 'The smartest way to manage your credit card portfolio.',
    url: 'https://mycardpilot.com',
    siteName: 'CardPilot',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
