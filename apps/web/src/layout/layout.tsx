import 'jotai-devtools/styles.css'
import type { PropsWithChildren } from 'react'
import { JotaiProvider } from '../providers/jotai-provider.tsx'
import { getEnv } from '../utils'
import { Header } from './header.tsx'
import { Footer } from './footer.tsx'

const menus = [
  { name: 'Home', href: '/' },
  { name: 'Articles', href: '/articles' },
  { name: 'About', href: '/about' },
]

function RootLayout({ children }: PropsWithChildren) {
  const avatar = getEnv('NEXT_PUBLIC_AVATAR')
  return (
    <>
      <JotaiProvider />
      <div className="min-h-screen flex flex-col gap-y-3">
        <Header menus={menus} avatar={avatar!} />
        <main className="container mx-auto flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default RootLayout
