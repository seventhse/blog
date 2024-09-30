export interface IMenuItem {
  name: string
  href: string
}

export function getMenus(): IMenuItem[] {
  return [
    { name: 'Blogs', href: '/blogs' },
    { name: 'Articles', href: '/category' },
  ]
}
