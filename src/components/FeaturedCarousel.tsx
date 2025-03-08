'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FeaturedItem {
  id: number
  title: string
  description: string
  image: string
  link: string
  type: 'article' | 'game' | 'video'
}

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Example featured items - replace with real data
  const featuredItems: FeaturedItem[] = [
    {
      id: 1,
      title: 'Latest Game Development Progress',
      description: 'Check out the latest updates on my current game project',
      image: 'https://placehold.co/1200x600/E6F3F7/1a1a1a?text=Latest+Development+Progress',
      link: '/journal/latest-progress',
      type: 'article'
    },
    {
      id: 2,
      title: 'New Game Demo Available',
      description: 'Try out the latest build of my upcoming game',
      image: 'https://placehold.co/1200x600/F5E6D3/1a1a1a?text=New+Game+Demo',
      link: '/games/demo',
      type: 'game'
    },
    {
      id: 3,
      title: 'Development Vlog #1',
      description: 'Watch the first development vlog of my journey',
      image: 'https://placehold.co/1200x600/D4B494/1a1a1a?text=Development+Vlog+%231',
      link: '/videos/dev-vlog-1',
      type: 'video'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === featuredItems.length - 1 ? 0 : current + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [featuredItems.length])

  const nextSlide = () => {
    setCurrentIndex((current) => 
      current === featuredItems.length - 1 ? 0 : current + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((current) => 
      current === 0 ? featuredItems.length - 1 : current - 1
    )
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {featuredItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="font-oswald text-3xl text-white mb-2">{item.title}</h2>
              <p className="text-white mb-4">{item.description}</p>
              <Link
                href={item.link}
                className="inline-block bg-nav-blue text-gray-800 font-noto px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                {item.type === 'article' ? 'Read More' :
                 item.type === 'game' ? 'Play Now' :
                 'Watch Video'}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
      >
        →
      </button>
    </div>
  )
}

export default FeaturedCarousel 