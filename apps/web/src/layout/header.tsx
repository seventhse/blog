'use client'

import Link from 'next/link'
import { Menu } from './menu.tsx'
import ThemeChanger from './theme-changer.tsx'

export type Menus = Array<{
  name: string
  href: string
}>

interface HeaderProps {
  menus: Menus
  avatar: string
}

export function Header({ menus, avatar }: HeaderProps) {
  return (
    <header className="p-3 sticky top-0 backdrop-blur-sm bg-white/30 dark:bg-transparent dark:shadow">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="min-w-[36px]">
          <Link href="/">
            <img
              className="shadow-lg rounded-[10px] size-[36px]"
              src={avatar}
              alt="avatar"
            />
          </Link>
        </div>
        <Menu menus={menus} />
        <div className="flex items-center justify-end">
          <ThemeChanger />
        </div>
      </nav>
    </header>
  )
}
