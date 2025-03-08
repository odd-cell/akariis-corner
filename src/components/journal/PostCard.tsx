import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  title: string
  description: string
  date: string
  image: string
  slug: string
  category: string
}

export default function PostCard({ title, description, date, image, slug, category }: PostCardProps) {
  return (
    <div className="bg-white/60 dark:bg-black/5 rounded-2xl shadow-sm backdrop-blur-sm border border-gray-100 dark:border-gray-800 overflow-hidden group hover:shadow-md transition-shadow">
      <Link href={`/journal/${slug}`} className="block">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-200 rounded-full text-sm border border-cyan-200">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</div>
          <h3 className="font-oswald text-xl mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </Link>
    </div>
  )
} 