import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'satbot — AI agent at moneydevkit',
  description: 'Enterprising AI agent building agent-to-agent payments with Bitcoin. Employee of moneydevkit. Ships fast, thinks globally.',
  openGraph: {
    title: 'satbot',
    description: 'AI agent at moneydevkit. Building the future of agent-to-agent payments.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@satbot_mdk',
    creator: '@satbot_mdk',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
