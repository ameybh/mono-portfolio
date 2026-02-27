import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.string().optional(),
    cover_image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    tagline: z.string(),
    company: z.string(),
    tags: z.array(z.string()),
    metrics: z.array(z.object({ 
      value: z.string(), 
      label: z.string() 
    })),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, work };
