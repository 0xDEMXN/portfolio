import './globals.css'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const kanit =  Kanit({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Demetrio Montalto - Web Developer',
  description: 'Web Developer, Next.js, React, TypeScript, TailwindCSS, WordPress, PHP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={kanit.className} lang="en">
      <body>{children}</body>
    </html>
  )
}
