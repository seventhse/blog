'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../utils'

function isActive(href: string, pathname: string) {
  if (href === '/') {
    return pathname === '/'
  }

  if (pathname.startsWith(href)) {
    return pathname === href || pathname[href.length] === '/'
  }

  return false
}

export function Menu({ menus }: { menus: Array<{
  name: string
  href: string
}> }) {
  const pathname = usePathname()

  return (
    <ul className="mx-auto flex gap-x-6 rounded-xl shadow p-3 dark:shadow-transparent">
      {menus.map((item) => {
        const activeClass = isActive(item.href, pathname) ? 'text-primary' : ''
        return (
          <li key={item.href} className={cn('text-sm duration-200', activeClass)}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
