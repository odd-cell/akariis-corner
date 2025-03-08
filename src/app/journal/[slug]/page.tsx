import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JournalEntry } from '@/types/content'

// This would typically come from an API or data fetching
const entry: JournalEntry = {
  title: "Welcome to Akarii's Corner",
  date: "2024-03-07",
  description: "An introduction to my game development journey and what to expect from this blog",
  tags: ["introduction", "game-dev", "personal"],
  coverImage: "/images/journal/welcome-cover.jpg",
  content: "..."
}

export default function JournalEntryPage({ params }: { params: { slug: string } }) {
  // In a real app, we would fetch the entry based on the slug
  if (!entry) {
    notFound()
  }

  return (
    <article className="flex-grow container mx-auto px-4 py-8">
      <Link
        href="/journal"
        className="inline-block mb-8 text-gray-600 hover:text-gray-900 transition-colors"
      >
        ← Back to Journal
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={entry.coverImage}
            alt={entry.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="font-oswald text-4xl mb-4">{entry.title}</h1>
        
        <div className="flex items-center gap-4 mb-8">
          <time className="text-gray-600">
            {new Date(entry.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <div className="flex gap-2">
            {entry.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* In a real app, this would be rendered markdown content */}
          <p className="text-gray-700">{entry.content}</p>
        </div>
      </div>
    </article>
  )
} 