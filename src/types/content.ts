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

export interface ContentItem<T> {
  content: string;
  frontmatter: T;
}

export interface JournalFrontmatter {
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  tags?: string[];
  hidden?: boolean;
}

export interface GameModel {
  name: string;
  description: string;
  objFile: string;
}

export interface GameFrontmatter {
  title: string;
  description: string;
  coverImage: string;
  status: string;
  technologies: string[];
  features: string[];
  models?: GameModel[];
  platforms: string[];
  classes: string[];
  elements: string[];
}

export interface Game extends ContentItem<GameFrontmatter> {} 