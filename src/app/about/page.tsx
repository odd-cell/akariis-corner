import Image from 'next/image'

export const metadata = {
  title: 'About | Akarii\'s Corner',
  description: 'Learn more about me, my journey in game development, and my creative process',
}

export default function AboutPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="font-oswald text-4xl mb-8">About Me</h1>
        
        {/* About Card */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/10 dark:to-yellow-900/10 rounded-3xl shadow-lg p-8 border border-orange-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg">
                Hello everyone! Habari gani? I am Akarii! It&apos;s nice to meet you. I am a game developer who is working to build inclusive worlds that highlight pan-african experiences.
              </p>
              
              <p>
                I&apos;ve always loved games and interactive experiences. My first introduction to the world of gaming was through the Gameboy Color. I started playing Pokemon Crystal before I could read, and my love for the game and my quest to understand it helped me to fall in love with reading, and by extension, education. I love the ways that games help us to learn through feedback, iteration, and improvement. Even a released piece of software is not yet complete. It may need to be patched and updated, but it isn&apos;t truly useful until someone starts it up and clicks around!
              </p>
              
              <p>
                When I&apos;m not programming or working on videos, I am most likely curled up playing a cozy indie game with my partner, and watching a cooking show or an anime. My love for art and media is not limited to gaming! I love cooking, writing, drawing, painting, and music making. I also strongly believe that the best creative practice is wholistic, meaning that this site is a home for a diverse medley of content that all falls under the same umbrella. And that umbrella covers my spot on this digital beach.
              </p>

              <p className="text-lg font-medium text-teal-600 dark:text-teal-300">
                If you&apos;ve found yourself here and want to watch my development journey, karibu. I invite you to stay a while. Let&apos;s play, learn, and grow together!
              </p>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10 rounded-3xl shadow-lg p-8 border border-teal-100">
          <section className="space-y-6">
            <h2 className="font-oswald text-2xl mb-6">Skills & Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 bg-white/60 dark:bg-black/5 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="font-bold text-lg">Game Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Unity', 'Godot', 'Unreal Engine', 'C#', 'C++', 'GDScript'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-200 rounded-full border border-teal-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 bg-white/60 dark:bg-black/5 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="font-bold text-lg">Art & Design</h3>
                <div className="flex flex-wrap gap-2">
                  {['Aseprite', 'PhotoShop', 'Blender', 'Maya', 'Illustrator', 'UI/UX Design'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-200 rounded-full border border-violet-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 bg-white/60 dark:bg-black/5 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="font-bold text-lg">Audio</h3>
                <div className="flex flex-wrap gap-2">
                  {['Audacity', 'SoundTrap', 'Garage Band'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-200 rounded-full border border-blue-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 bg-white/60 dark:bg-black/5 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="font-bold text-lg">Content Creation</h3>
                <div className="flex flex-wrap gap-2">
                  {['OBS Studio', 'Adobe Premiere', 'YouTube', 'Writing'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-200 rounded-full border border-orange-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 