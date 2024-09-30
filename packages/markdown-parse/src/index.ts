import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import type { Processor } from 'unified'
import { unified } from 'unified'
import extract from 'remark-extract-frontmatter'
import frontmatter from 'remark-frontmatter'
import { parse as yamlParse } from 'yaml'
import remarkGfm from 'remark-gfm'
import tabBlocks from 'docusaurus-remark-plugin-tab-blocks'
import remarkReadtime from './plugins/remark-readtime.ts'

let processor: Processor<any, any, any, any, any> | null = null

export function createProcessor() {
  if (!processor) {
    processor = unified()
      .use(remarkParse)
      .use(tabBlocks)
      .use(frontmatter, ['yaml'])
      .use(extract, { yaml: yamlParse })
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeStringify)
      .use(remarkReadtime, {
        wordsPerMinute: 100,
      })
  }
  return processor
}

export interface ParsedMarkdownResult {
  metadata: {
    title: string
    slug: string
    createdAt: string
    readTime: string
    category: string
    fixed: boolean
  }
  content: string
}

async function parseMarkdown(content: string): Promise<ParsedMarkdownResult> {
  const processor = createProcessor()
  const res = await processor.process(content)

  return {
    metadata: res.data as ParsedMarkdownResult['metadata'],
    content: res.value as ParsedMarkdownResult['content'],
  }
}

export default parseMarkdown
