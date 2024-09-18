import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import Layout from '../layout/layout'
import '../styles/tailwind.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className="w-full min-h-screen bg-page">
        <ThemeProvider attribute="class">
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
