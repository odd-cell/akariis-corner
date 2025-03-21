export interface JournalFrontmatter {
  title: string
  date: string
  description: string
  tags: string[]
  coverImage?: string
}

export interface JournalPost extends JournalFrontmatter {
  slug: string
  content: string
} 