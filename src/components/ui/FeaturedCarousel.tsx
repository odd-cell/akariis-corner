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
      title: 'Pokémon Uhuru: Alpha Version Announcement & Professor Introduction',
      description: "Introducing Pokémon Uhuru, an alpha build focusing on the Ishara region's story, map, and professors. Learn about the plot outline and meet Professors Acacia, Mangrove, and Blackwood.",
      image: '/images/journal/pokemon-uhuru/PokemonUhuruCover.png',
      link: '/journal/2025/04-11-pokemon-uhuru-alpha-announcement',
      type: 'article'
    },
    {
      id: 2,
      title: 'A New Journey Awaits',
      description: 'Embarking on a journey to create a Pokémon fan game that celebrates the rich cultural heritage of East and Southern Africa.',
      image: '/images/journal/pokemon-fangame-announcement.jpg',
      link: '/journal/2025/03-15-pokemon-fangame-announcement',
      type: 'article'
    },
    {
      id: 3,
      title: 'Introducing Obsidian: A Magical Library Adventure',
      description: 'Announcing my latest project, Obsidian - an epic adventure where you help Anubis rebuild the Great Library...',
      image: '/images/journal/obsidian-announcement.jpg',
      link: '/journal/2025/03-14-obsidian-announcement',
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

  // Add touch event handlers for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  
  // The required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div 
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg"
      onWheel={handleWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
              <h2 className="font-oswald text-xl sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2">{item.title}</h2>
              <p className="text-white text-sm sm:text-base mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">{item.description}</p>
              <Link
                href={item.link}
                className="inline-block bg-nav-blue text-gray-800 font-noto text-sm sm:text-base px-4 sm:px-6 py-1 sm:py-2 rounded-md hover:bg-opacity-90 transition-colors"
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
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 sm:p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 sm:p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default FeaturedCarousel 