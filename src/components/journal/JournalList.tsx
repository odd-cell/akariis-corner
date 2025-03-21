'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { JournalEntry } from '@/types/content'
import PostCard from './PostCard'

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

interface Post {
  title: string
  description: string
  date: string
  image?: string
  slug: string
  category: string
}

interface JournalListProps {
  posts: Post[]
}

export default function JournalList({ posts }: JournalListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(entries.flatMap(entry => entry.tags)))
  const filteredEntries = selectedTag
    ? entries.filter(entry => entry.tags.includes(selectedTag))
    : entries

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-500/10 dark:from-teal-600/5 dark:to-cyan-700/5 rounded-[2.5rem] transform -rotate-1"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-violet-500/10 dark:from-blue-600/5 dark:to-violet-700/5 rounded-[2.5rem] transform rotate-1"></div>
      <div className="relative bg-white/60 dark:bg-black/10 rounded-[2rem] shadow-xl backdrop-blur-sm p-8 border border-teal-100/50 dark:border-teal-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
} 