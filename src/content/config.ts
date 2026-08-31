import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // set automatically by scripts/fetch-gdocs.mjs so you can see
    // at a glance whether a page reflects the latest Google Doc content
    sourcedFrom: z.string().url().optional(),
    lastSynced: z.string().optional(),
  }),
});

export const collections = { docs };
