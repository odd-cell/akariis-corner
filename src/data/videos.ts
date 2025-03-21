interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  url: string
  date: string
  category: string
  hidden?: boolean
}

export const videos: Video[] = [
  {
    id: "savanna-tales-dev",
    title: "Let's Play: Savanna Tales Dev Build",
    description: "Join me as I playtest the latest development build of Savanna Tales and share my thoughts on the progress.",
    thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/watch?v=savanna-tales-dev",
    date: "2024-03-15",
    category: "Let's Plays"
  },
  {
    id: "african-storytelling",
    title: "African Storytelling in Games",
    description: "An analysis of how African stories and folklore have been represented in video games throughout history.",
    thumbnail: "https://images.unsplash.com/photo-1528111657352-0f93a531fc47?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/watch?v=african-storytelling",
    date: "2024-03-01",
    category: "Analysis Videos"
  },
  {
    id: "unity-devlog-1",
    title: "Making a Game in Unity: Week 1",
    description: "Follow along as I document my first week of developing a new game project in Unity.",
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/watch?v=unity-devlog-1",
    date: "2024-02-15",
    category: "Development Videos"
  },
  {
    id: "combat-systems",
    title: "Game Design Deep Dive: Combat Systems",
    description: "Analyzing different combat systems in games and how they can be adapted for different genres.",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/watch?v=combat-systems",
    date: "2024-02-01",
    category: "Analysis Videos"
  }
]; 