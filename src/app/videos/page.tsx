import VideoCategories from '@/components/videos/VideoCategories'

export const metadata = {
  title: 'Videos | Akarii\'s Corner',
  description: 'Game development videos, let\'s plays, and analysis content',
}

export default function VideosPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="font-oswald text-4xl mb-8">Videos</h1>
        
        <div className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/10 dark:to-orange-900/10 rounded-3xl shadow-lg p-8 border border-rose-100">
          <VideoCategories />
        </div>
      </div>
    </main>
  )
} 