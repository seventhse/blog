import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import parseMarkdown from '@blog/markdown-parse/src'

export interface IArticleItem {
  slug: string
  title: string
  createdAt: string
  content: string
  readTime: string
  href: string
  category: string | 'unkown'
  fixed: boolean
}

export interface IArticleCategory {
  label: string
  value: string
  href: string
}

const __filename = fileURLToPath(import.meta.url) // Get full file path
export const __dirname = path.dirname(__filename)

const rootPath = path.resolve(__dirname, '../../blogs')

export async function getArticles(): Promise<IArticleItem[]> {
  const res = await fs.readdir(rootPath)

  return await Promise.all(res.map(async (item) => {
    const filePath = path.resolve(rootPath, item)
    const stat = await fs.stat(filePath)
    if (!stat.isFile()) {
      return null
    }
    const file = await fs.readFile(filePath)
    const content = file.toString('utf-8')
    const parsed = await parseMarkdown(content)
    return {
      ...parsed,
      ...parsed.metadata,
      category: parsed.metadata.category || 'unkown',
      href: parsed.metadata.slug ? `/blogs/${parsed.metadata.slug}` : `/blogs/${parsed.metadata.title}`,
    }
  }).filter(item => item)) as unknown as Promise<IArticleItem[]>
}

export async function getFixedArticles(): Promise<IArticleItem[]> {
  const articles = await getArticles()
  return articles.filter(article => article.fixed)
}

const DEFAULT_CATEGORY = {
  label: 'All',
  value: 'all',
  href: `/category/all`,
}

export async function getArticleCategory(): Promise<IArticleCategory[]> {
  const articles = await getArticles()
  const categoryes = articles.reduce<string[]>((pre, item) => {
    if (!pre.includes(item.category)) {
      pre.push(item.category)
    }
    return pre
  }, [])
  const dynamiCategoryes = categoryes.map<IArticleCategory>((item) => {
    return {
      label: item,
      value: item,
      href: `/category/${item}`,
    }
  })
  return [
    DEFAULT_CATEGORY,
    ...dynamiCategoryes,
  ]
}

export async function getArticlesByCategory(category: string = 'all'): Promise<IArticleItem[]> {
  const articles = await getArticles()
  if (category === 'all') {
    return articles
  }
  return articles.filter(item => item.category === category)
}

export async function getArticleDetail(slug: string): Promise<IArticleItem | null> {
  const articles = await getArticles()
  const article = articles.find(item => item.slug === slug || item.title === slug)
  if (article) {
    return article
  }
  return null
}
