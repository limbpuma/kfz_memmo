// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const features = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/features' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    icon: z.string(),
    description: z.string(),
  }),
});


export const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title:    z.string(),
    subtitle: z.string(),
    slug:     z.string(),
    client:   z.string(),
    date:     z.string(),
    category: z.string(),
    website:  z.string().url(),
    location: z.string(),
  }),
});


export const collections = {
  features,
  portfolio,
};
