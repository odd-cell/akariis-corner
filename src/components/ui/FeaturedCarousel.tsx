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
  const [isScrolling, setIsScrolling] = useState(false)

  // Featured items from actual content
  const featuredItems: FeaturedItem[] = [
    {
      id: 1,
      title: 'A New Journey Awaits',
      description: 'Embarking on a journey to create a Pokémon fan game that celebrates the rich cultural heritage of East and Southern Africa.',
      image: '/images/featured/pokemon-fangame-announcement.jpg',
      link: '/journal/2025/03-15-pokemon-fangame-announcement',
      type: 'article'
    },
    {
      id: 2,
      title: 'The Anatomy of Bad Game Design',
      description: 'Explore what makes games fail and how to avoid common pitfalls in game development',
      image: '/images/featured/bad-game-analysis.jpg',
      link: '/journal/2025/03-13-bad-game-analysis',
      type: 'article'
    },
    {
      id: 3,
      title: 'Welcome to Akarii\'s Corner',
      description: 'Join me on my journey through game development, art, and content creation',
      image: '/images/featured/welcome-cover.jpg',
      link: '/journal/2025/03-12-welcome',
      type: 'article'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isScrolling) {
        setCurrentIndex((current) => 
          current === featuredItems.length - 1 ? 0 : current + 1
        )
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [featuredItems.length, isScrolling])

  const nextSlide = () => {
    setIsScrolling(true)
    setCurrentIndex((current) => 
      current === featuredItems.length - 1 ? 0 : current + 1
    )
    // Reset scrolling state after a delay
    setTimeout(() => setIsScrolling(false), 1000)
  }

  const prevSlide = () => {
    setIsScrolling(true)
    setCurrentIndex((current) => 
      current === 0 ? featuredItems.length - 1 : current - 1
    )
    // Reset scrolling state after a delay
    setTimeout(() => setIsScrolling(false), 1000)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault() // Prevent page scrolling
    if (Math.abs(e.deltaY) < 50) return // Ignore small scroll movements
    
    setIsScrolling(true)
    if (e.deltaY > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden rounded-lg"
      onWheel={handleWheel}
    >
      {featuredItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20" />
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
                onClick={(e) => {
                  // Prevent the click from being captured by other elements
                  e.stopPropagation()
                }}
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