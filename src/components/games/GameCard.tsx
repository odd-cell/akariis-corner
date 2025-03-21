'use client'

import Image from 'next/image'
import Link from 'next/link'

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  status: string;
  technologies: string[];
}

export default function GameCard({ id, title, description, coverImage, status, technologies }: GameCardProps) {
  return (
    <Link href={`/games/${id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
        <div className="aspect-video relative">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-100">
              {status}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
} 