import 'jotai-devtools/styles.css'
import type { PropsWithChildren } from 'react'
import { JotaiProvider } from '../providers/jotai-provider.tsx'
import { Header } from './header.tsx'
import { Footer } from './footer.tsx'

const menus = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
  { name: 'About', href: '/about' },
]

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <JotaiProvider />
      <div className="min-h-screen flex flex-col gap-y-3">
        <Header menus={menus} />
        <main className="container mx-auto min-h-[1200px]">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default RootLayout
