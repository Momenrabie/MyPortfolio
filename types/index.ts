export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string | null;
  githubUrl: string | null;
  techStack: string[];
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
};
