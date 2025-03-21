import type { Metadata } from 'next'
import { Oswald, Noto_Sans, Open_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })
const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-noto' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans' })

export const metadata: Metadata = {
  title: "Akarii's Corner",
  description: 'A serene game design journal showcasing development journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${notoSans.variable} ${openSans.variable} font-opensans bg-body-white dark:bg-gray-900 dark:text-white min-h-screen flex flex-col`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
} 