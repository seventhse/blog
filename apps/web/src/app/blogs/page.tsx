import { getFixedArticles } from '@/api/article.ts'
import { ArticleList } from '@/components/article-list.tsx'

export default async function Page() {
  const articles = await getFixedArticles()
  return (
    <div className="container-px">
      <main className="flex flex-col gap-y-3 mt-6">
        <ArticleList articles={articles} />
      </main>
    </div>
  )
}
