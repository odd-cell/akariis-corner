import Image from 'next/image'
import Link from 'next/link'
import { Game } from '@/types/game'

export default function GameCard({ title, description, coverImage, url, status, technologies }: Game) {
  return (
    <div className="bg-white/60 dark:bg-black/5 rounded-2xl shadow-sm backdrop-blur-sm border border-gray-100 dark:border-gray-800 overflow-hidden group hover:shadow-md transition-shadow">
      <Link href={url} className="block">
        <div className="relative h-48">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-200 rounded-full text-sm border border-teal-200">
              {status}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-oswald text-xl mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-200 rounded-full text-xs border border-violet-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
} 