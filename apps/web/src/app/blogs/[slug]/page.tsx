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
