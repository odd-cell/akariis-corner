'use client'

import GameCard from './GameCard'

interface Game {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  status: string;
  technologies: string[];
}

interface GameGridProps {
  games: Game[]
}

export default function GameGrid({ games }: GameGridProps) {
  return (
    <div className="bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-900/10 dark:to-blue-900/10 rounded-3xl shadow-lg p-8 border border-violet-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  )
} 