import { getGameBySlug } from '@/lib/content';
import { Game } from '@/types/content';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface GamePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = await getGameBySlug(params.slug);
  if (!game) return { title: 'Game Not Found' };
  
  return {
    title: `${game.frontmatter.title} - Akariis Corner`,
    description: game.frontmatter.description,
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const game = await getGameBySlug(params.slug) as Game;
  if (!game) notFound();

  const { frontmatter } = game;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
        <div className="aspect-video relative mb-8">
          <img
            src={frontmatter.coverImage}
            alt={`${frontmatter.title} cover`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-lg">{frontmatter.description}</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
          <ul className="list-disc pl-6">
            {frontmatter.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Technologies</h3>
              <ul className="list-disc pl-6">
                {frontmatter.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Platforms</h3>
              <ul className="list-disc pl-6">
                {frontmatter.platforms.map((platform, index) => (
                  <li key={index}>{platform}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 