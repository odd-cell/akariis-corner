# Akarii's Corner

A serene game design journal showcasing development journey, featuring articles, videos, game builds, and commentary.

## Features

- Dynamic featured content carousel
- Journal entries and articles
- Video library with categorized content
- Game development showcase
- About section
- Social media integration
- Responsive card-based layout with gradient backgrounds
- Dark mode support

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Updating Site Content

### Home Page
The home page features a carousel of featured content. To update:

1. Edit `src/data/featured.ts`:
```typescript
export const featuredItems = [
  {
    id: string;
    title: string;
    description: string;
    image: string;      // URL to image (local or Unsplash)
    link: string;       // URL or internal path
    type: 'article' | 'game' | 'video';
  }
]
```

### Journal Page
The journal section displays your articles and blog posts.

1. **Adding New Posts**
   - Edit `src/data/posts.ts`:
   ```typescript
   export const posts: Post[] = [
     {
       title: string;
       description: string;
       date: string;        // YYYY-MM-DD format
       image: string;       // URL to cover image
       slug: string;        // URL-friendly title
       category: string;    // e.g., "Development", "Design", "Art"
     }
   ]
   ```

2. **Images for Posts**
   - Option 1: Use Unsplash URLs (recommended for development)
     ```typescript
     image: "https://images.unsplash.com/photo-[id]?auto=format&fit=crop&w=800&q=80"
     ```
   - Option 2: Use local images
     - Place images in `public/images/journal/`
     - Reference as `/images/journal/your-image.jpg`

### Videos Page
The videos page organizes content into scrollable categories.

1. **Adding New Videos**
   - Edit `src/data/videos.ts`:
   ```typescript
   export const videos: Video[] = [
     {
       id: string;          // Unique identifier
       title: string;
       description: string;
       thumbnail: string;   // URL to thumbnail image
       url: string;         // YouTube or other video URL
       date: string;        // YYYY-MM-DD format
       category: "Let's Plays" | "Analysis Videos" | "Development Videos";
     }
   ]
   ```

2. **Video Thumbnails**
   - Option 1: Use Unsplash placeholders
     ```typescript
     thumbnail: "https://images.unsplash.com/photo-[id]?auto=format&fit=crop&w=800&q=80"
     ```
   - Option 2: Use local images
     - Place thumbnails in `public/images/videos/`
     - Reference as `/images/videos/your-thumbnail.jpg`

### Games Page
The games page showcases your game development projects.

1. **Adding/Updating Games**
   - Edit `src/data/games.ts`:
   ```typescript
   export const games: Game[] = [
     {
       id: string;          // Unique identifier
       title: string;
       description: string;
       coverImage: string;  // URL to cover image
       url: string;         // Link to game or project page
       status: 'In Development' | 'Released' | 'On Hold';
       technologies: string[];  // List of technologies used
     }
   ]
   ```

2. **Game Cover Images**
   - Option 1: Use Unsplash placeholders
     ```typescript
     coverImage: "https://images.unsplash.com/photo-[id]?auto=format&fit=crop&w=800&q=80"
     ```
   - Option 2: Use local images
     - Place images in `public/images/games/`
     - Reference as `/images/games/your-image.jpg`

### Image Management

1. **Directory Structure**
   ```
   public/
   ├── images/
   │   ├── journal/     # Journal post images
   │   ├── videos/      # Video thumbnails
   │   ├── games/       # Game cover images
   │   └── featured/    # Featured content images
   ```

2. **Image Guidelines**
   - Recommended dimensions:
     - Featured images: 1200x630px
     - Game covers: 800x450px
     - Video thumbnails: 800x450px
     - Journal images: 800x400px
   - Format: JPG or PNG
   - Max file size: 500KB

3. **Using Placeholder Images**
   - During development, you can use Unsplash images:
     ```typescript
     image: "https://images.unsplash.com/photo-[id]?auto=format&fit=crop&w=800&q=80"
     ```
   - Replace with your own images before production

### Styling

#### Theme Colors
- Cards use gradient backgrounds:
  - Games: `from-violet-50 to-blue-50`
  - Journal: `from-teal-50 to-cyan-50`
  - Videos: `from-rose-50 to-orange-50`
- Dark mode variants included with `/10` opacity

#### Card Components
- Rounded corners: `rounded-3xl` for containers, `rounded-2xl` for cards
- Translucent backgrounds: `bg-white/60 dark:bg-black/5`
- Backdrop blur: `backdrop-blur-sm`
- Subtle borders and shadows

## Project Structure

```
src/
├── app/                # Next.js app directory
├── components/         # React components
├── data/              # Content data files
├── types/             # TypeScript definitions
└── styles/            # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 