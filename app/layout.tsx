import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/redux/provider'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'ANTI_VJTI',
  description: 'An anyonomous platform for VJTI students',
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png'],
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
