# Akarii's Corner

A personal website showcasing my game development journey, projects, and thoughts. Built with Next.js and TypeScript.

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

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management Guide

### Adding Journal Entries

1. Create a new markdown file in `src/content/journal/[YEAR]/[YEAR]-[MONTH]-[DAY]-[slug].md`
2. Include the following frontmatter at the top of your file:
   ```markdown
   ---
   title: "Your Article Title"
   date: "YYYY-MM-DD"
   description: "A brief description of your article"
   tags: ["tag1", "tag2", "tag3"]
   coverImage: "/images/journal/your-cover-image.jpg"
   ---
   ```
3. Write your content using Markdown syntax
4. Add your cover image to `public/images/journal/`

Example:
```markdown
---
title: "The Anatomy of Bad Game Design"
date: "2025-03-13"
description: "An in-depth exploration of what makes games fail..."
tags: ["game-design", "analysis", "game-development"]
coverImage: "/images/journal/bad-game-analysis.jpg"
---

Your content here...
```

### Updating the Featured Carousel

1. Open `src/components/FeaturedCarousel.tsx`
2. Locate the `featuredItems` array
3. Add or modify items using this format:
   ```typescript
   {
     id: [unique_number],
     title: 'Your Title',
     description: 'Brief description',
     image: '/images/featured/your-image.jpg',
     link: '/your-link-path',
     type: 'article' | 'game' | 'video'
   }
   ```
4. Add featured images to `public/images/featured/`
5. Images should be 1200x600 pixels for optimal display

### Adding Game Updates

1. Create a new game directory in `src/content/games/[game-slug]/`
2. Add an `index.md` file with the following frontmatter:
   ```markdown
   ---
   title: "Game Title"
   description: "Game description"
   coverImage: "/images/games/[game-slug]/cover.jpg"
   url: "link-to-playable-version"
   status: "In Development" | "Released" | "On Hold"
   technologies: ["tech1", "tech2"]
   ---
   ```
3. Create game assets directory at `public/images/games/[game-slug]/`
4. Add your game's cover image and other assets

### File Structure

```
src/
├── content/
│   ├── journal/
│   │   └── [YEAR]/
│   │       └── YYYY-MM-DD-slug.md
│   └── games/
│       └── [game-slug]/
│           └── index.md
public/
├── images/
│   ├── journal/
│   ├── games/
│   │   └── [game-slug]/
│   └── featured/
```

### Image Guidelines

- Journal covers: 1200x600px
- Featured carousel: 1200x600px
- Game covers: 1200x600px
- Use .jpg for photographs
- Use .png for graphics with transparency
- Optimize images for web use

### Content Writing Tips

1. **Journal Posts**
   - Use clear, descriptive titles
   - Include relevant tags
   - Break content into sections with headings
   - Use images to illustrate points

2. **Game Updates**
   - Keep status field updated
   - List all technologies used
   - Provide clear descriptions
   - Include playable links when available

## Development

This project uses:
- [Next.js](https://nextjs.org) for the framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Tailwind CSS](https://tailwindcss.com) for styling
- Markdown for content management

## Deployment

The site is deployed on [Vercel](https://vercel.com). Push to the main branch to trigger automatic deployment.

## Learn More

To learn more about the technologies used:
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org)

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