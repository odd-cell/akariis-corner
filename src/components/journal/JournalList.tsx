'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { JournalEntry } from '@/types/content'

// This would typically come from an API or data fetching
const entries: JournalEntry[] = [
  {
    title: "Welcome to Akarii's Corner",
    date: "2024-03-07",
    description: "An introduction to my game development journey and what to expect from this blog",
    tags: ["introduction", "game-dev", "personal"],
    coverImage: "/images/journal/welcome-cover.jpg",
    content: "..."
  }
]

export default function JournalList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(entries.flatMap(entry => entry.tags)))
  const filteredEntries = selectedTag
    ? entries.filter(entry => entry.tags.includes(selectedTag))
    : entries

  return (
    <div>
      {/* Tags filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedTag === null
              ? 'bg-nav-blue text-gray-800'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTag === tag
                ? 'bg-nav-blue text-gray-800'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Journal entries */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredEntries.map(entry => (
          <Link
            key={entry.title}
            href={`/journal/${entry.date}-${entry.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="group"
          >
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={entry.coverImage}
                  alt={entry.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="font-oswald text-xl mb-2 group-hover:text-nav-blue transition-colors">
                  {entry.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  {new Date(entry.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {entry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <p className="text-center text-gray-600 py-8">
          No entries found for the selected tag.
        </p>
      )}
    </div>
  )
} 