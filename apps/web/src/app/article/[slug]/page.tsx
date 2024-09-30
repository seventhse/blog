import { getArticles } from '@/api/article.ts'

export async function generateStaticParams() {
  const categoryes = await getArticles()
  return categoryes.map(item => ({
    slug: item.slug || item.title,
  }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <article className="container-px">
      <header className="mt-6">
        <h3>
          &lg;
          {params.slug}
        </h3>
      </header>
      <main>
        article page
      </main>
    </article>
  )
}
