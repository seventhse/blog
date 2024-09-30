export interface MarkdownPreviewProps {
  content: string
}

export function MarkdownPreview(props: MarkdownPreviewProps) {
  const { content } = props
  return (
    // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
    <div className="w-full prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: content }} />
  )
}
