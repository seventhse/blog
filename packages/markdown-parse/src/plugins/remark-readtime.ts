import type { Plugin } from 'unified'

const WORDS_PER_MINUTE = 200

function extractTextFromNode(node: any): string {
  if (!node || typeof node === 'string') {
    return node || ''
  }

  if (Array.isArray(node.children)) {
    return node.children.map(extractTextFromNode).join(' ')
  }

  return node.value || ''
}

function countWords(text: string): number {
  const words = text.match(/\w+/g)
  return words ? words.length : 0
}

interface RemarkReadtimeOptions {
  wordsPerMinute?: number
  format?: (time: string) => string
}

const remarkReadtime: Plugin<[RemarkReadtimeOptions]> = (options?: RemarkReadtimeOptions) => {
  return function (tree, file) {
    const text = extractTextFromNode(tree)
    const wordCount = countWords(text)
    const readTime = Math.ceil(wordCount / (options?.wordsPerMinute || WORDS_PER_MINUTE)).toString()

    file.data.readTime = options?.format ? options.format(readTime) : `~ ${readTime}min`
  }
}

export default remarkReadtime
