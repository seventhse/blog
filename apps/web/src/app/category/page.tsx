import { getArticleCategory, getArticlesByCategory } from '@/api/article.ts'
import { ArticleList } from '@/components/article-list.tsx'
import { CategoryTab } from '@/components/category-tab.tsx'

export async function generateStaticParams() {
  return await getArticleCategory()
}

export default async function Page() {
  const categoryes = await getArticleCategory()
  const articles = await getArticlesByCategory('all')

  return (
    <div className="container-px">
      <header className="my-3">
        <CategoryTab slug="all" categoryes={categoryes} />
      </header>
      <main className="size-full mx-auto flex flex-col gap-y-3">
        <ArticleList articles={articles} />
      </main>
    </div>
  )
}
