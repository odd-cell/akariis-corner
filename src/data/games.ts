import { Game } from '@/types/game'

export const games: Game[] = [
  {
    id: 'pixel-platformer',
    title: 'Pixel Platformer',
    description: 'A challenging platformer with unique mechanics and pixel art aesthetics. Master your abilities and discover secrets in this metroidvania-inspired world.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    url: 'https://itch.io',
    status: 'In Development',
    technologies: ['Unity', 'C#', 'Aseprite', 'FMOD']
  },
  {
    id: 'cozy-cafe',
    title: 'Cozy Café',
    description: 'Run your own magical café in this relaxing management sim. Brew potions, serve magical creatures, and create the coziest spot in the enchanted forest.',
    coverImage: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80',
    url: 'https://itch.io',
    status: 'On Hold',
    technologies: ['Godot', 'GDScript', 'Krita']
  },
  {
    id: 'space-explorer',
    title: 'Space Explorer',
    description: 'Explore procedurally generated galaxies in this atmospheric space exploration game. Discover alien artifacts, trade with space stations, and uncover cosmic mysteries.',
    coverImage: 'https://images.unsplash.com/photo-1550063873-ab792950096b?auto=format&fit=crop&w=800&q=80',
    url: 'https://itch.io',
    status: 'Released',
    technologies: ['Unreal Engine', 'C++', 'Blender', 'Wwise']
  },
  {
    id: 'savanna-tales',
    title: "Savanna Tales",
    description: "An adventure game exploring African folklore through the eyes of a young storyteller. Features puzzle-solving and narrative choices.",
    coverImage: "https://images.unsplash.com/photo-1516953955342-5d1452c7c184?auto=format&fit=crop&w=800&q=80",
    url: "/games/savanna-tales",
    status: "In Development",
    technologies: ['Unity', 'C#', 'Blender', 'FMOD']
  },
  {
    id: 'rhythm-warriors',
    title: "Rhythm Warriors",
    description: "A rhythm-based fighting game that combines traditional African music with modern game mechanics.",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    url: "/games/rhythm-warriors",
    status: "In Development",
    technologies: ['Unreal Engine', 'C++', 'Wwise']
  },
  {
    id: 'city-builder-lagos',
    title: "City Builder: Lagos",
    description: "A city management game set in a vibrant African metropolis. Balance growth, culture, and sustainability.",
    coverImage: "https://images.unsplash.com/photo-1516531558361-f6c4c956ad85?auto=format&fit=crop&w=800&q=80",
    url: "/games/city-builder",
    status: "In Development",
    technologies: ['Unity', 'C#', 'Maya', 'FMOD']
  },
  {
    id: 'pixel-market',
    title: "Pixel Market",
    description: "A cozy management game about running a local market. Trade goods, build relationships, and grow your business.",
    coverImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    url: "/games/pixel-market",
    status: "In Development",
    technologies: ['Godot', 'GDScript', 'Aseprite']
  }
]; 