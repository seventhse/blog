import { getArticleDetail, getArticles } from '@/api/article.ts'

export async function generateStaticParams() {
  const categoryes = await getArticles()
  return categoryes.map(item => ({
    slug: item.slug || item.title,
  }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleDetail(params.slug)
  return (
    <div className="container py-12 px-3 lg:px-0 mx-auto">
      {/* <header className="sticky top-[80px] border-b-primary border-b"> */}
      {/*  <h3 className="text-xl"> */}
      {/*    {article?.title} */}
      {/*  </h3> */}
      {/* </header> */}
      <article className="size-full prose lg:prose-lg dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: article?.content || '' }} />
      </article>
    </div>
  )
}
