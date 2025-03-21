import { getGames, GameWithSlug } from '@/lib/content'
import GameGrid from '@/components/games/GameGrid'

export const metadata = {
  title: 'Games | Akarii\'s Corner',
  description: 'Check out my game development projects and experiments',
}

export default async function GamesPage() {
  const games = await getGames()
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Games</h1>
      {games.length > 0 ? (
        <GameGrid games={games.map((game: GameWithSlug) => ({
          id: game.slug,
          title: game.frontmatter.title,
          description: game.frontmatter.description,
          coverImage: game.frontmatter.coverImage,
          status: game.frontmatter.status,
          technologies: game.frontmatter.technologies
        }))} />
      ) : (
        <div className="bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-900/10 dark:to-blue-900/10 rounded-3xl shadow-lg p-8 border border-violet-100">
          <p className="text-center text-gray-600 dark:text-gray-400">
            No games available yet. Check back soon!
          </p>
        </div>
      )}
    </main>
  )
} 