import { FeaturedItem } from '@/types/content'

export const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: "Welcome to Akarii's Corner",
    description: "An introduction to my game development journey and what to expect from this blog",
    image: "/images/featured/welcome.jpg",
    link: "/journal/2024-03-07-welcome",
    type: "article"
  },
  {
    id: 2,
    title: "Development Vlog #1",
    description: "Starting my game development journey",
    image: "/images/featured/dev-vlog-1.jpg",
    link: "/videos/dev-1",
    type: "video"
  },
  {
    id: 3,
    title: "First Game Project",
    description: "Check out my first game project in development",
    image: "/images/featured/game-1.jpg",
    link: "/games/first-project",
    type: "game"
  }
] 