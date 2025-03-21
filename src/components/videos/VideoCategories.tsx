'use client'

import { videos } from '@/data/videos'
import VideoList from './VideoList'

const categories = [
  "Let's Plays",
  'Analysis Videos',
  'Development Videos'
]

export default function VideoCategories() {
  return (
    <div className="space-y-12">
      {categories.map(category => {
        const categoryVideos = videos
          .filter(video => !video.hidden)
          .filter(video => video.category === category)
        
        if (categoryVideos.length === 0) return null

        return (
          <section key={category} className="bg-white/60 dark:bg-black/5 p-6 rounded-2xl backdrop-blur-sm space-y-4">
            <h2 className="font-oswald text-2xl">{category}</h2>
            <VideoList videos={categoryVideos} />
          </section>
        )
      })}
    </div>
  )
} 