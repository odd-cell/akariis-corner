import { posts } from '@/data/posts'
import PostCard from '@/components/journal/PostCard'

export const metadata = {
  title: 'Journal | Akarii\'s Corner',
  description: 'My thoughts and experiences in game development, art, and content creation',
}

export default function JournalPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="font-oswald text-4xl mb-8">Journal</h1>
        
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10 rounded-3xl shadow-lg p-8 border border-teal-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 