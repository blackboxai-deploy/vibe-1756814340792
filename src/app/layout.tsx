import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DigitalBloom - Professional Logo Design',
  description: 'Professional logo design for DigitalBloom - Digital Marketing and Google My Business specialists. Modern, scalable logo system for all your branding needs.',
  keywords: 'logo design, digital marketing, GMB, Google My Business, branding, DigitalBloom',
  authors: [{ name: 'DigitalBloom' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}