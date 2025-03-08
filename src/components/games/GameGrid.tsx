'use client'

import Image from 'next/image'
import Link from 'next/link'
import { games } from '@/data/games'

export default function GameGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {games.map((game) => (
        <Link
          key={game.id}
          href={game.url}
          target="_blank"
          className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="relative h-48 w-full">
            <Image
              src={game.coverImage}
              alt={game.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-oswald text-2xl">{game.title}</h2>
              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 rounded-full text-sm">
                {game.status}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {game.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {game.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 