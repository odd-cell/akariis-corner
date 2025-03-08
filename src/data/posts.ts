interface Post {
  title: string
  description: string
  date: string
  image: string
  slug: string
  category: string
}

export const posts: Post[] = [
  {
    title: "Welcome to My Game Dev Journey",
    description: "Join me as I embark on this exciting journey of game development, where I'll be sharing my experiences, challenges, and learnings.",
    date: "2024-02-01",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
    slug: "welcome-to-my-game-dev-journey",
    category: "Development"
  },
  {
    title: "Creating Inclusive Game Worlds",
    description: "Exploring ways to build more inclusive and diverse game worlds that represent pan-African experiences and stories.",
    date: "2024-02-15",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    slug: "creating-inclusive-game-worlds",
    category: "Design"
  },
  {
    title: "Learning Unity: Month One",
    description: "A retrospective look at my first month learning Unity, including challenges faced and lessons learned.",
    date: "2024-03-01",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    slug: "learning-unity-month-one",
    category: "Development"
  },
  {
    title: "Art Direction in Games",
    description: "Discussing the importance of consistent art direction in game development and how it impacts player experience.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=800&q=80",
    slug: "art-direction-in-games",
    category: "Art"
  }
] 