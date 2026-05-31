import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Markdown blog posts — drop a new .md file in src/content/blog/ to publish.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('Guide'),
    readMins: z.number().default(4),
    draft: z.boolean().default(false),
    // Optional hero image (path under /blog-images/photos/...). Falls back to a
    // branded gradient banner when absent.
    heroImage: z.string().optional(),
    // CSS object-position for the hero crop, e.g. "center 70%" (default center 30%).
    heroPosition: z.string().optional(),
    // When true, the hero image is treated as a branded backdrop: darkened with
    // the Kip wordmark centred on top (used for calm nature scenes).
    heroLogo: z.boolean().optional(),
  }),
});

export const collections = { blog };
