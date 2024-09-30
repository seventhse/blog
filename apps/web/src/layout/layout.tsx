import 'jotai-devtools/styles.css'
import type { PropsWithChildren } from 'react'
import { JotaiProvider } from '../providers/jotai-provider.tsx'
import { getEnv } from '../utils'
import { Header } from './header.tsx'
import { Footer } from './footer.tsx'
import { getMenus } from '@/api/menus.ts'

function RootLayout({ children }: PropsWithChildren) {
  const avatar = getEnv('NEXT_PUBLIC_AVATAR')
  const menus = getMenus()
  return (
    <>
      <JotaiProvider />
      <div className="w-screen min-h-screen flex flex-col gap-y-3 mx-auto max-w-[1024px]">
        <Header menus={menus} avatar={avatar!} />
        <main className="container mx-auto flex-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default RootLayout
