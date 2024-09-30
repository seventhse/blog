import { getArticleCategory, getArticlesByCategory } from '@/api/article.ts'
import { ArticleList } from '@/components/article-list.tsx'
import { CategoryTab } from '@/components/category-tab.tsx'

export async function generateStaticParams() {
  const categoryes = await getArticleCategory()
  return categoryes.map(item => ({
    slug: item.value,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const categoryes = await getArticleCategory()
  const articles = await getArticlesByCategory(params.slug)
  return (
    <div className="container-px">
      <header className="my-3">
        <CategoryTab slug={params.slug} categoryes={categoryes} />
      </header>
      <main className="size-full mx-auto flex flex-col gap-y-3">
        <ArticleList articles={articles} />
      </main>
    </div>
  )
}
