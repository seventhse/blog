import { ArticleItem } from './article-item.tsx'
import type { IArticleItem } from '@/api/article.ts'

interface ArticleListProps {
  articles: IArticleItem[]
}

export function ArticleList(props: ArticleListProps) {
  return props.articles.map((item) => {
    return (
      <ArticleItem
        key={item.href}
        title={item.title}
        createdAt={item.createdAt}
        readTime={item.readTime}
        href={item.href}
      />
    )
  })
}
