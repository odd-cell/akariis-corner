import { games } from '@/data/games'
import GameCard from '@/components/games/GameCard'

export const metadata = {
  title: 'Games | Akarii\'s Corner',
  description: 'Check out my game development projects and experiments',
}

export default function GamesPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="font-oswald text-4xl mb-8">Games</h1>
        
        <div className="bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-900/10 dark:to-blue-900/10 rounded-3xl shadow-lg p-8 border border-violet-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 