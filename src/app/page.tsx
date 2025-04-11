import FeaturedCarousel from '@/components/ui/FeaturedCarousel'

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
        <FeaturedCarousel />
      </section>
    </main>
  )
} 