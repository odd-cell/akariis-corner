import { getJournalPosts } from '@/lib/content'
import JournalList from '@/components/journal/JournalList'

export const metadata = {
  title: 'Journal | Akarii\'s Corner',
  description: 'My thoughts and experiences in game development, art, and content creation',
}

export default async function JournalPage() {
  const posts = await getJournalPosts()
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Journal</h1>
      <JournalList posts={posts.map(post => ({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        date: post.frontmatter.date,
        image: post.frontmatter.coverImage,
        slug: post.slug,
        category: post.frontmatter.tags?.[0] || 'Uncategorized'
      }))} />
    </main>
  )
} 