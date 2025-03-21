import { getJournalPostBySlug } from '@/lib/content'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import StyledMarkdown from '@/components/markdown/StyledMarkdown'
import { ContentItem, JournalFrontmatter } from '@/types/content'

interface JournalPostPageProps {
  params: {
    year: string
    slug: string
  }
}

export default async function JournalPostPage({ params }: JournalPostPageProps) {
  const post = await getJournalPostBySlug([params.year, params.slug])

  if (!post) {
    notFound()
  }

  const { frontmatter, content } = post

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <time dateTime={frontmatter.date}>{new Date(frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</time>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex gap-2">
              {frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {frontmatter.coverImage && (
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            className="object-cover"
            unoptimized={frontmatter.coverImage.startsWith('http')}
          />
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none">
        <StyledMarkdown>{content}</StyledMarkdown>
      </div>
    </article>
  )
} 