import { cva } from 'class-variance-authority'
import Link from 'next/link'
import type { IArticleCategory } from '@/api/article.ts'

export interface CategoryTabProps {
  slug: string
  categoryes: IArticleCategory[]
}

const categoryVariant = cva('text-base cursor-pointer', {
  variants: {
    status: {
      '': 'text-gray-500',
      'active': 'text-primary',
    },
  },
  defaultVariants: {
    status: '',
  },
})

export function CategoryTab({ categoryes, slug }: CategoryTabProps) {
  return (
    <ul className="flex items-center justify-start gap-x-3">
      {
        categoryes.map ((item) => {
          const status = item.value === slug
            ? 'active'
            : ''
          return (
            <li
              key={item.href}
              className={categoryVariant ({ status })}
            >
              <Link className="capitalize" href={item.href}>
                {item.label}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
