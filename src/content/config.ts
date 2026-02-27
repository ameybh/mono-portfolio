import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string().optional(),
    tags: z.string().optional(),
    cover_image: z.string().optional(),
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
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
});

export const collections = { blog, work };
