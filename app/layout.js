import './globals.css'

export const metadata = {
  title: 'CardPilot — Always know which card to use',
  description: 'You\'ve got a few cards. CardPilot tells you the right one for every purchase — so you stop leaving rewards behind without thinking about it.',
  openGraph: {
    title: 'CardPilot — Always know which card to use',
    description: 'The smartest way to use the cards you already have.',
    url: 'https://mycardpilot.com',
    siteName: 'CardPilot',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Schibsted+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
