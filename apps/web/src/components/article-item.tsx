import Link from 'next/link'
import { Calendar, Timer } from 'lucide-react'

export interface ArticleItemProps {
  title: string
  createdAt: string
  readTime: string
  href: string
}

export function ArticleItem(props: ArticleItemProps) {
  const { title, createdAt, readTime, href } = props
  return (
    <section className="p-3">
      <h3>
        <Link href={href} title={title} className="text-lg">
          {title}
        </Link>
      </h3>
      <div className="flex gap-x-3 text-gray-400">
        <div className="flex items-center gap-x-1">
          <Calendar size={14} />
          <span className="text-sm">{createdAt}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <Timer size={14} />
          <span className="text-sm">{readTime}</span>
        </div>
      </div>
    </section>
  )
}
