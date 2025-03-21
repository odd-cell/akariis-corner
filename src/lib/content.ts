import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ContentItem, GameFrontmatter, JournalFrontmatter } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'src', 'content');

export async function getJournalPostBySlug(slug: string[]): Promise<ContentItem<JournalFrontmatter> | null> {
  try {
    const [year, slug_part] = slug;
    const filename = `${year}-${slug_part}.md`;
    const fullPath = path.join(contentDirectory, 'journal', year, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { content, frontmatter: data as JournalFrontmatter };
  } catch (error) {
    console.error('Error reading journal post:', error);
    return null;
  }
}

export async function getGameBySlug(slug: string): Promise<ContentItem<GameFrontmatter> | null> {
  try {
    // Try metadata.json first
    const jsonPath = path.join(contentDirectory, 'games', slug, 'metadata.json');
    if (fs.existsSync(jsonPath)) {
      const fileContents = fs.readFileSync(jsonPath, 'utf8');
      const data = JSON.parse(fileContents);
      return { content: '', frontmatter: data as GameFrontmatter };
    }

    // Try index.md as fallback
    const mdPath = path.join(contentDirectory, 'games', slug, 'index.md');
    if (fs.existsSync(mdPath)) {
      const fileContents = fs.readFileSync(mdPath, 'utf8');
      const { data, content } = matter(fileContents);
      return { content, frontmatter: data as GameFrontmatter };
    }

    return null;
  } catch (error) {
    console.error('Error reading game:', error);
    return null;
  }
}

export interface GameWithSlug extends ContentItem<GameFrontmatter> {
  slug: string;
}

export async function getGames(): Promise<GameWithSlug[]> {
  const gamesDirectory = path.join(contentDirectory, 'games');
  const gameDirectories = fs.readdirSync(gamesDirectory);
  
  const games = gameDirectories.map(dir => {
    try {
      // Try metadata.json first
      const jsonPath = path.join(gamesDirectory, dir, 'metadata.json');
      if (fs.existsSync(jsonPath)) {
        const fileContents = fs.readFileSync(jsonPath, 'utf8');
        const data = JSON.parse(fileContents);
        return { 
          content: '', 
          frontmatter: data as GameFrontmatter,
          slug: dir
        };
      }

      // Try index.md as fallback
      const mdPath = path.join(gamesDirectory, dir, 'index.md');
      if (fs.existsSync(mdPath)) {
        const fileContents = fs.readFileSync(mdPath, 'utf8');
        const { data, content } = matter(fileContents);
        return { 
          content, 
          frontmatter: data as GameFrontmatter,
          slug: dir
        };
      }

      return null;
    } catch (error) {
      console.error(`Error reading game ${dir}:`, error);
      return null;
    }
  }).filter((game): game is GameWithSlug => game !== null);
  
  return games;
}

function generateSlugFromPath(yearPath: string, filename: string): string {
  const year = path.basename(yearPath);
  const slug = filename.replace(`${year}-`, '').replace('.md', '');
  return `${year}/${slug}`;
}

export async function getJournalPosts(): Promise<(ContentItem<JournalFrontmatter> & { slug: string })[]> {
  const journalDirectory = path.join(contentDirectory, 'journal');
  const years = fs.readdirSync(journalDirectory);
  
  const posts: (ContentItem<JournalFrontmatter> & { slug: string })[] = [];
  
  for (const year of years) {
    const yearPath = path.join(journalDirectory, year);
    if (!fs.statSync(yearPath).isDirectory()) continue;
    
    const files = fs.readdirSync(yearPath);
    
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      
      const fullPath = path.join(yearPath, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = generateSlugFromPath(yearPath, file);
      
      // Skip hidden posts
      if (data.hidden) continue;
      
      posts.push({ content, frontmatter: data as JournalFrontmatter, slug });
    }
  }
  
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
} 