import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  title: string
  description: string
  date: string
  image?: string
  slug: string
  category: string
}

export default function PostCard({ title, description, date, image, slug, category }: PostCardProps) {
  // Format the date for display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 dark:from-cyan-600/10 dark:to-blue-700/10 rounded-3xl transform rotate-1 transition-transform duration-300 group-hover:rotate-2"></div>
      <div className="relative bg-white/60 dark:bg-black/5 rounded-3xl shadow-lg backdrop-blur-sm border border-gray-100/50 dark:border-gray-800/50 overflow-hidden group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
        <Link href={`/journal/${slug}`} className="block">
          <div className="relative h-48">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transform transition-all duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-blue-200 dark:from-cyan-900 dark:to-blue-800 animate-gradient" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-2 right-2">
              <span className="px-4 py-1.5 bg-white/90 dark:bg-black/50 text-cyan-600 dark:text-cyan-300 rounded-full text-sm font-medium border border-cyan-200/50 backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-105">
                {category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{formattedDate}</div>
            <h3 className="font-oswald text-xl mb-3 text-gray-800 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
          </div>
        </Link>
      </div>
    </div>
  )
} 