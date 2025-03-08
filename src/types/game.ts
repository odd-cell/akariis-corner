export interface Game {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  url: string;
  status: 'In Development' | 'Released' | 'On Hold';
  technologies: string[];
} 