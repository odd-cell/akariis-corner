export interface JournalEntry {
  title: string
  date: string
  description: string
  tags: string[]
  coverImage: string
  content: string
}

export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  url: string
  date: string
}

export interface VideoLibrary {
  letsPlays: Video[]
  analysis: Video[]
  development: Video[]
}

export interface DevLogEntry {
  date: string
  title: string
  content: string
}

export interface GameProject {
  title: string
  status: 'in-development' | 'completed' | 'on-hold'
  description: string
  images: string[]
  demoUrl?: string
  devLogs: DevLogEntry[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface AboutInfo {
  bio: string
  goals: string[]
  skills: Skill[]
}

export interface FeaturedItem {
  id: number
  title: string
  description: string
  image: string
  link: string
  type: 'article' | 'game' | 'video'
} 