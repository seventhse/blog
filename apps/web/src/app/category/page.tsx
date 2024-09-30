import { redirect } from 'next/navigation'
import { getArticleCategory } from '@/api/article.ts'

export async function generateStaticParams() {
  return await getArticleCategory()
}

export default function Page() {
  redirect('/category/all')
}
